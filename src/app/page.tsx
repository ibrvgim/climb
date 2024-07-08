'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const route = useRouter();

  useEffect(() => {
    route.replace('board/marketing-plans');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
