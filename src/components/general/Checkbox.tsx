'use client';

import { useEffect, useState } from 'react';

function Checkbox({
  children,
  defaultCheck = false,
}: {
  children: React.ReactNode;
  defaultCheck?: boolean;
}) {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (defaultCheck) setCheck(defaultCheck);
  }, [defaultCheck]);

  function handleCheck() {
    setCheck((check) => !check);
  }

  return (
    <div className='flex items-center gap-3'>
      <div className='custom-checkbox'>
        <label>
          <input
            type='checkbox'
            name='cb'
            checked={check}
            onChange={handleCheck}
            defaultChecked={defaultCheck}
          />
        </label>
      </div>
      <span
        className={`text-gray-400 text-[15px] ${check ? 'line-through' : ''}`}
        role='button'
        onClick={handleCheck}
      >
        {children}
      </span>
    </div>
  );
}

export default Checkbox;
