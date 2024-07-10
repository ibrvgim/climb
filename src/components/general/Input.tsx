interface Props {
  title?: string;
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
  defaultValue?: string;
}

function Input({
  title,
  name,
  placeholder,
  type = 'text',
  error,
  defaultValue,
}: Props) {
  return (
    <div className='flex flex-col items-start gap-2'>
      {title && (
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
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className='h-10 text-gray-300 placeholder:text-gray-600 text-sm rounded-md px-3 border-[1px] border-gray-500 bg-transparent w-full'
        autoComplete='off'
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default Input;
