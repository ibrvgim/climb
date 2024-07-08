import Image from 'next/image';
import NotFoundImage from '../../public/images/not-found.svg';

function NotFoundPage() {
  return (
    <div className='flex flex-col gap-20 items-center py-16 px-12 bg-gray-900 text-white text-center'>
      <Image
        src={NotFoundImage}
        alt='not found image'
        draggable={false}
        height={450}
        width={450}
      />
      <p className='text-5xl uppercase tracking-widest font-extrabold'>
        Page Not Found
      </p>
    </div>
  );
}

export default NotFoundPage;
