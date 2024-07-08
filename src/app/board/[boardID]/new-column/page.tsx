import Button from '@/components/general/Button';
import ColorsSelector from '@/components/general/ColorsSelector';
import GoBack from '@/components/general/GoBack';
import Input from '@/components/general/Input';

function NewColumnPage() {
  return (
    <section className='pt-8 pb-20 px-12 bg-gray-900 text-white'>
      <GoBack />
      <div className='flex justify-center mt-10'>
        <form className='flex flex-col gap-3 bg-gray-800 px-8 py-8 rounded-lg'>
          <Input
            title='Column Name'
            name='title'
            placeholder='ex. Build Settings UI'
          />
          <ColorsSelector />

          <Button>Create New Column</Button>
        </form>
      </div>
    </section>
  );
}

export default NewColumnPage;
