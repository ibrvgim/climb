import { deleteAllTasksAction } from '@/actions/tasksAction';
import { useState } from 'react';
import { IoIosArrowDropleft, IoIosCloseCircleOutline } from 'react-icons/io';

function DeleteAllButton({
  boardName,
  category,
}: {
  boardName: string;
  category: string;
}) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((show) => !show);
  }

  return (
    <div>
      {show ? (
        <div className='flex items-center gap-2'>
          <form className='flex' action={deleteAllTasksAction}>
            <input
              name='boardName'
              value={boardName}
              hidden
              className='hidden'
              readOnly
            />

            <input
              name='category'
              value={category}
              hidden
              className='hidden'
              readOnly
            />

            <button
              className='border-[1px] border-red-500 text-[11px] px-4 rounded-full tracking-wider font-medium text-red-500 
        hover:opacity-80 transition-all'
            >
              Delete All
            </button>
          </form>

          <button
            className='text-[23px] rounded-full tracking-wider font-medium text-red-500 hover:opacity-80 transition-all'
            onClick={handleShow}
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>
      ) : (
        <button
          className='flex text-gray-500 text-[23px] hover:text-red-500 transition-all'
          onClick={handleShow}
        >
          <IoIosArrowDropleft />
        </button>
      )}
    </div>
  );
}

export default DeleteAllButton;
