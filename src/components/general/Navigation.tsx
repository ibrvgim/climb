'use client';

import SignoutButton from './SignoutButton';
import NavTitle from './NavTitle';
import NewTaskButton from './NewTaskButton';
import { BoardType, UserType } from '@/types/type';
import { useParams, useSearchParams } from 'next/navigation';

function Navigation({
  user,
  boards,
}: {
  user: UserType | null;
  boards: BoardType[];
}) {
  const searchParams = useSearchParams();
  const params = useParams();
  const auth = searchParams.get('auth');

  return (
    <nav className='flex items-center justify-between px-8 bg-gray-800 text-white col-[2_/_-1] border-b-[1px] border-b-gray-600'>
      {user?.role === 'authenticated' ? (
        <>
          <NavTitle boards={boards} />
          <div className='flex items-center gap-10'>
            {!params.taskID && <NewTaskButton boards={boards} />}
            <SignoutButton />
          </div>
        </>
      ) : (
        <p className='tracking-wider font-extrabold text-gray-300 uppercase'>
          {auth === 'signup'
            ? 'Join Us Today - Start Your Journey!'
            : 'Welcome Back - we are glad to see you again!'}
        </p>
      )}
    </nav>
  );
}

export default Navigation;
