import TaskCard from './TaskCard';
import { FaRegDotCircle } from 'react-icons/fa';

interface Props {
  category: string;
  color: string;
}

function TasksList({ category, color }: Props) {
  return (
    <div className='w-80'>
      <div className='flex items-center gap-3 mb-6'>
        <span className={`text-sm ${color}`}>
          <FaRegDotCircle />
        </span>
        <p className='uppercase text-[13px] tracking-widest text-gray-400 font-light'>
          {category}
        </p>
      </div>

      <div className='flex flex-col gap-3'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default TasksList;
