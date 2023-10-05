import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <MaxWidthWrapper className='h-32'>
      <Link href="/user">
        <div className='w-auto h-full bg-slate-600 flex items-center justify-center'>
          <span className='font-extrabold text-2xl text-black'>
            Team
          </span>
        </div>
      </Link>
    </MaxWidthWrapper>
  )
}

export default page