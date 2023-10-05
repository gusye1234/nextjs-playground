'use client'
import React from 'react'
import { useState } from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <MaxWidthWrapper className='h-32'>
        <div className='w-auto h-full bg-slate-400 hover:bg-slate-600 flex items-center justify-center'
          onClick={(e)=>{setCount(count+1)}}>
          <span className='font-extrabold text-2xl text-black'>
            ClickX{count}
          </span>
        </div>
    </MaxWidthWrapper>
  )
}
