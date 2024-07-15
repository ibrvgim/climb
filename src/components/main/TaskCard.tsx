'use client';

import { symbolsRegex } from '@/constants/regex';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import slugify from 'slugify';

function TaskCard({
  title,
  subtasks,
}: {
  title: string;
  subtasks: string[] | null[];
}) {
  const path = usePathname();
  const validSubtasks = subtasks?.filter(
    (item: string | null) => item !== null
  ).length;

  return (
    <Link
      href={`${path}/${slugify(title, {
        lower: true,
        trim: true,
        remove: symbolsRegex,
      })}`}
      className='bg-gray-800 border-[1px] border-gray-600 px-4 py-6 rounded-lg'
    >
      <p className='text-gray-300 font-bold tracking-wide text-[15px]'>
        {title}
      </p>

      {validSubtasks > 0 ? (
        <p className='text-gray-400 text-sm mt-1'>
          0 of {validSubtasks} subtasks
        </p>
      ) : (
        <p className='text-gray-400 text-sm mt-1'>No subtasks</p>
      )}
    </Link>
  );
}

export default TaskCard;
