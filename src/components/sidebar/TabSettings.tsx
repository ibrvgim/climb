'use client';

import { deleteBoardAction } from '@/actions/boardsAction';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useFormState } from 'react-dom';

function TabSettings() {
  const params: { boardID: string } = useParams();
  const [state, formAction] = useFormState(deleteBoardAction, {
    general: '',
    boardName: '',
  });

  return (
    <div>
      <div className='flex gap-2 bg-gray-700 pb-4 pt-11 px-4 rounded-br-xl -mt-5'>
        <Link
          href={`${params?.boardID}/?action=edit-board`}
          className='border-indigo-400 text-indigo-400 border-2 flex-1 flex justify-center font-medium items-center 
        w-full text-sm rounded-full transition-all hover:opacity-75'
        >
          Edit
        </Link>

        <form className='flex-1' action={formAction}>
          <input
            name='boardName'
            value={params?.boardID}
            hidden
            className='hidden'
            readOnly
          />
          <SettingsButton style='border-red-500 text-red-500'>
            Delete
          </SettingsButton>
        </form>
      </div>

      {state?.general && (
        <p className='text-red-500 font-semibold text-xs tracking-widest mt-4 normal-case px-5'>
          {state?.general}
        </p>
      )}
    </div>
  );
}

function SettingsButton({
  children,
  style,
}: {
  children: React.ReactNode;
  style: string;
}) {
  return (
    <button
      className={`${style} border-2 flex-1 flex justify-center font-medium items-center w-full text-sm rounded-full transition-all hover:opacity-75`}
    >
      {children}
    </button>
  );
}

export default TabSettings;
