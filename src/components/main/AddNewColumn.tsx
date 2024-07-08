'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPlus } from 'react-icons/fa6';

function AddNewColumn() {
  const path = usePathname();

  return (
    <div>
      <div className='flex items-center gap-3 mb-5'>&nbsp;</div>
      <Link
        href={`${path}/new-column`}
        className='flex items-center justify-center gap-2 min-h-[calc(100dvh-13rem)] w-80 bg-gray-800 border-[1px] border-gray-600 rounded-lg mb-6 text-3xl 
        font-bold tracking-wider text-gray-600 hover:text-gray-500 transition-all'
      >
        <FaPlus className='text-2xl' />
        New Column
      </Link>
    </div>
  );
}

export default AddNewColumn;
