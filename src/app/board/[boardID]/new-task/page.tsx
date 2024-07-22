import GoBack from '@/components/general/GoBack';
import NewTaskForm from '@/components/main/NewTaskForm';
import { symbolsRegex } from '@/constants/regex';
import { getUser } from '@/data/auth/apiAuth';
import { getBoards } from '@/data/boards/apiBoards';
import { getTasks } from '@/data/tasks/apiTasks';
import { TaskType } from '@/types/type';
import slugify from 'slugify';

async function NewTaskPage({
  params,
  searchParams: { taskID },
}: {
  params: { boardID: string };
  searchParams: { taskID: string };
}) {
  const user = await getUser();
  if (!user?.id) return;
  const boards = await getBoards(user.id);
  const [tasks] = await getTasks(user.id);
  const allColumns = boards
    .find(
      (item) =>
        slugify(item.boardName, {
          lower: true,
          remove: symbolsRegex,
          trim: true,
        }) === params.boardID
    )
    ?.boardColumns.map((item: { title: string }) => item.title);

  const editTask = tasks?.tasks.find((item: TaskType) => item.id === taskID);

  return (
    <section className='pt-8 pb-20 px-12 bg-gray-900 text-white'>
      <GoBack />
      <div className='flex justify-center mt-10'>
        <NewTaskForm allColumns={allColumns} editTask={editTask} />
      </div>
    </section>
  );
}

export default NewTaskPage;
