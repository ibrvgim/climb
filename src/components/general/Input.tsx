interface Props {
  title?: string;
  name: string;
  placeholder: string;
}

function Input({ title, name, placeholder }: Props) {
  return (
    <div className='flex flex-col items-start gap-2'>
      {title && (
        <label
          htmlFor={name}
          className='text-gray-300 font-bold tracking-wider text-sm'
        >
          {title}
        </label>
      )}

      <input
        id={name}
        name={name}
        type='text'
        placeholder={placeholder}
        className='h-10 text-gray-300 placeholder:text-gray-600 text-sm rounded-md px-3 border-[1px] border-gray-500 bg-transparent w-full'
      />
    </div>
  );
}

export default Input;
