import GoBack from '@/components/general/GoBack';
import Select from '@/components/general/Select';
import SubtasksCard from '@/components/main/SubtasksCard';
import TaskActionButtons from '@/components/main/TaskActionButtons';

function TaskPage() {
  return (
    <section className='py-8 px-12 bg-gray-900 text-white'>
      <div className='flex items-center justify-between'>
        <GoBack />
        <TaskActionButtons />
      </div>

      <div className='mt-12'>
        <p className='font-bold text-2xl text-gray-300 tracking-wider mb-4'>
          Build UI dashboard for admins
        </p>
        <p className='text-gray-400 text-[15px] leading-relaxed tracking-wide text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint
          et neque, sunt ab sed autem in soluta officiis quidem? Doloribus,
          optio consequuntur explicabo voluptate nihil delectus tenetur fugiat.
          Enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          minima quas cumque quis? Officia, perferendis! Similique nostrum
          veniam ab illum, dolorem recusandae dolore inventore, suscipit numquam
          et dolores cum nulla?
        </p>

        <SubtasksCard />

        <div className='mt-10'>
          <p className='text-gray-300 text-xs tracking-widest font-bold uppercase mb-4'>
            Status:
          </p>
          <Select />
        </div>
      </div>
    </section>
  );
}

export default TaskPage;
