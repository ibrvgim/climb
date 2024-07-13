'use client';

import { IoClose } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { useFormState, useFormStatus } from 'react-dom';
import { createBoardAction } from '@/actions/boardsAction';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function CreateNewTab() {
  const params: { boardID: string } = useParams();
  const searchParams = useSearchParams();
  const [state, formAction] = useFormState(createBoardAction, {
    boardName: '',
  });
  const { pending } = useFormStatus();
  const action = searchParams.get('action');
  const isActive = action === 'create-board' || action === 'edit-board';

  const defaultValue = params?.boardID
    ? params?.boardID
        .split('-')
        .map(
          (item) =>
            item.slice(0, 1).toUpperCase() + item.slice(1).toLocaleLowerCase()
        )
        .join(' ')
    : '';

  return (
    <div>
      {isActive ? (
        <form
          className='flex flex-col px-4 py-5 mx-4 mt-4 bg-gray-900 rounded-lg'
          action={formAction}
        >
          <input
            name='action'
            value={action}
            hidden
            className='hidden'
            readOnly
          />

          <input
            name='currentBoardName'
            value={params?.boardID}
            hidden
            className='hidden'
            readOnly
          />

          <div className='flex items-center justify-between mb-5'>
            <p className='text-gray-300 font-extrabold tracking-wider text-xs uppercase'>
              Board Name
            </p>
            <Link
              href={`/board/${params?.boardID}`}
              type='button'
              className='text-[19px] text-gray-400 hover:text-indigo-400 transition-all'
            >
              <IoClose />
            </Link>
          </div>

          <input
            name='boardName'
            type='text'
            placeholder='ex. Marketing Plans'
            className='h-9 text-gray-300 placeholder:text-gray-600 font-bold text-xs rounded-md px-3 border-[1px] border-gray-500 
            bg-transparent w-full'
            defaultValue={action === 'edit-board' ? defaultValue : ''}
          />

          <div className='flex items-center justify-between mt-6'>
            {state?.boardName && (
              <p className='text-red-500 font-semibold text-xs tracking-wider'>
                {state?.boardName}
              </p>
            )}

            <button
              className={`bg-indigo-400 text-[10px] text-gray-100 font-extrabold tracking-wider px-5 py-1 rounded-[3px] ml-auto
                hover:bg-indigo-500 transition-all uppercase ${
                  pending ? 'opacity-50' : ''
                }`}
              disabled={pending}
            >
              Done
            </button>
          </div>
        </form>
      ) : (
        <Link
          href={
            params?.boardID
              ? `/board/${params?.boardID}/?action=create-board`
              : '/board/?action=create-board'
          }
          className='flex flex-row justify-start items-center gap-3 pl-9 py-2 text-indigo-400 text-sm tracking-wider font-bold 
      hover:opacity-70 transition-all'
        >
          <FaPlus />
          Create New Board
        </Link>
      )}
    </div>
  );
}

export default CreateNewTab;
