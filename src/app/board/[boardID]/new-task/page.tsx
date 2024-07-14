import GoBack from '@/components/general/GoBack';
import NewTaskForm from '@/components/main/NewTaskForm';
import { symbolsRegex } from '@/constants/regex';
import { getUser } from '@/data/auth/apiAuth';
import { getBoards } from '@/data/boards/apiBoards';
import slugify from 'slugify';

async function NewTaskPage({ params }: { params: { boardID: string } }) {
  const user = await getUser();
  if (!user?.id) return;
  const boards = await getBoards(user.id);
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

  return (
    <section className='pt-8 pb-20 px-12 bg-gray-900 text-white'>
      <GoBack />
      <div className='flex justify-center mt-10'>
        <NewTaskForm allColumns={allColumns} />
      </div>
    </section>
  );
}

export default NewTaskPage;
