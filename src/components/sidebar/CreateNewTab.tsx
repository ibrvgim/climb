import { FaPlus } from 'react-icons/fa6';

function CreateNewTab() {
  return (
    <button
      className='flex flex-row justify-start items-center gap-3 pl-9 py-2 text-indigo-400 text-sm tracking-wider font-bold 
    hover:opacity-70 transition-all'
    >
      <FaPlus />
      Create New Board
    </button>
  );
}

export default CreateNewTab;
