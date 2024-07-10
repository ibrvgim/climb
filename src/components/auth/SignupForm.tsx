'use client';

import Link from 'next/link';
import Button from '../general/Button';
import Input from '../general/Input';
import { signupAction } from '@/actions/authAction';
import { useFormState } from 'react-dom';

function SignupForm() {
  const [state, formAction] = useFormState(signupAction, {
    email: '',
    password: '',
  });

  return (
    <form
      action={formAction}
      className='min-w-[430px] min-h-64 bg-gray-700 rounded-lg px-7 py-8 flex flex-col gap-5 justify-center'
    >
      <p className='text-gray-300 text-2xl font-extrabold tracking-widest uppercase mb-1 border-b-[1px] border-b-gray-500 pb-3'>
        Sign Up
      </p>

      <Input
        name='email'
        title='Email Address'
        placeholder='ex. climb@company.com'
        error={state?.email}
      />

      <Input
        name='password'
        title='Password'
        type='password'
        placeholder='Minimum 8 characters'
        error={state?.password}
      />

      <div className='flex flex-col gap-4'>
        <Button>Create Account</Button>

        <div className='flex gap-3 items-center'>
          <div className='flex-1 h-[1px] bg-gray-500 rounded-full'>&nbsp;</div>
          <p className='text-center text-gray-300 font-bold uppercase'>or</p>
          <div className='flex-1 h-[1px] bg-gray-500 rounded-full'>&nbsp;</div>
        </div>

        <Link
          href='?auth=signin'
          className='border-[1px] border-gray-400 py-1 rounded-full tracking-wider text-gray-300 text-xs font-bold 
      hover:border-indigo-400 hover:text-indigo-400 transition-all w-full text-center uppercase'
        >
          Sign In
        </Link>
      </div>
    </form>
  );
}

export default SignupForm;
