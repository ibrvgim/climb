import Checkbox from '../general/Checkbox';

function SubtasksCard() {
  return (
    <div className='mt-12'>
      <p className='text-gray-300 text-xs tracking-widest font-bold uppercase mb-4'>
        Subtasks:
      </p>

      <ul className='flex flex-col gap-1'>
        <li className='flex items-center gap-3'>
          <Checkbox>
            Talk to potential customers about our proposed solution and ask for
            fair price expectancy.
          </Checkbox>
        </li>

        <li className='flex items-center gap-3'>
          <Checkbox>
            Outline a business model that works for our solution.
          </Checkbox>
        </li>

        <li className='flex items-center gap-3'>
          <Checkbox>Research competitor pricing and business models.</Checkbox>
        </li>
      </ul>
    </div>
  );
}

export default SubtasksCard;
