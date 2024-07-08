import NoColumnCard from '@/components/main/NoColumnCard';
import TasksContainer from '@/components/main/TasksContainer';

function BoardItemPage() {
  return (
    <section className='relative overflow-auto'>
      <TasksContainer />
      {/* <NoColumnCard /> */}
    </section>
  );
}

export default BoardItemPage;
