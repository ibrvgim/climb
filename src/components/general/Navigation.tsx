'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiSolidEditAlt } from 'react-icons/bi';

function Navigation() {
  const path = usePathname();
  const isNewTaskPath = path.includes('new-task');
  const isNewColumnPath = path.includes('new-column');

  return (
    <nav className='flex items-center justify-between px-8 bg-gray-800 text-white col-[2_/_-1] border-b-[1px] border-b-gray-600'>
      <p className='text-xl tracking-wider font-bold text-gray-200'>
        {isNewTaskPath
          ? 'Create New Task'
          : isNewColumnPath
          ? 'Create New Column'
          : 'Marketing Plans'}
      </p>

      {!isNewTaskPath && !isNewColumnPath && (
        <Link
          href={`${path}/new-task`}
          className='flex items-center gap-2 bg-indigo-400 px-12 py-1 rounded-full text-sm font-bold tracking-wider hover:bg-indigo-500 transition-colors'
        >
          <BiSolidEditAlt className='text-base' />
          New Task
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
