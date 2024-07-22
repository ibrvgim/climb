'use client';

import { usePathname } from 'next/navigation';
import NoTasksCard from './NoTasksCard';
import TaskCard from './TaskCard';
import { FaRegDotCircle } from 'react-icons/fa';
import { TaskType } from '@/types/type';
import ColumActionButtons from './ColumActionButtons';
import Link from 'next/link';
import { IoIosAddCircleOutline } from 'react-icons/io';

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

  const currentTasks: TaskType[] = tasks?.[0]?.tasks.filter(
    (item: TaskType) => item.boardName === boardName && item.status === category
  );

  return (
    <div className='w-80'>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-3'>
          <span className={`text-[13px] ${color}`}>
            <FaRegDotCircle />
          </span>
          <p className='uppercase text-[13px] tracking-widest text-gray-400'>
            {category}
          </p>
        </div>

        <ColumActionButtons
          tasks={currentTasks}
          path={path}
          category={category}
          color={color}
          boardName={boardName}
        />
      </div>

      {currentTasks?.length > 0 ? (
        <div className='flex flex-col gap-3'>
          {currentTasks?.map((item) => (
            <TaskCard
              key={item.id}
              id={item.id}
              title={item.title}
              subtasks={item.subtasks}
            />
          ))}

          <Link
            href={`${path}/new-task/?status=${category}`}
            className='py-2 border-2 border-indigo-400 border-dashed rounded-lg flex gap-1 justify-center items-center 
        text-sm font-bold tracking-wider opacity-80 text-indigo-400 hover:opacity-100 transition-all mt-4 mb-20'
          >
            <IoIosAddCircleOutline className='text-xl' />
            New Task
          </Link>
        </div>
      ) : (
        <NoTasksCard category={category} path={path} boardName={boardName} />
      )}
    </div>
  );
}

export default TasksList;
