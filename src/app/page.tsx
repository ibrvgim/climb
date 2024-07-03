import Navigation from '@/components/general/Navigation';
import SideBar from '@/components/general/SideBar';
import TasksContainer from '@/components/main/TasksContainer';

export default function Home() {
  return (
    <main className='grid grid-cols-[20rem_1fr] grid-rows-[6rem_1fr] min-h-screen'>
      <Navigation />
      <SideBar />
      <TasksContainer />
    </main>
  );
}
