'use client';

import CreateNewTab from './CreateNewTab';
import TabButton from './TabButton';
import SortMenu from './SortMenu';
import { BoardType } from '@/types/type';
import { useState } from 'react';

function BoardsList({ boards }: { boards: BoardType[] }) {
  const [sortBy, setSortBy] = useState('earliest');

  const allBoards: string[] = boards
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      } else if (sortBy === 'earliest') {
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      } else
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
    })
    .map((item) => item.boardName);

  function handleSortBy(sort: string) {
    setSortBy(sort);
  }

  return (
    <div className='mt-16'>
      <div className='px-9 flex justify-between items-center'>
        <p className='text-gray-500 text-[15px] font-bold tracking-wide'>
          All Boards ( {allBoards.length} )
        </p>

        <SortMenu handleSortBy={handleSortBy} sortBy={sortBy} />
      </div>

      <ul className='flex flex-col gap-3 mt-7'>
        {allBoards.map((item) => (
          <li key={item} className='capitalize'>
            <TabButton title={item} />
          </li>
        ))}

        <li>
          <CreateNewTab />
        </li>
      </ul>
    </div>
  );
}

export default BoardsList;
