'use client';

import { BoardType } from '@/types/type';
import { useParams, usePathname } from 'next/navigation';

function NavTitle({ boards }: { boards: BoardType[] }) {
  const params: { boardID: string } = useParams();
  const path = usePathname();
  const isNewTaskPath = path.includes('new-task');
  const isNewColumnPath = path.includes('new-column');

  if (!params?.boardID || boards.length === 0) return <div>&nbsp;</div>;
  const boardTitle = params?.boardID.split('-').join(' ');

  return (
    <p className='text-xl tracking-wider font-bold text-gray-200 capitalize'>
      {isNewTaskPath
        ? 'Create New Task'
        : isNewColumnPath
        ? 'Create New Column'
        : boardTitle}
    </p>
  );
}

export default NavTitle;
