import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function ScrollingSlider({ handleNext }: { handleNext: () => void }) {
  return (
    <div className='flex items-center gap-7 fixed bottom-10 left-[50rem]'>
      <button className='text-3xl text-gray-500 hover:text-gray-400 transition-all'>
        <IoIosArrowBack />
      </button>

      <div className='flex items-center gap-1'>
        <div className='h-1 w-7 bg-gray-600 rounded-full'>&nbsp;</div>
        <div className='h-1 w-7 bg-gray-600 rounded-full'>&nbsp;</div>
        <div className='h-1 w-7 bg-gray-600 rounded-full'>&nbsp;</div>
      </div>

      <button
        className='text-3xl text-gray-500 hover:text-gray-400 transition-all'
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default ScrollingSlider;
