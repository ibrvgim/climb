'use client';

import { SubtaskType } from '@/types/type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function TaskCard({
  id,
  title,
  subtasks,
}: {
  id: string;
  title: string;
  subtasks: SubtaskType[] | null[];
}) {
  const path = usePathname();
  const validSubtasks = subtasks?.filter(
    (item) => item?.title !== null
  )?.length;

  const checkedSubtasks = subtasks.filter(
    (item) => item?.title !== null && item?.checked === true
  )?.length;

  return (
    <Link
      href={`${path}/${id}`}
      className='bg-gray-800 border-[1px] border-gray-600 px-4 py-6 rounded-lg'
    >
      <p className='text-gray-300 font-bold tracking-wide text-[15px]'>
        {title}
      </p>

      {validSubtasks > 0 ? (
        <p className='text-gray-400 text-sm mt-1'>
          {checkedSubtasks} of {validSubtasks} subtasks
        </p>
      ) : (
        <p className='text-gray-400 text-sm tracking-wider mt-1'>
          No Subtasks.
        </p>
      )}
    </Link>
  );
}

export default TaskCard;
