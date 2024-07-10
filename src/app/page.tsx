import SigninForm from '@/components/auth/SigninForm';
import SignupForm from '@/components/auth/SignupForm';
import { getUser } from '@/data/auth/apiAuth';
import { redirect } from 'next/navigation';

export default async function Home({
  searchParams,
}: {
  searchParams: { auth: string };
}) {
  const user = await getUser();
  if (user?.role === 'authenticated') redirect('/board/marketing-plans');

  return (
    <section className='flex justify-center items-center pt-8 pb-20 px-12 bg-gray-900 text-white'>
      {searchParams?.auth === 'signup' ? <SignupForm /> : <SigninForm />}
    </section>
  );
}
