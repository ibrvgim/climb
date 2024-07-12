import SigninForm from '@/components/auth/SigninForm';
import SignupForm from '@/components/auth/SignupForm';
import { getUser } from '@/data/auth/apiAuth';
import { getBoards } from '@/data/boards/apiBoards';
import { redirect } from 'next/navigation';
import slugify from 'slugify';

export default async function Home({
  searchParams,
}: {
  searchParams: { auth: string };
}) {
  const user = await getUser();
  const boards: any = user?.id && (await getBoards(user?.id));
  const allBoards: string[] = boards?.map(
    (item: { boardName: string }) => item.boardName
  );

  if (user?.role === 'authenticated' && allBoards?.[0])
    redirect(`/board/${slugify(allBoards?.[0], { lower: true })}`);
  if (user?.role === 'authenticated' && !allBoards?.[0]) redirect('/board');

  return (
    <section className='flex justify-center items-center pt-8 pb-20 px-12 bg-gray-900 text-white'>
      {searchParams?.auth === 'signup' ? <SignupForm /> : <SigninForm />}
    </section>
  );
}
