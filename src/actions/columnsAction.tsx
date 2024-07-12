'use server';

import { getUser } from '@/data/auth/apiAuth';
import { getBoards, updateBoard } from '@/data/boards/apiBoards';
import { BoardType } from '@/types/type';
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
  } else {
    errors[key] = '';
    return true;
  }
}

export async function createColumnAction(_: any, data: FormData) {
  const user = await getUser();
  if (!user?.id) return;
  const boards: BoardType[] = await getBoards(user?.id);

  const boardName = data.get('boardName') as string;
  const title = data.get('title') as string;
  const color = data.get('color') as string;

  const checkTitle = validValue('title', title, 'Must be filled in');
  const checkColor = validValue('color', color, 'Color must be chosen');

  const allColumns =
    boards.find((item) => item.boardName === boardName)?.boardColumns || [];

  if (!checkTitle || !checkColor) return errors;
  else if (
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
  revalidatePath('/');
  redirect(`/board/${slugify(boardName, { lower: true })}`);
}
