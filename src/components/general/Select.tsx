'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const options = ['todo', 'doing', 'done'];

function Select({ defaultValue }: { defaultValue?: string }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  function handleShow() {
    setShow((show) => !show);
  }

  function handleValue(input: string) {
    setValue(input);
    handleShow();
  }

  return (
    <div className='relative w-96'>
      <button
        className='flex items-center justify-between border-[1px] text-gray-400 text-sm border-gray-500 px-4 py-2 rounded-md w-full'
        onClick={handleShow}
      >
        {value.toUpperCase() || 'Select Status'}

        {show ? (
          <IoIosArrowUp className='text-indigo-400' />
        ) : (
          <IoIosArrowDown className='text-indigo-400' />
        )}
      </button>

      {show && <Options options={options} handleValue={handleValue} />}
    </div>
  );
}

function Options({
  options,
  handleValue,
}: {
  options: string[];
  handleValue: (data: string) => void;
}) {
  return (
    <div className='flex flex-col bg-gray-800 w-full rounded-md mt-1 mb-4 border-[1px] border-gray-500 overflow-hidden'>
      {options.map((option, index) => (
        <button
          key={option}
          className={`flex text-gray-400 text-xs font-medium uppercase tracking-wide py-2 px-5 
            hover:text-gray-300 hover:bg-gray-700 hover:font-semibold
            ${
              index + 1 === options.length
                ? ''
                : 'border-b-[1px] border-b-gray-500 pb-2'
            }`}
          onClick={() => handleValue(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Select;
