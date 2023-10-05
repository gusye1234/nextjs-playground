import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <MaxWidthWrapper className='h-32'>
      <Link href="/team-profile">
        <div className='w-auto h-full bg-slate-400 hover:bg-slate-600 flex items-center justify-center'>
          <span className='font-extrabold text-2xl text-black'>
            dashboard/@team/user-profile
          </span>
        </div>
      </Link>
    </MaxWidthWrapper>
  )
}

export default Home