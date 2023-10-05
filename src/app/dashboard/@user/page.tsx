import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <MaxWidthWrapper className='h-32'>
      <Link href="/dashboard/user-profile">
        <div className='w-auto h-full bg-slate-600 flex items-center justify-center'>
          <span className='font-extrabold text-2xl text-black'>
            User
          </span>
        </div>
      </Link>
    </MaxWidthWrapper>
  )
}
