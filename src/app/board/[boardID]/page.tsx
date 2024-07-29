import NoColumnCard from '@/components/main/NoColumnCard';
import TasksContainer from '@/components/main/TasksContainer';
import { getUser } from '@/data/auth/apiAuth';
import { getBoards } from '@/data/boards/apiBoards';
import { BoardType } from '@/types/type';
import { redirect } from 'next/navigation';
import slugify from 'slugify';

export async function generateMetadata({
  params: { boardID },
}: {
  params: { boardID: string };
}) {
  return {
    title: boardID
      .split('-')
      .map(
        (item) => item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
      )
      .join(' '),
  };
}

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
        <TasksContainer currentColumn={currentColumn} user={user} />
      )}
    </section>
  );
}

export default BoardItemPage;
