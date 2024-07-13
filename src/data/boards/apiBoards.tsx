import { createClient } from '../supabase/server';

export async function getBoards(id: string) {
  const supabase = createClient();

  const { data: boards, error } = await supabase
    .from('boards')
    .select('*')
    .eq('userId', id);

  if (error) throw new Error(error?.message);
  return boards;
}

export async function createBoard(userId: string, board: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('boards')
    .insert([{ userId: userId, boardName: board }])
    .select();

  if (error) throw new Error(error?.message);
  return data;
}

export async function updateBoard(
  userId: string,
  boardName: string,
  updatedBoard: any
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('boards')
    .update(updatedBoard)
    .eq('userId', userId)
    .eq('boardName', boardName)
    .select();

  if (error) throw new Error(error?.message);
  return data;
}

export async function updateBoardById(boardId: string, updatedBoard: any) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('boards')
    .update(updatedBoard)
    .eq('id', boardId)
    .select();

  if (error) throw new Error(error?.message);
  return data;
}

export async function deleteBoard(userId: string, boardName: string) {
  const supabase = createClient();

  const { error } = await supabase
    .from('boards')
    .delete()
    .eq('userId', userId)
    .eq('boardName', boardName);

  if (error) throw new Error(error?.message);
}
