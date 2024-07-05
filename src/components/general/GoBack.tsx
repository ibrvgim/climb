'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';

function GoBack() {
  const router = useRouter();

  return (
    <button
      className='flex gap-1 items-center text-gray-400 text-[15px] opacity-70 font-semibold
      hover:text-indigo-400 hover:opacity-100 transition-all'
      onClick={() => router.back()}
    >
      <IoIosArrowRoundBack className='size-6 -ml-1' />
      Go Back
    </button>
  );
}

export default GoBack;
