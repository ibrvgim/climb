'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import JourneyImage from '../../../public/images/journey.svg';
import Image from 'next/image';

function NoColumnCard() {
  const path = usePathname();

  return (
    <div className='bg-gray-900 text-white col-[2_/_-1] p-8 h-ful flex flex-col items-center justify-center w-full h-full'>
      <Image
        src={JourneyImage}
        alt='journey image'
        width={350}
        height={350}
        draggable={false}
      />

      <p className='text-2xl text-gray-300 font-bold mt-14 mb-10'>
        No columns yet. Start by creating a new column.
      </p>

      <Link
        href={`${path}/new-column`}
        className='px-6 py-2 border-2 border-indigo-400 rounded-lg text-sm text-gray-100 font-bold hover:opacity-80 transition-opacity'
      >
        Create New Column
      </Link>
    </div>
  );
}

export default NoColumnCard;
