'use server';

import { emailRegex } from '@/constants/regex';
import { logoutUser, signinUser, signupUser } from '@/data/auth/apiAuth';
import { redirect } from 'next/navigation';

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
    if (response?.session) redirect('/board/marketing-plans');
  } else return errors;
}

export async function signinAction(_: any, data: FormData) {
  const email = data.get('email') as string;
  const password = data.get('password') as string;

  const checkEmail = validEmail(email);
  const checkPassword = validPassword(password);

  if (checkEmail && checkPassword) {
    const response = await signinUser(email, password);
    if (response?.session) redirect('/board/marketing-plans');
  } else return errors;
}

export async function logoutAction() {
  await logoutUser();
  redirect('/');
}
