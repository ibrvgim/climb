'use client';

import { usePathname } from 'next/navigation';
import NoTasksCard from './NoTasksCard';
import TaskCard from './TaskCard';
import { FaRegDotCircle } from 'react-icons/fa';
import { TaskType } from '@/types/type';

interface Props {
  category: string;
  color: string;
  tasks: {
    tasks: TaskType[];
  }[];
}

function TasksList({ category, color, tasks }: Props) {
  const path = usePathname();
  const boardName = path.split('/')?.[2].split('-').join(' ');

  const currentTasks: TaskType[] = tasks?.[0].tasks.filter(
    (item: TaskType) => item.boardName === boardName && item.status === category
  );

  return (
    <div className='w-80'>
      <div className='flex items-center gap-3 mb-6'>
        <span className={`text-[13px] ${color}`}>
          <FaRegDotCircle />
        </span>
        <p className='uppercase text-[13px] tracking-widest text-gray-400'>
          {category}
        </p>
      </div>

      {currentTasks.length > 0 ? (
        <div className='flex flex-col gap-3'>
          {currentTasks?.map((item) => (
            <TaskCard
              key={item.title + item.description}
              title={item.title}
              subtasks={item.subtasks}
            />
          ))}

          <div className='mb-6'>&nbsp;</div>
        </div>
      ) : (
        <NoTasksCard category={category} />
      )}
    </div>
  );
}

export default TasksList;
