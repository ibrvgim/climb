'use client';

import { symbolsRegex } from '@/constants/regex';
import { BoardType } from '@/types/type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiSolidEditAlt } from 'react-icons/bi';
import slugify from 'slugify';

function NewTaskButton({ boards }: { boards: BoardType[] }) {
  const path = usePathname();
  const isNewTaskPath = path.includes('new-task');
  const isNewColumnPath = path.includes('new-column');
  const isActive = boards.length > 0;
  const fetchPath = path.split('/')?.[2];

  const currentBoardColumns =
    boards.find(
      (item) =>
        slugify(item.boardName, {
          lower: true,
          trim: true,
          remove: symbolsRegex,
        }) === fetchPath
    )?.boardColumns || [];

  return (
    <>
      {!isNewTaskPath &&
        !isNewColumnPath &&
        isActive &&
        currentBoardColumns?.length > 0 && (
          <Link
            href={`${path}/new-task`}
            className='flex items-center gap-2 bg-indigo-400 px-12 py-1 rounded-full text-sm font-bold tracking-wider hover:bg-indigo-500 transition-colors'
          >
            <BiSolidEditAlt className='text-base' />
            New Task
          </Link>
        )}

      {(!isActive || currentBoardColumns?.length === 0) && (
        <button
          className={`flex items-center gap-2 bg-indigo-400 px-12 py-1 rounded-full text-sm font-bold tracking-wider transition-colors ${
            !isActive || currentBoardColumns?.length === 0 ? 'opacity-60' : ''
          }`}
          disabled={!isActive || currentBoardColumns?.length === 0}
        >
          <BiSolidEditAlt className='text-base' />
          New Task
        </button>
      )}
    </>
  );
}

export default NewTaskButton;
