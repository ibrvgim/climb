import AddNewColumn from './AddNewColumn';
import TasksList from './TasksList';

function TasksContainer() {
  return (
    <section className='bg-gray-900 text-white col-[2_/_-1] p-8 h-full absolute'>
      <div className='flex gap-5 transition-transform duration-300'>
        <TasksList category='Todo ( 4 )' color='text-red-400' />
        <TasksList category='In Progress ( 2 )' color='text-yellow-400' />
        <TasksList category='Done ( 3 )' color='text-green-400' />
        <AddNewColumn />
      </div>
    </section>
  );
}

export default TasksContainer;
