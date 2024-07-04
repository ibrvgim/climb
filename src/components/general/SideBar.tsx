import CreateNewTab from '../sidebar/CreateNewTab';
import TabButton from '../sidebar/TabButton';
import Logo from './Logo';

function SideBar() {
  return (
    <section className='bg-gray-800 text-white row-span-full border-r-[1px] border-r-gray-600 py-8'>
      <div className='flex px-9'>
        <Logo />
      </div>

      <div className='mt-16'>
        <p className='text-gray-500 text-[15px] font-bold tracking-wide px-9'>
          All Boards ( 7 )
        </p>

        <ul className='flex flex-col gap-3 mt-7'>
          <li>
            <TabButton title='Marketing Plans' link='/' isActive={true} />
          </li>

          <li>
            <TabButton title='Platform Plans' link='/' isActive={false} />
          </li>

          <li>
            <CreateNewTab />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SideBar;
