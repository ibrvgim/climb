import { getBoards } from '@/data/boards/apiBoards';
import CreateNewTab from './CreateNewTab';
import TabButton from './TabButton';
import { getUser } from '@/data/auth/apiAuth';

async function BoardsList() {
  const user = await getUser();
  if (!user?.id) return;
  const boards = await getBoards(user?.id);
  const allBoards: string[] = boards.map((item) => item.boardName);

  return (
    <div className='mt-16'>
      <p className='text-gray-500 text-[15px] font-bold tracking-wide px-9'>
        All Boards ( {allBoards.length} )
      </p>

      <ul className='flex flex-col gap-3 mt-7'>
        {allBoards.map((item) => (
          <li key={item} className='capitalize'>
            <TabButton title={item} />
          </li>
        ))}

        <li>
          <CreateNewTab />
        </li>
      </ul>
    </div>
  );
}

export default BoardsList;
