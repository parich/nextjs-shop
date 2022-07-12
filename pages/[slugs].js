import React from 'react';
import { useRouter } from 'next/router';

export default function slugs() {
  const router = useRouter();
  const { slug } = router.query;
  return <div></div>;
}
