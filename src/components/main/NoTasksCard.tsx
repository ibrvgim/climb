'use client';

import Image from 'next/image';
import TaskImage from '../../../public/images/task.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NoTasksCard({ category }: { category: string }) {
  const path = usePathname();

  return (
    <div className='py-12 w-80 min-h-[calc(100dvh-13rem)] border-2 border-indigo-400 border-dashed rounded-lg flex flex-col justify-center items-center'>
      <Image src={TaskImage} alt='tasks image' width={200} height={200} />
      <p className='uppercase text-2xl text-gray-300 font-extrabold mt-10'>
        No Task
      </p>
      <Link
        href={`${path}/new-task/?status=${category}`}
        className='flex items-center gap-2 border-2 border-indigo-400 px-8 py-1 rounded-md text-[13px] text-indigo-300 font-bold tracking-wider 
        hover:opacity-80 transition-opacity mt-6'
      >
        Create New Task
      </Link>
    </div>
  );
}

export default NoTasksCard;
