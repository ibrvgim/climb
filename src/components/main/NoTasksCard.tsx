'use client';

import Image from 'next/image';
import TaskImage from '../../../public/images/task.svg';
import Link from 'next/link';
import { deleteColumnAction } from '@/actions/columnsAction';

function NoTasksCard({
  category,
  path,
  boardName,
}: {
  category: string;
  path: string;
  boardName: string;
}) {
  return (
    <div className='py-12 w-80 min-h-[calc(100dvh-13rem)] border-2 border-indigo-400 border-dashed rounded-lg flex flex-col justify-center items-center'>
      <Image
        src={TaskImage}
        alt='tasks image'
        width={180}
        height={180}
        draggable={false}
      />
      <p className='uppercase text-xl text-gray-300 font-extrabold mt-10'>
        No Tasks
      </p>

      <Link
        href={`${path}/new-task/?status=${category}`}
        className='flex items-center justify-center gap-2 border-2 border-indigo-400 min-w-40 py-1 rounded-md text-[13px] text-indigo-300 font-bold tracking-wider 
        hover:opacity-80 transition-opacity mt-6'
      >
        Create New Task
      </Link>

      <form action={deleteColumnAction}>
        <input
          name='info'
          value={`${boardName}%${category}`}
          hidden
          className='hidden'
          readOnly
        />
        <button
          className='flex items-center justify-center gap-2 border-2 border-red-500 min-w-40 py-1 rounded-md text-[13px] 
        text-red-400 font-bold tracking-wider hover:opacity-80 transition-opacity mt-2'
        >
          Delete Column
        </button>
      </form>
    </div>
  );
}

export default NoTasksCard;
