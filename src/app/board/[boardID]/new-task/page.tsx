import Button from '@/components/general/Button';
import GoBack from '@/components/general/GoBack';
import Input from '@/components/general/Input';
import OptionalSubtasks from '@/components/general/OptionalSubtasks';
import Select from '@/components/general/Select';
import Textarea from '@/components/general/Textarea';

function NewTaskPage() {
  return (
    <section className='pt-8 pb-20 px-12 bg-gray-900 text-white'>
      <GoBack />
      <div className='flex justify-center mt-10'>
        <form className='flex flex-col gap-5 bg-gray-800 px-8 py-8 rounded-lg'>
          <Input
            title='Title'
            name='title'
            placeholder='ex. Build Settings UI'
          />

          <Textarea
            title='Description'
            name='description'
            placeholder='ex. Keep iterating through the subtasks until we are clear on the core concepts for the app.'
          />

          <OptionalSubtasks />

          <div>
            <p className='text-gray-300 font-bold tracking-wider text-sm mb-2'>
              Choose Status
            </p>
            <Select position='absolute' />
          </div>

          <Button>Create Task</Button>
        </form>
      </div>
    </section>
  );
}

export default NewTaskPage;
