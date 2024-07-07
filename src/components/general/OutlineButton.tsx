interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
}

function OutlineButton({ children, handleClick }: Props) {
  return (
    <button
      type='button'
      className='border-[1px] border-gray-400 py-1 rounded-full tracking-wider text-gray-300 text-xs font-bold mt-3 hover:border-indigo-400   
    hover:text-indigo-400 transition-all w-full'
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default OutlineButton;
