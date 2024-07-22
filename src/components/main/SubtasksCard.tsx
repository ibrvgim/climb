import { SubtaskType } from '@/types/type';
import Checkbox from '../general/Checkbox';

function SubtasksCard({ subtasks }: { subtasks: SubtaskType[] | null[] }) {
  return (
    <div className='mt-12'>
      <p className='text-gray-300 text-xs tracking-widest font-bold uppercase mb-4'>
        Subtasks:
      </p>

      {subtasks.filter((item) => item?.title !== null).length > 0 && (
        <ul className='flex flex-col gap-1'>
          {subtasks.map(
            (item) =>
              item?.title && (
                <li key={item.title} className='flex items-center gap-3'>
                  <Checkbox defaultCheck={item.checked}>{item.title}</Checkbox>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default SubtasksCard;
