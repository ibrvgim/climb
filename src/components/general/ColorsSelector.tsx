'use client';

import { useEffect, useState } from 'react';

function ColorsSelector({ defaultValue }: { defaultValue?: string }) {
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (defaultValue) setSelectedColor(defaultValue);
  }, [defaultValue]);

  function handleChooseColor(chosenColor: string) {
    if (selectedColor === chosenColor) setSelectedColor('');
    else setSelectedColor(chosenColor);
  }

  return (
    <div className='flex justify-between mt-4'>
      <input
        name='color'
        value={selectedColor}
        hidden
        className='hidden'
        readOnly
      />
      <Color
        color='text-red-400'
        bgcolor='bg-red-400'
        border='border-red-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
      <Color
        color='text-green-400'
        bgcolor='bg-green-400'
        border='border-green-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
      <Color
        color='text-blue-400'
        bgcolor='bg-blue-400'
        border='border-blue-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
      <Color
        color='text-yellow-400'
        bgcolor='bg-yellow-400'
        border='border-yellow-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
      <Color
        color='text-violet-400'
        bgcolor='bg-violet-400'
        border='border-violet-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
      <Color
        color='text-lime-400'
        bgcolor='bg-lime-400'
        border='border-lime-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
      <Color
        color='text-sky-400'
        bgcolor='bg-sky-400'
        border='border-sky-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
      <Color
        color='text-orange-400'
        bgcolor='bg-orange-400'
        border='border-orange-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
      <Color
        color='text-teal-400'
        bgcolor='bg-teal-400'
        border='border-teal-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
      <Color
        color='text-fuchsia-400'
        bgcolor='bg-fuchsia-400'
        border='border-fuchsia-800'
        handleChooseColor={handleChooseColor}
        selectedColor={selectedColor}
      />
    </div>
  );
}

function Color({
  color,
  bgcolor,
  border,
  handleChooseColor,
  selectedColor,
}: {
  color: string;
  bgcolor: string;
  border: string;
  handleChooseColor: (data: string) => void;
  selectedColor: string;
}) {
  const isChosen = selectedColor === color;

  return (
    <button
      type='button'
      className={`h-8 w-8 rounded-full border-2 ${border} ${bgcolor} outline-red-500 outline-offset-2`}
      onClick={() => handleChooseColor(color)}
      style={isChosen ? { opacity: 1 } : { opacity: 0.5 }}
    >
      &nbsp;
    </button>
  );
}

export default ColorsSelector;
