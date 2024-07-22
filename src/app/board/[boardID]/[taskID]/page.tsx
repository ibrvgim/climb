import GoBack from '@/components/general/GoBack';
import Select from '@/components/general/Select';
import SubtasksCard from '@/components/main/SubtasksCard';
import TaskActionButtons from '@/components/main/TaskActionButtons';
import { symbolsRegex } from '@/constants/regex';
import { getUser } from '@/data/auth/apiAuth';
import { getBoards } from '@/data/boards/apiBoards';
import { getTasks } from '@/data/tasks/apiTasks';
import { TaskType } from '@/types/type';
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
  const boards = await getBoards(user.id);
  const allColumns = boards
    .find(
      (item) =>
        slugify(item.boardName, {
          lower: true,
          remove: symbolsRegex,
          trim: true,
        }) === boardID
    )
    ?.boardColumns.map((item: { title: string }) => item.title);

  const currentTask: TaskType = tasks.tasks.find(
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
        <p className='font-bold text-2xl text-gray-300 tracking-wider mb-4'>
          {currentTask?.title}
        </p>
        <p className='text-gray-400 text-[15px] leading-relaxed tracking-wide text-justify'>
          {currentTask?.description}
        </p>

        {currentTask.subtasks.filter((item) => item?.title !== null).length >
          0 && <SubtasksCard subtasks={currentTask.subtasks} />}

        <div className='mt-10'>
          <p className='text-gray-300 text-xs tracking-widest font-bold uppercase mb-4'>
            Status:
          </p>

          <div className='mb-10'>
            <Select options={allColumns} defaultValue={currentTask.status} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskPage;
