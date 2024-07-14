'use server';

import { symbolsRegex } from '@/constants/regex';
import { getUser } from '@/data/auth/apiAuth';
import {
  createBoard,
  deleteBoard,
  getBoards,
  updateBoardById,
} from '@/data/boards/apiBoards';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import slugify from 'slugify';

const error = {
  boardName: '',
};

// CREATE BOARD
export async function createBoardAction(_: any, data: FormData) {
  const user = await getUser();
  if (!user?.id) redirect('/');
  const currentBoardName = data.get('currentBoardName') as string;
  const boardName = data.get('boardName') as string;
  const action = data.get('action') as string;

  const boards = await getBoards(user?.id);
  const allBoards: string[] = boards.map((item) => item.boardName);

  const boardId = boards.find(
    (item) =>
      slugify(item.boardName, {
        lower: true,
        trim: true,
        remove: symbolsRegex,
      }) === currentBoardName
  )?.id;

  if (!boardName || boardName.trim() === '') {
    error.boardName = 'Must be filled in';
    return error;
  } else if (boardName.length < 5) {
    error.boardName = 'Minimum 5 characters';
    return error;
  } else if (symbolsRegex.test(boardName)) {
    error.boardName = 'Symbols are not allowed';
    return error;
  } else if (allBoards.includes(boardName.toLowerCase())) {
    error.boardName = 'Already exist';
    return error;
  } else {
    error.boardName = '';
  }

  if (action === 'edit-board') {
    await updateBoardById(boardId, {
      boardName: boardName.toLowerCase(),
    });
  } else {
    await createBoard(user?.id, boardName.toLowerCase());
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

// DELETE BOARD
export async function deleteBoardAction(data: FormData) {
  const user = await getUser();
  if (!user?.id) return;
  const boardName = data.get('boardName') as string;

  if (user?.id && boardName)
    await deleteBoard(user.id, boardName.split('-').join(' '));
  revalidatePath('/');

  const boards = await getBoards(user?.id);
  const nextBoard = boards.map((item) => item.boardName);

  if (nextBoard?.length > 0)
    redirect(
      `/board/${slugify(nextBoard?.[0], {
        lower: true,
        trim: true,
        remove: symbolsRegex,
      })}`
    );
  if (boards.length === 0) redirect('/board');
}
