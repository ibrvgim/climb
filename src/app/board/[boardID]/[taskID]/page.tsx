import GoBack from '@/components/general/GoBack';
import SubtasksCard from '@/components/main/SubtasksCard';
import TaskActionButtons from '@/components/main/TaskActionButtons';
import { getUser } from '@/data/auth/apiAuth';
import { getTasks } from '@/data/tasks/apiTasks';
import { TaskType } from '@/types/type';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import slugify from 'slugify';

async function TaskPage({
  params: { boardID, taskID },
}: {
  params: { boardID: string; taskID: string };
}) {
  const user = await getUser();
  if (!user?.id) return;
  const [tasks] = await getTasks(user.id);

  const currentTask: TaskType = tasks?.tasks.find(
    (item: TaskType) =>
      item.id === taskID && slugify(item.boardName, { lower: true }) === boardID
  );

  if (!currentTask) notFound();
  return (
    <section className='py-8 px-12 bg-gray-900 text-white'>
      <div className='flex items-center justify-between'>
        <GoBack />
        <TaskActionButtons
          taskID={taskID}
          boardID={boardID}
          status={currentTask.status}
        />
      </div>

      <div className='mt-12'>
        <div className='mb-6 flex items-center gap-3'>
          <Link
            href={`/board/${boardID}/new-task/?taskID=${taskID}&status=${currentTask?.status}`}
            className='border-2 border-indigo-400 inline-block px-4 tracking-wider rounded-full uppercase font-bold text-indigo-300 text-[11px]'
          >
            {currentTask?.status}
          </Link>
        </div>

        <p className='font-bold text-2xl text-gray-300 tracking-wider mb-4'>
          {currentTask?.title}
        </p>
        <p className='text-gray-400 text-[15px] leading-relaxed tracking-wide text-justify'>
          {currentTask?.description}
        </p>

        {currentTask.subtasks.filter((item) => item?.title !== null).length >
          0 && <SubtasksCard subtasks={currentTask.subtasks} />}
      </div>
    </section>
  );
}

export default TaskPage;
