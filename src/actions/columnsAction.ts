'use server';

import { symbolsRegex } from '@/constants/regex';
import { getUser } from '@/data/auth/apiAuth';
import { getBoards, updateBoard } from '@/data/boards/apiBoards';
import { getTasks, updateTasks } from '@/data/tasks/apiTasks';
import { BoardType, TaskType } from '@/types/type';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import slugify from 'slugify';

const errors = {
  title: '',
  color: '',
  general: '',
};

function validValue(key: 'title' | 'color', value: string, message: string) {
  if (!value || value.trim() === '') {
    errors[key] = message;
    return false;
  } else if (symbolsRegex.test(value)) {
    errors.title = 'Symbols are not allowed';
    return false;
  } else {
    errors[key] = '';
    return true;
  }
}

export async function createColumnAction(_: any, data: FormData) {
  const user = await getUser();
  if (!user?.id) return;
  const boards: BoardType[] = await getBoards(user?.id);
  const [tasks] = await getTasks(user.id);

  const editColumn = data.get('editColumn') as string;
  const boardName = data.get('boardName') as string;
  const title = data.get('title') as string;
  const color = data.get('color') as string;

  const checkTitle = validValue('title', title, 'Must be filled in');
  const checkColor = validValue('color', color, 'Color must be chosen');

  const allColumns =
    boards.find((item) => item.boardName === boardName)?.boardColumns || [];

  if (!checkTitle || !checkColor) return errors;

  if (editColumn) {
    const convertEditCOlumn = editColumn.split('-').join(' ');
    const updatedColumns = allColumns.slice();
    const index = updatedColumns.findIndex(
      (item) => item.title === convertEditCOlumn
    );
    const editedCOlumn = { title: title.toLowerCase(), color: color };
    updatedColumns.splice(index, 1, editedCOlumn);

    const changeTasksStatus = tasks.tasks.map((item: TaskType) => {
      if (item.status === editColumn)
        return {
          ...item,
          status: title,
        };
      else return item;
    });

    await updateBoard(user?.id, boardName, {
      boardColumns: updatedColumns,
    });

    await updateTasks(user.id, { tasks: changeTasksStatus });
  } else {
    if (
      allColumns
        .map((item) => item.title.toLowerCase().trim())
        .includes(title.toLowerCase().trim())
    ) {
      errors.general = 'Column name already exist';
      return errors;
    }

    await updateBoard(user?.id, boardName, {
      boardColumns: [...allColumns, { title: title.toLowerCase(), color }],
    });
  }

  revalidatePath('/');
  redirect(
    `/board/${slugify(boardName, {
      lower: true,
      trim: true,
      remove: symbolsRegex,
    })}`
  );
}

export async function deleteColumnAction(data: FormData) {
  const user = await getUser();
  if (!user?.id) return;
  const boards = await getBoards(user.id);
  const info = data.get('info') as string;
  const [boardName, category] = info.split('%');
  if (!boardName || !category) return;

  const allCOlumns = boards.find(
    (item) => item.boardName.toLowerCase() === boardName.toLowerCase()
  )?.boardColumns;

  const filterColumns = allCOlumns.filter(
    (item: { title: string; color: string }) => item.title !== category
  );

  if (filterColumns) {
    await updateBoard(user.id, boardName, { boardColumns: filterColumns });
    revalidatePath('/board');
  }
}
