'use client';

import { createColumnAction } from '@/actions/columnsAction';
import Button from '@/components/general/Button';
import ColorsSelector from '@/components/general/ColorsSelector';
import GoBack from '@/components/general/GoBack';
import Input from '@/components/general/Input';
import { useFormState } from 'react-dom';

function NewColumnPage({
  params,
  searchParams,
}: {
  params: { boardID: string };
  searchParams: { editColumn: string; color: string };
}) {
  const [state, formAction] = useFormState(createColumnAction, {
    title: '',
    color: '',
    general: '',
  });
  const boardName = params?.boardID.split('-').join(' ');

  return (
    <section className='pt-8 pb-20 px-12 bg-gray-900 text-white'>
      <GoBack />
      <div className='flex justify-center mt-10'>
        <form
          className='flex flex-col gap-3 bg-gray-800 px-8 py-8 rounded-lg'
          action={formAction}
        >
          <input
            name='boardName'
            value={boardName}
            hidden
            className='hidden'
            readOnly
          />

          <input
            name='editColumn'
            value={searchParams.editColumn}
            hidden
            className='hidden'
            readOnly
          />

          <Input
            title='Column Name'
            name='title'
            placeholder='ex. Build Settings UI'
            error={state?.title}
            defaultValue={
              searchParams?.editColumn
                ? searchParams?.editColumn.split('-').join(' ')
                : ''
            }
          />

          <ColorsSelector defaultValue={searchParams?.color} />
          {state?.color && (
            <span className='ml-auto text-[13px] text-red-500 font-semibold'>
              {state?.color}
            </span>
          )}

          <Button>
            {searchParams.editColumn
              ? 'Save Column Changes'
              : 'Create New Column'}
          </Button>
          {state?.general && (
            <span className='ml-auto text-[13px] text-red-500 font-semibold mt-2 tracking-wider'>
              {state?.general}
            </span>
          )}
        </form>
      </div>
    </section>
  );
}

export default NewColumnPage;
