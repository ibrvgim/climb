import { UserType } from '@/types/type';
import Logo from '../general/Logo';
import BoardsList from './BoardsList';
import Features from './Features';
import { getBoards } from '@/data/boards/apiBoards';

async function SideBar({ user }: { user: UserType | null }) {
  const boards = user?.id ? await getBoards(user?.id) : [];

  return (
    <section className='bg-gray-800 text-white row-span-full border-r-[1px] border-r-gray-600 py-8 min-h-screen'>
      <div className='flex px-9'>
        <Logo />
      </div>

      {user?.role === 'authenticated' ? (
        <BoardsList boards={boards} />
      ) : (
        <Features />
      )}
    </section>
  );
}

export default SideBar;
