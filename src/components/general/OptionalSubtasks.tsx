'use client';

import Input from './Input';
import { IoClose } from 'react-icons/io5';
import OutlineButton from './OutlineButton';
import { useState } from 'react';

const placeholders = [
  'Finish User UI',
  'Fix Dashboard Bugs',
  'Refine Admin Page',
  'Internal & External Testing',
  'Start Search Page',
];

function OptionalSubtasks() {
  const [subtasks, setSubtasks] = useState<string[]>([]);

  function handleNewSubtask(newItem: string) {
    if (subtasks.length < 5) setSubtasks((item) => [...item, newItem]);
  }

  function removeSubtask(id: string | number) {
    setSubtasks(subtasks?.filter((item) => item !== id));
  }

  return (
    <div>
      <p className='text-gray-300 font-bold tracking-wider text-sm mb-2'>
        Subtasks <span className='text-xs text-gray-400'>( max. 5 )</span>
      </p>

      <div className='flex flex-col gap-2 mb-2'>
        {subtasks?.map((item) => (
          <div key={item} className='flex gap-1 items-center'>
            <div className='flex-1'>
              <Input
                name={`subtask-${item}`}
                placeholder={`ex. ${placeholders[Number(item) - 1]}`}
              />
            </div>

            <button
              type='button'
              className='text-gray-400 text-xl hover:text-red-400 transition-all'
              onClick={() => removeSubtask(item)}
            >
              <IoClose />
            </button>
          </div>
        ))}
      </div>

      {subtasks.length < 5 && (
        <OutlineButton
          handleClick={() => handleNewSubtask(String(subtasks.length + 1))}
        >
          Add New Subtask
        </OutlineButton>
      )}
    </div>
  );
}

export default OptionalSubtasks;
