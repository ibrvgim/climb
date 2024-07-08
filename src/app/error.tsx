'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ErrorImage from '../../public/images/error.svg';

function ErrorPage({
  error,
  reset,
}: {
  error: { message: string };
  reset: () => void;
}) {
  const route = useRouter();

  return (
    <div className='flex flex-col items-center py-16 px-12 bg-gray-900 text-white text-center'>
      <Image
        src={ErrorImage}
        alt='not found image'
        draggable={false}
        height={200}
        width={200}
      />
      <p className='text-3xl uppercase tracking-widest font-extrabold mb-6 mt-12'>
        Something Went Wrong
      </p>
      <p className='text-lg lowercase tracking-wider font-semibold text-rose-500 mb-8'>
        {error.message}
      </p>

      <div className='flex flex-col gap-3'>
        <button
          onClick={reset}
          className='border-2 border-indigo-400 text-gray-300 px-10 font-semibold py-1 rounded-md hover:opacity-80 transition-opacity'
        >
          Try Again
        </button>
        <button
          onClick={() => route.back()}
          className='border-2 border-indigo-400 text-gray-300 px-10 font-semibold py-1 rounded-md hover:opacity-80 transition-opacity'
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
