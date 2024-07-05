'use client';

import { useState } from 'react';
import AddNewColumn from './AddNewColumn';
import ScrollingSlider from './ScrollingSlider';
import TasksList from './TasksList';

function TasksContainer() {
  const [slide, setSlide] = useState(0);

  function handleNext() {
    setSlide((slide) => slide + 1);
  }

  console.log(slide);

  return (
    <section className='bg-gray-900 text-white col-[2_/_-1] p-8 h-full overflow-auto absolute'>
      <div className={`flex gap-5 transform ${`translate-x-[${slide}px]`}`}>
        <TasksList category='Todo ( 4 )' color='text-red-500' />
        <TasksList category='In Progress ( 2 )' color='text-yellow-500' />
        <TasksList category='Done ( 3 )' color='text-green-500' />

        <AddNewColumn />
      </div>

      <div className='relative'>
        <ScrollingSlider handleNext={handleNext} />
      </div>
    </section>
  );
}

export default TasksContainer;
