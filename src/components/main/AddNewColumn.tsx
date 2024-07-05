import { FaPlus } from 'react-icons/fa6';

function AddNewColumn() {
  return (
    <div>
      <div className='flex items-center gap-3 mb-5'>&nbsp;</div>
      <button
        className='flex items-center justify-center gap-2 h-[calc(100dvh-15rem)] w-80 bg-gray-800 border-[1px] border-gray-600 rounded-lg mb-6 text-3xl 
        font-bold tracking-wider text-gray-600 hover:text-gray-500 transition-all'
      >
        <FaPlus className='text-2xl' />
        New Column
      </button>
    </div>
  );
}

export default AddNewColumn;
