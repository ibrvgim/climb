import { createClient } from '../supabase/server';

export async function getTasks(userId: string) {
  const supabase = createClient();

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('tasks')
    .eq('userId', userId);

  if (error) throw new Error(error?.message);
  return tasks;
}

export async function createTasks(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tasks')
    .insert([{ userId: userId }])
    .select();

  if (error) throw new Error(error?.message);
  return data;
}

export async function updateTasks(userId: string, updatedValue: any) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tasks')
    .update(updatedValue)
    .eq('userId', userId)
    .select();

  if (error) throw new Error(error?.message);
  return data;
}
