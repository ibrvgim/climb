import SecureImage from '../../../public/images/secure.svg';
import NetwrokImage from '../../../public/images/network.svg';
import ManageImage from '../../../public/images/manage.svg';
import Image from 'next/image';

function Features() {
  return (
    <div className='flex flex-col items-center justify-between mt-20 min-h-[80%]'>
      <div className='flex flex-col gap-7 items-center'>
        <Image
          src={SecureImage}
          alt='steps up image'
          width={100}
          height={100}
        />
        <p className='uppercase text-gray-400 font-extrabold text-sm tracking-wider'>
          Fully Secure
        </p>
      </div>

      <div className='flex flex-col gap-7 items-center'>
        <Image
          src={NetwrokImage}
          alt='steps up image'
          width={100}
          height={100}
        />
        <p className='uppercase text-gray-400 font-extrabold text-sm tracking-wider'>
          Available Anywhere
        </p>
      </div>

      <div className='flex flex-col gap-7 items-center'>
        <Image
          src={ManageImage}
          alt='steps up image'
          width={100}
          height={100}
        />
        <p className='uppercase text-gray-400 font-extrabold text-sm tracking-wider'>
          Manage Easily
        </p>
      </div>
    </div>
  );
}

export default Features;
