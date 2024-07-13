import Image from 'next/image';
import BoardImage from '../../../public/images/board.svg';
import { getUser } from '@/data/auth/apiAuth';
import { getBoards } from '@/data/boards/apiBoards';
import { redirect } from 'next/navigation';
import slugify from 'slugify';
import Link from 'next/link';

async function BoardPage() {
  const user = await getUser();
  if (!user?.id) return;
  const boards = await getBoards(user?.id);
  const allBoardsName = boards.map((item) => item.boardName);

  if (boards.length > 0)
    redirect(`/board/${slugify(allBoardsName?.[0], { lower: true })}`);

  return (
    <div className='bg-gray-900 text-white col-[2_/_-1] p-8 h-ful flex flex-col items-center justify-center w-full h-full text-center'>
      <Image
        src={BoardImage}
        alt='journey image'
        width={360}
        height={360}
        draggable={false}
      />

      <p className='text-4xl text-gray-300 font-bold mt-14 mb-10 tracking-wider'>
        Start managing tasks by creating boards.
      </p>

      <Link
        href={`/board/?action=create-board`}
        className='flex items-center gap-2 border-2 border-indigo-400 px-8 py-1 rounded-md text-[13px] text-indigo-300 font-bold tracking-wider 
        hover:opacity-80 transition-opacity mt-6'
      >
        Create New Board
      </Link>
    </div>
  );
}

export default BoardPage;
