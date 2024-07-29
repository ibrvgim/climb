import Link from 'next/link';
import { CiEdit } from 'react-icons/ci';
import slugify from 'slugify';
import { TaskType } from '@/types/type';
import DeleteAllButton from './DeleteAllButton';

function ColumActionButtons({
  tasks,
  path,
  category,
  color,
  boardName,
}: {
  tasks: TaskType[];
  path: string;
  category: string;
  color: string;
  boardName: string;
}) {
  return (
    <div className='flex items-center gap-2'>
      {tasks?.length >= 2 && (
        <DeleteAllButton boardName={boardName} category={category} />
      )}

      <Link
        href={`${path}/new-column/?editColumn=${slugify(category, {
          lower: true,
          trim: true,
        })}&color=${color}`}
        className='text-gray-500 text-[1.3rem] hover:text-indigo-400 transition-all'
      >
        <CiEdit />
      </Link>
    </div>
  );
}

export default ColumActionButtons;
