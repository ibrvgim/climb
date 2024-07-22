'use server';

import { emailRegex, symbolsRegex } from '@/constants/regex';
import {
  getUser,
  logoutUser,
  signinUser,
  signupUser,
} from '@/data/auth/apiAuth';
import { getBoards } from '@/data/boards/apiBoards';
import { createTasks } from '@/data/tasks/apiTasks';
import { CredentialsType } from '@/types/type';
import { redirect } from 'next/navigation';
import slugify from 'slugify';

const errors: CredentialsType = {
  email: '',
  password: '',
};

function validEmail(value: string) {
  if (!value || value.trim() === '') {
    errors.email = 'Field must be filled in';
    return false;
  } else if (!emailRegex.test(value)) {
    errors.email = 'Wrong email format';
    return false;
  } else {
    errors.email = '';
    return true;
  }
}

function validPassword(value: string) {
  if (!value || value.trim() === '') {
    errors.password = 'Field must be filled in';
    return false;
  } else if (value.length < 8) {
    errors.password = 'Minimum 8 characters';
    return false;
  } else {
    errors.password = '';
    return true;
  }
}

export async function signupAction(_: any, data: FormData) {
  const email = data.get('email') as string;
  const password = data.get('password') as string;

  const checkEmail = validEmail(email);
  const checkPassword = validPassword(password);

  if (checkEmail && checkPassword) {
    const response = await signupUser(email, password);
    if (response?.user) await createTasks(response?.user?.id);
    redirect('/board');
  } else return errors;
}

export async function signinAction(_: any, data: FormData) {
  const email = data.get('email') as string;
  const password = data.get('password') as string;
  const user = await getUser();
  const boards: any = user?.id && (await getBoards(user?.id));
  const allBoards: string[] = boards?.map(
    (item: { boardName: string }) => item.boardName
  );

  const checkEmail = validEmail(email);
  const checkPassword = validPassword(password);

  if (checkEmail && checkPassword) {
    const response = await signinUser(email, password);
    if (response?.session && allBoards?.[0])
      redirect(
        `/board/${slugify(allBoards?.[0], {
          lower: true,
          trim: true,
          remove: symbolsRegex,
        })}`
      );
  } else return errors;
}

export async function logoutAction() {
  await logoutUser();
  redirect('/');
}
