'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiSolidEditAlt } from 'react-icons/bi';

function NewTaskButton() {
  const path = usePathname();
  const isNewTaskPath = path.includes('new-task');
  const isNewColumnPath = path.includes('new-column');

  return (
    <>
      {!isNewTaskPath && !isNewColumnPath && (
        <Link
          href={`${path}/new-task`}
          className='flex items-center gap-2 bg-indigo-400 px-12 py-1 rounded-full text-sm font-bold tracking-wider hover:bg-indigo-500 transition-colors'
        >
          <BiSolidEditAlt className='text-base' />
          New Task
        </Link>
      )}
    </>
  );
}

export default NewTaskButton;
