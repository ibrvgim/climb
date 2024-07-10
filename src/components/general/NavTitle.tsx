'use client';

import { usePathname } from 'next/navigation';

function NavTitle() {
  const path = usePathname();
  const isNewTaskPath = path.includes('new-task');
  const isNewColumnPath = path.includes('new-column');

  return (
    <p className='text-xl tracking-wider font-bold text-gray-200'>
      {isNewTaskPath
        ? 'Create New Task'
        : isNewColumnPath
        ? 'Create New Column'
        : 'Marketing Plans'}
    </p>
  );
}

export default NavTitle;
