'use server';

import { getUser } from '@/data/auth/apiAuth';
import { getTasks, updateTasks } from '@/data/tasks/apiTasks';
import { ErrorsType } from '@/types/type';
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

  const checkTitle = validValue('title', title, 5);
  const checkDescription = validValue('description', description, 20);
  const checkStatus = validValue('status', status, 1);
  const checkBoardName = validValue('boardName', boardName, 1);

  if (!checkTitle || !checkDescription || !checkStatus || !checkBoardName) {
    return errors;
  } else {
    await updateTasks(user?.id, {
      tasks: [
        {
          title,
          description,
          status,
          boardName,
          subtasks: [
            subtaskOne,
            subtaskTwo,
            subtaskThree,
            subtaskFour,
            subtaskFive,
          ],
        },
        ...allCurrentTasks,
      ],
    });

    revalidatePath('/board');
    redirect(`/board/${slugify(boardName, { lower: true, trim: true })}`);
  }
}
