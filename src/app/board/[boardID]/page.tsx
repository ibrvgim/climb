import NoColumnCard from '@/components/main/NoColumnCard';
import TasksContainer from '@/components/main/TasksContainer';
import { getUser } from '@/data/auth/apiAuth';
import { redirect } from 'next/navigation';

async function BoardItemPage() {
  const user = await getUser();
  if (!user) redirect('/');

  return (
    <section className='relative overflow-auto'>
      <TasksContainer />
      {/* <NoColumnCard /> */}
    </section>
  );
}

export default BoardItemPage;
