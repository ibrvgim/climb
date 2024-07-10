import { createClient } from '../supabase/server';

// SIGNUP USER
export async function signupUser(email: string, password: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error?.message);
  return data;
}

// SIGNIN USER
export async function signinUser(email: string, password: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error?.message);
  return data;
}

// GET USER
export async function getUser() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

// SIGNOUT USER
export async function logoutUser() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error?.message);
}
