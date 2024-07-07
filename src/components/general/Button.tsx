interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  return (
    <button className='bg-indigo-400 py-1 rounded-full tracking-wider text-white text-sm font-bold mt-3 hover:bg-indigo-500 transition-all'>
      {children}
    </button>
  );
}

export default Button;
