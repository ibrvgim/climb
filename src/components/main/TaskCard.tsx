'use client';

import { symbolsRegex } from '@/constants/regex';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import slugify from 'slugify';

function TaskCard({ title }: { title: string }) {
  const path = usePathname();

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
      <p className='text-gray-400 text-sm mt-1'>0 of 3 subtasks</p>
    </Link>
  );
}

export default TaskCard;
