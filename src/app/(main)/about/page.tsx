// app/page.tsx

import React from 'react';
import About from '@/_components/Intro';
import Timeline from '@/_components/TimeLine';
import Moreproject from '@/_components/moreproject';


export default function TimelinePage() {
  return (
    <main className="bg-black min-h-screen">
      <About />
      <Timeline />
      <Moreproject/>
      </main>
  );
}