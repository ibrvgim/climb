import { BoardType } from '@/types/type';
import AddNewColumn from './AddNewColumn';
import TasksList from './TasksList';

async function TasksContainer({
  currentColumn,
}: {
  currentColumn: BoardType | undefined;
}) {
  return (
    <section className='bg-gray-900 text-white col-[2_/_-1] p-8 h-full absolute'>
      <div className='flex gap-5 transition-transform duration-300'>
        {currentColumn?.boardColumns.map((item) => (
          <TasksList
            key={item.title}
            category={item.title}
            color={item.color}
          />
        ))}

        <AddNewColumn />
      </div>
    </section>
  );
}

export default TasksContainer;
