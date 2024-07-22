'use client';

import Input from './Input';
import { IoClose } from 'react-icons/io5';
import OutlineButton from './OutlineButton';
import { useEffect, useState } from 'react';
import { SubtaskType } from '@/types/type';

const placeholders = [
  'Finish User UI',
  'Fix Dashboard Bugs',
  'Refine Admin Page',
  'Internal & External Testing',
  'Start Search Page',
];

function OptionalSubtasks({
  defaultOptions,
}: {
  defaultOptions?: SubtaskType[];
}) {
  const [subtasks, setSubtasks] = useState<SubtaskType[]>([]);
  const id = crypto.randomUUID().slice(0, 7).toString();

  useEffect(() => {
    if (defaultOptions) setSubtasks(defaultOptions);
  }, [defaultOptions]);

  function handleNewSubtask(newItem: SubtaskType) {
    if (subtasks.length < 5) setSubtasks((item) => [...item, newItem]);
  }

  function removeSubtask(deleteItem: string) {
    setSubtasks(subtasks?.filter((item) => item.id !== deleteItem));
  }

  return (
    <div>
      <p className='text-gray-300 font-bold tracking-wider text-sm mb-2'>
        Subtasks <span className='text-xs text-gray-400'>( max. 5 )</span>
      </p>

      <div className='flex flex-col gap-2 mb-2'>
        {subtasks?.map((item, index) => (
          <div key={item.id} className='flex gap-1 items-center'>
            <div className='flex-1'>
              <Input
                name={`subtask-${index + 1}`}
                placeholder={`ex. ${placeholders[Number(index)]}`}
                defaultValue={item?.title}
              />
            </div>

            <button
              type='button'
              className='text-gray-400 text-xl hover:text-red-400 transition-all'
              onClick={() => removeSubtask(item.id)}
            >
              <IoClose />
            </button>
          </div>
        ))}
      </div>

      {subtasks.length < 5 && (
        <OutlineButton
          handleClick={() =>
            handleNewSubtask({ id: id, title: '', checked: false })
          }
        >
          Add New Subtask
        </OutlineButton>
      )}
    </div>
  );
}

export default OptionalSubtasks;
