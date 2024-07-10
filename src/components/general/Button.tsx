'use client';

import { useFormStatus } from 'react-dom';

interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`flex justify-center items-center bg-indigo-400 py-1 rounded-full tracking-wider text-white text-sm font-bold mt-3 transition-all 
        ${pending ? 'opacity-65' : 'hover:bg-indigo-500'}`}
      disabled={pending}
    >
      {pending ? <span className='loader-mini'></span> : children}
    </button>
  );
}

export default Button;
