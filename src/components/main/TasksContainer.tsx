import { BoardType, UserType } from '@/types/type';
import AddNewColumn from './AddNewColumn';
import TasksList from './TasksList';
import { getTasks } from '@/data/tasks/apiTasks';

async function TasksContainer({
  currentColumn,
  user,
}: {
  currentColumn: BoardType | undefined;
  user: UserType;
}) {
  const tasks = await getTasks(user?.id);

  return (
    <section className='bg-gray-900 text-white col-[2_/_-1] p-8 h-full absolute'>
      <div className='flex gap-5 transition-transform duration-300'>
        {currentColumn?.boardColumns.map((item) => (
          <TasksList
            key={item.title}
            category={item.title}
            color={item.color}
            tasks={tasks}
          />
        ))}

        <AddNewColumn />
      </div>
    </section>
  );
}

export default TasksContainer;
