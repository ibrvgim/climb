'use client';

import { deleteBoardAction } from '@/actions/boardsAction';
import { useParams } from 'next/navigation';

function TabSettings() {
  const params: { boardID: string } = useParams();

  return (
    <div className='flex gap-2 bg-gray-700 pb-4 pt-11 px-4 rounded-br-xl -mt-5'>
      <form className='flex-1'>
        <SettingsButton style='border-indigo-400 text-indigo-400'>
          Edit
        </SettingsButton>
      </form>

      <form className='flex-1' action={deleteBoardAction}>
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
