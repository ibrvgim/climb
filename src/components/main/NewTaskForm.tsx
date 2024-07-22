'use client';

import { createTaskAction } from '@/actions/tasksAction';
import Input from '../general/Input';
import Textarea from '../general/Textarea';
import OptionalSubtasks from '../general/OptionalSubtasks';
import Select from '../general/Select';
import Button from '../general/Button';
import { useFormState } from 'react-dom';
import { usePathname, useSearchParams } from 'next/navigation';
import { TaskType } from '@/types/type';

function NewTaskForm({
  allColumns,
  editTask,
}: {
  allColumns: string[];
  editTask: TaskType;
}) {
  const [state, formAction] = useFormState(createTaskAction, {});
  const path = usePathname();
  const boardName = path.split('/')?.[2].split('-').join(' ');
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  return (
    <form
      className='flex flex-col gap-5 bg-gray-800 px-8 py-8 rounded-lg'
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
        name='editTask'
        value={editTask?.id}
        hidden
        className='hidden'
        readOnly
      />

      <Input
        title='Title'
        name='title'
        placeholder='ex. Build Settings UI'
        error={state?.title}
        defaultValue={editTask?.title}
      />

      <Textarea
        title='Description'
        name='description'
        placeholder='ex. Keep iterating through the subtasks until we are clear on the core concepts for the app.'
        error={state?.description}
        defaultValue={editTask?.description}
      />

      <OptionalSubtasks
        defaultOptions={editTask?.subtasks.filter(
          (item) => item.title !== null
        )}
      />

      <div>
        <p className='flex items-center w-full text-gray-300 font-bold tracking-wider text-sm mb-2'>
          Choose Status
          {state?.status && (
            <span className='ml-auto text-xs text-red-500 font-semibold'>
              {state?.status}
            </span>
          )}
        </p>
        <Select
          position='absolute'
          options={allColumns}
          defaultValue={status || ''}
        />
      </div>

      <Button>{editTask?.id ? 'Save Task Changes' : 'Create New Task'}</Button>
    </form>
  );
}

export default NewTaskForm;
