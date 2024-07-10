'use client';

import { logoutAction } from '@/actions/authAction';
import { useFormStatus } from 'react-dom';
import { IoMdLogOut } from 'react-icons/io';

function SignoutButton() {
  const { pending } = useFormStatus();

  return (
    <form title='Sign Out' action={logoutAction} className='flex items-center'>
      <button
        className={`text-[28px] text-red-500 hover:opacity-85 transition-opacity ${
          pending ? 'opacity-60' : ''
        }`}
        disabled={pending}
      >
        {pending ? <span className='loader-mini-red'></span> : <IoMdLogOut />}
      </button>
    </form>
  );
}

export default SignoutButton;
