import Link from 'next/link';
import { FiLayout } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import TabSettings from './TabSettings';

function TabButton({
  title,
  link,
  isActive = false,
}: {
  title: string;
  link: string;
  isActive: boolean;
}) {
  return (
    <div className='mr-10'>
      <Link
        href={link}
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
          <p className='font-bold text-sm tracking-wider'>{title}</p>
        </div>

        {isActive && (
          <button className='text-lg'>
            <HiOutlineDotsHorizontal />
          </button>
        )}
      </Link>

      {/* {isActive && <TabSettings />} */}
    </div>
  );
}

export default TabButton;
