'use client';

import { useState } from 'react';
import { FaSortAmountDownAlt } from 'react-icons/fa';

function SortMenu({
  handleSortBy,
  sortBy,
}: {
  handleSortBy: (data: string) => void;
  sortBy: string;
}) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((show) => !show);
  }

  return (
    <div className='flex relative'>
      <button
        onClick={handleShow}
        className='text-[16px] text-gray-500 hover:text-indigo-400 transition-colors'
      >
        <FaSortAmountDownAlt />
      </button>
      {show && (
        <SortOptions
          handleShow={handleShow}
          handleSortBy={handleSortBy}
          sortBy={sortBy}
        />
      )}
    </div>
  );
}

function SortOptions({
  handleShow,
  handleSortBy,
  sortBy,
}: {
  handleShow: () => void;
  handleSortBy: (data: string) => void;
  sortBy: string;
}) {
  return (
    <div
      className='absolute top-7 right-[1px] bg-gray-700 min-w-48 z-30 flex flex-col gap-1 px-1 py-2 text-[12px] font-semibold 
    tracking-wide text-gray-400 rounded-[4px] border-[1px] border-gray-400 shadow-md'
    >
      <button
        className={`hover:text-gray-300 hover:bg-gray-800 rounded-[3px] px-3 py-1 flex transition-colors ${
          sortBy === 'latest' || !sortBy
            ? 'text-gray-300 bg-gray-800'
            : 'hover:opacity-80'
        }`}
        onClick={() => {
          handleShow();
          handleSortBy('latest');
        }}
      >
        Sort by Date ( latest )
      </button>

      <button
        className={`hover:text-gray-300 hover:bg-gray-800 rounded-[3px] px-3 py-1 flex transition-colors ${
          sortBy === 'earliest'
            ? 'text-gray-300 bg-gray-800'
            : 'hover:opacity-80'
        }`}
        onClick={() => {
          handleShow();
          handleSortBy('earliest');
        }}
      >
        Sort by Date ( earliest )
      </button>
    </div>
  );
}

export default SortMenu;
