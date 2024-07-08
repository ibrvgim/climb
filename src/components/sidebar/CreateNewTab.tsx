'use client';

import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

function CreateNewTab() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((show) => !show);
  }

  return (
    <div>
      {show ? (
        <form className='flex flex-col px-4 py-5 mx-4 mt-4 bg-gray-900 rounded-lg'>
          <div className='flex items-center justify-between mb-5'>
            <p className='text-gray-300 font-extrabold tracking-wider text-xs uppercase'>
              Board Name
            </p>
            <button
              type='button'
              className='text-[19px] text-gray-400 hover:text-indigo-400 transition-all'
              onClick={handleShow}
            >
              <IoClose />
            </button>
          </div>
          <input
            name='boardName'
            type='text'
            placeholder='ex. Marketing Plans'
            className='h-9 text-gray-300 placeholder:text-gray-600 font-bold text-xs rounded-md px-3 border-[1px] border-gray-500 
            bg-transparent w-full'
          />
          <button className='bg-indigo-400 text-[10px] text-gray-100 font-extrabold tracking-wider px-5 py-1 rounded-[3px] ml-auto mt-4 hover:bg-indigo-500 transition-all uppercase'>
            Done
          </button>
        </form>
      ) : (
        <button
          className='flex flex-row justify-start items-center gap-3 pl-9 py-2 text-indigo-400 text-sm tracking-wider font-bold 
      hover:opacity-70 transition-all'
          onClick={handleShow}
        >
          <FaPlus />
          Create New Board
        </button>
      )}
    </div>
  );
}

export default CreateNewTab;
