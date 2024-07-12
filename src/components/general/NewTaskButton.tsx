'use client';

import { BoardType } from '@/types/type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiSolidEditAlt } from 'react-icons/bi';

function NewTaskButton({ boards }: { boards: BoardType[] }) {
  const path = usePathname();
  const isNewTaskPath = path.includes('new-task');
  const isNewColumnPath = path.includes('new-column');
  const isActive = boards.length > 0;

  return (
    <>
      {!isNewTaskPath && !isNewColumnPath && isActive && (
        <Link
          href={`${path}/new-task`}
          className='flex items-center gap-2 bg-indigo-400 px-12 py-1 rounded-full text-sm font-bold tracking-wider hover:bg-indigo-500 transition-colors'
        >
          <BiSolidEditAlt className='text-base' />
          New Task
        </Link>
      )}

      {!isActive && (
        <button
          className={`flex items-center gap-2 bg-indigo-400 px-12 py-1 rounded-full text-sm font-bold tracking-wider transition-colors ${
            !isActive ? 'opacity-60' : ''
          }`}
          disabled={!isActive}
        >
          <BiSolidEditAlt className='text-base' />
          New Task
        </button>
      )}
    </>
  );
}

export default NewTaskButton;
