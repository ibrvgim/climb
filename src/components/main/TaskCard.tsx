import Link from 'next/link';

function TaskCard() {
  return (
    <Link
      href=''
      className='bg-gray-800 border-[1px] border-gray-600 px-4 py-6 rounded-lg'
    >
      <p className='text-gray-300 font-bold tracking-wide text-[15px]'>
        Build UI dashboard for admins.
      </p>
      <p className='text-gray-400 text-sm mt-1'>0 of 3 subtasks</p>
    </Link>
  );
}

export default TaskCard;
