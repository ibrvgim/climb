'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FiLayout } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import slugify from 'slugify';
import TabSettings from './TabSettings';

function TabButton({ title }: { title: string }) {
  const [show, setShow] = useState(false);
  const path = usePathname();
  const searchParams = useSearchParams();
  const action = searchParams.get('action');
  const slug = slugify(title, { lower: true });
  const isActive = path.split('/')?.[2] === slug;
  const shortenTitle = title.length > 19 ? `${title.slice(0, 19)}...` : title;

  function handleSettings() {
    setShow((show) => !show);
  }

  return (
    <div className='mr-10'>
      <Link
        href={`/board/${slug}`}
        className={`flex flex-row items-center justify-between pl-9 pr-5 py-2 rounded-r-full transition-all z-20 relative ${
          isActive
            ? 'bg-indigo-400 text-white'
            : 'text-gray-500 hover:bg-gray-700 hover:text-gray-400'
        }`}
      >
        <div className='flex flex-row items-center gap-3'>
          <div className='text-[17px]'>
            <FiLayout />
          </div>
          <p className='font-bold text-sm tracking-wider'>{shortenTitle}</p>
        </div>

        {isActive && (
          <button className='text-lg' onClick={handleSettings}>
            <HiOutlineDotsHorizontal />
          </button>
        )}
      </Link>

      {isActive && show && action !== 'edit-board' && <TabSettings />}
    </div>
  );
}

export default TabButton;
