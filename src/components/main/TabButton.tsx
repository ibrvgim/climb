import Link from 'next/link';
import { FiLayout } from 'react-icons/fi';

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
    <Link
      href={link}
      className={`flex flex-row items-center gap-3 px-9 mr-10 py-2 rounded-r-full transition-all ${
        isActive
          ? 'bg-indigo-400 text-white'
          : 'text-gray-500 hover:bg-gray-700 hover:text-gray-400'
      }`}
    >
      <div className='text-[17px]'>
        <FiLayout />
      </div>
      <p className='font-bold text-sm tracking-wider'>{title}</p>
    </Link>
  );
}

export default TabButton;
