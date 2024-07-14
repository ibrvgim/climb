import { createTaskAction } from '@/actions/tasksAction';
import Input from '../general/Input';
import Textarea from '../general/Textarea';
import OptionalSubtasks from '../general/OptionalSubtasks';
import Select from '../general/Select';
import Button from '../general/Button';

function NewTaskForm({ allColumns }: { allColumns: string[] }) {
  return (
    <form
      className='flex flex-col gap-5 bg-gray-800 px-8 py-8 rounded-lg'
      action={createTaskAction}
    >
      <Input title='Title' name='title' placeholder='ex. Build Settings UI' />

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
        <Select position='absolute' options={allColumns} />
      </div>

      <Button>Create Task</Button>
    </form>
  );
}

export default NewTaskForm;
