function TabSettings() {
  return (
    <div className='flex gap-2 bg-gray-700 pb-4 pt-11 px-4 rounded-br-xl -mt-5'>
      <SettingsButton style='border-indigo-400 text-indigo-400'>
        Edit
      </SettingsButton>

      <SettingsButton style='border-red-500 text-red-500'>
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
      className={`${style} border-2 flex-1 flex justify-center font-medium items-center w-full text-sm rounded-full transition-all hover:opacity-75`}
    >
      {children}
    </button>
  );
}

export default TabSettings;
