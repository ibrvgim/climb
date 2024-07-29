'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Select({
  defaultValue,
  position = '',
  options,
}: {
  defaultValue?: string;
  position?: string;
  options: string[];
}) {
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
      <input name='status' value={value} hidden className='hidden' readOnly />
      <button
        className='flex items-center justify-between text-gray-400 text-[13px] border-[1px] border-gray-500 px-4 h-10 rounded-md w-full'
        onClick={handleShow}
        type='button'
      >
        {value.toUpperCase() || 'Select Status'}

        {show ? (
          <IoIosArrowUp className='text-indigo-400' />
        ) : (
          <IoIosArrowDown className='text-indigo-400' />
        )}
      </button>

      {show && (
        <Options
          options={options}
          handleValue={handleValue}
          position={position}
        />
      )}
    </div>
  );
}

function Options({
  options,
  handleValue,
  position,
}: {
  options: string[];
  handleValue: (data: string) => void;
  position: string;
}) {
  return (
    <div
      className={`flex flex-col bg-gray-800 w-full rounded-md mt-1 mb-10 border-[1px] border-gray-500 overflow-hidden ${position}`}
    >
      {options.map((option, index) => (
        <div
          key={option}
          className={`py-2 px-5 hover:text-gray-300 hover:bg-gray-700 hover:font-semibold
          ${
            index + 1 === options.length
              ? ''
              : 'border-b-[1px] border-b-gray-500 pb-2'
          }`}
        >
          <button
            className='w-full flex text-gray-400 text-xs font-medium uppercase tracking-wide'
            onClick={() => handleValue(option)}
            type='button'
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Select;
