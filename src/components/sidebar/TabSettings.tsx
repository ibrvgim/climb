function TabSettings() {
  return (
    <div className='flex gap-2 bg-gray-700 pb-4 pt-11 px-4 rounded-br-xl -mt-5'>
      <SettingsButton style='border-[1px] border-indigo-400 text-indigo-400 hover:opacity-75'>
        Edit
      </SettingsButton>

      <SettingsButton style='border-[1px] border-red-500 text-red-500 hover:opacity-75'>
        Delete
      </SettingsButton>
    </div>
  );
}

function SettingsButton({
  children,
  style,
}: {
  children: React.ReactNode;
  style: string;
}) {
  return (
    <button
      className={`${style} flex-1 flex justify-center items-center w-full text-sm rounded-full transition-all`}
    >
      {children}
    </button>
  );
}

export default TabSettings;
