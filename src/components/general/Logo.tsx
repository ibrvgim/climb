import Image from 'next/image';
import LogoImage from '../../../public/logo.png';
import Link from 'next/link';

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-3'>
      <Image src={LogoImage} alt='logo image' height={35} width={35} />
      <p className='text-4xl text-gray-300 font-extrabold tracking-wider'>
        climb
      </p>
    </Link>
  );
}

export default Logo;
