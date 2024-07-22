import { deleteTaskAction } from '@/actions/tasksAction';
import Link from 'next/link';

function TaskActionButtons({
  taskID,
  boardID,
  status,
}: {
  taskID: string;
  boardID: string;
  status: string;
}) {
  return (
    <div className='flex items-center gap-2'>
      <Link
        href={`/board/${boardID}/new-task/?taskID=${taskID}&status=${status}`}
        className='flex-1 flex justify-center items-center text-sm rounded-full border-2 w-32
        border-indigo-400 text-indigo-400 hover:opacity-75 transition-all font-semibold tracking-wider'
      >
        Edit
      </Link>

      <form action={deleteTaskAction}>
        <input
          name='taskID'
          value={taskID}
          hidden
          className='hidden'
          readOnly
        />
        <button
          className='flex-1 flex justify-center items-center text-sm rounded-full border-2 w-32
        border-red-400 text-red-400 hover:opacity-75 transition-all font-semibold tracking-wider'
        >
          Delete
        </button>
      </form>
    </div>
  );
}

export default TaskActionButtons;
