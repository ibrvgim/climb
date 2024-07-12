import { UserType } from '@/types/type';
import Logo from '../general/Logo';
import BoardsList from './BoardsList';
import Features from './Features';

function SideBar({ user }: { user: UserType | null }) {
  return (
    <section className='bg-gray-800 text-white row-span-full border-r-[1px] border-r-gray-600 py-8 min-h-screen'>
      <div className='flex px-9'>
        <Logo />
      </div>

      {user?.role === 'authenticated' ? <BoardsList /> : <Features />}
    </section>
  );
}

export default SideBar;
