'use server';

import { getUser } from '@/data/auth/apiAuth';
import { getTasks, updateTasks } from '@/data/tasks/apiTasks';
import { ErrorsType, TaskType } from '@/types/type';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import slugify from 'slugify';

const errors: ErrorsType = {};

function validValue(key: string, value: string, length: number) {
  if (!value || value.trim() === '') {
    errors[key] = 'Field must be filled in';
    return false;
  } else if (value.length < length) {
    errors[key] = `Minimum ${length} characters`;
    return false;
  } else {
    errors[key] = '';
    return true;
  }
}

export async function createTaskAction(_: any, data: FormData) {
  const user = await getUser();
  if (!user?.id) return;
  const tasks = await getTasks(user?.id);
  const allCurrentTasks = tasks?.[0].tasks;

  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const status = data.get('status') as string;
  const boardName = data.get('boardName') as string;
  const subtaskOne = data.get('subtask-1') as string;
  const subtaskTwo = data.get('subtask-2') as string;
  const subtaskThree = data.get('subtask-3') as string;
  const subtaskFour = data.get('subtask-4') as string;
  const subtaskFive = data.get('subtask-5') as string;

  const editTask = data.get('editTask') as string;

  const checkTitle = validValue('title', title, 5);
  const checkDescription = validValue('description', description, 20);
  const checkStatus = validValue('status', status, 1);
  const checkBoardName = validValue('boardName', boardName, 1);

  if (!checkTitle || !checkDescription || !checkStatus || !checkBoardName) {
    return errors;
  } else {
    if (editTask) {
      const updatedTasks = allCurrentTasks.map((item: TaskType) => {
        if (item.id === editTask) {
          return {
            ...item,
            title: title,
            description: description,
            status: status,
            subtasks: [
              {
                id: item.subtasks[0]?.id,
                title: subtaskOne,
                checked: item.subtasks[0]?.checked,
              },
              {
                id: item.subtasks[1]?.id,
                title: subtaskTwo,
                checked: item.subtasks[1]?.checked,
              },
              {
                id: item.subtasks[2]?.id,
                title: subtaskThree,
                checked: item.subtasks[2]?.checked,
              },
              {
                id: item.subtasks[3]?.id,
                title: subtaskFour,
                checked: item.subtasks[3]?.checked,
              },
              {
                id: item.subtasks[4]?.id,
                title: subtaskFive,
                checked: item.subtasks[4]?.checked,
              },
            ],
          };
        } else return item;
      });

      await updateTasks(user?.id, { tasks: updatedTasks });
    } else
      await updateTasks(user?.id, {
        tasks: [
          {
            id: Date.now().toString(),
            title,
            description,
            status,
            boardName,
            subtasks: [
              {
                id: crypto.randomUUID().slice(0, 7).toString(),
                title: subtaskOne,
                checked: false,
              },
              {
                id: crypto.randomUUID().slice(0, 7).toString(),
                title: subtaskTwo,
                checked: false,
              },
              {
                id: crypto.randomUUID().slice(0, 7).toString(),
                title: subtaskThree,
                checked: false,
              },
              {
                id: crypto.randomUUID().slice(0, 7).toString(),
                title: subtaskFour,
                checked: false,
              },
              {
                id: crypto.randomUUID().slice(0, 7).toString(),
                title: subtaskFive,
                checked: false,
              },
            ],
          },
          ...allCurrentTasks,
        ],
      });

    revalidatePath('/board');

    if (editTask) {
      redirect(
        `/board/${slugify(boardName, { lower: true, trim: true })}/${editTask}`
      );
    } else
      redirect(`/board/${slugify(boardName, { lower: true, trim: true })}`);
  }
}

export async function deleteTaskAction(data: FormData) {
  const user = await getUser();
  const taskID = data.get('taskID') as string;
  if (!taskID || !user?.id) return;
  const [tasks] = await getTasks(user.id);

  const filterTasks: TaskType[] = tasks?.tasks.filter(
    (item: TaskType) => item.id !== taskID
  );

  await updateTasks(user?.id, { tasks: filterTasks });
  revalidatePath('/board');
  redirect('/board');
}

export async function deleteAllTasksAction(data: FormData) {
  const user = await getUser();
  const boardName = data.get('boardName') as string;
  const category = data.get('category') as string;
  if (!boardName || !user?.id) return;
  const [tasks] = await getTasks(user.id);

  const filterTasks: TaskType[] = tasks?.tasks.filter((item: TaskType) => {
    if (item.boardName === boardName) return item.status !== category;
    else return item;
  });

  await updateTasks(user?.id, { tasks: filterTasks });
  revalidatePath('/board');
}

export async function updateTaskStatus(data: FormData) {
  console.log(data);
}
