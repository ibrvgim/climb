interface Props {
  title: string;
  name: string;
  placeholder: string;
}

function Textarea({ title, name, placeholder }: Props) {
  return (
    <div className='flex flex-col items-start gap-2'>
      <label
        htmlFor={name}
        className='text-gray-300 font-bold tracking-wider text-sm'
      >
        {title}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className='min-h-36 text-sm text-gray-300 placeholder:text-gray-600 rounded-md px-3 py-2 
        border-[1px] border-gray-500 bg-transparent w-full'
      ></textarea>
    </div>
  );
}

export default Textarea;
