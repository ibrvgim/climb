import CreateNewTab from './CreateNewTab';
import TabButton from './TabButton';

function BoardsList() {
  return (
    <div className='mt-16'>
      <p className='text-gray-500 text-[15px] font-bold tracking-wide px-9'>
        All Boards ( 7 )
      </p>

      <ul className='flex flex-col gap-3 mt-7'>
        <li>
          <TabButton title='Marketing Plans' />
        </li>

        <li>
          <TabButton title='Platform Plans' />
        </li>

        <li>
          <CreateNewTab />
        </li>
      </ul>
    </div>
  );
}

export default BoardsList;
