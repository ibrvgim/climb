interface Props {
  title: string;
  name: string;
  placeholder: string;
  error?: string;
  defaultValue?: string;
}

function Textarea({ title, name, placeholder, error, defaultValue }: Props) {
  return (
    <div className='flex flex-col items-start gap-2'>
      <label
        htmlFor={name}
        className='text-gray-300 font-bold tracking-wider text-sm flex items-center w-full'
      >
        {title}{' '}
        {error && (
          <span className='ml-auto text-xs text-red-500 font-semibold'>
            {error}
          </span>
        )}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='min-h-36 text-sm text-gray-300 placeholder:text-gray-600 rounded-md px-3 py-2 
        border-[1px] border-gray-500 bg-transparent w-full'
      ></textarea>
    </div>
  );
}

export default Textarea;
