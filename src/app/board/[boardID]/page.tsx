import NoColumnCard from '@/components/main/NoColumnCard';
import TasksContainer from '@/components/main/TasksContainer';
import { getUser } from '@/data/auth/apiAuth';
import { getBoards } from '@/data/boards/apiBoards';
import { BoardType } from '@/types/type';
import { redirect } from 'next/navigation';
import slugify from 'slugify';

async function BoardItemPage({ params }: { params: { boardID: string } }) {
  const user = await getUser();
  if (!user) redirect('/');

  const boards: BoardType[] = await getBoards(user?.id);
  const currentColumn = boards.find(
    (item) => slugify(item.boardName, { lower: true }) === params.boardID
  );

  if (!currentColumn) redirect('/board');
  return (
    <section className='relative overflow-auto'>
      {!currentColumn?.boardColumns ||
      currentColumn?.boardColumns.length === 0 ? (
        <NoColumnCard />
      ) : (
        <TasksContainer currentColumn={currentColumn} />
      )}
    </section>
  );
}

export default BoardItemPage;
