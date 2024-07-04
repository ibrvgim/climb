import TasksList from './TasksList';

function TasksContainer() {
  return (
    <section className='flex gap-5 bg-gray-900 text-white col-[2_/_-1] py-8 px-6'>
      <TasksList category='Todo ( 4 )' color='text-red-500' />
      <TasksList category='In Progress ( 2 )' color='text-yellow-500' />
      <TasksList category='Done ( 3 )' color='text-green-500' />
    </section>
  );
}

export default TasksContainer;
