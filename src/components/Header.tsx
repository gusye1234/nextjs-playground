import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

type HeaderParams = {
    href?: string,
}

const Header = ({href = "/"} : HeaderParams) => {
  return (
    <MaxWidthWrapper className='bg-red-400 mt-0 mb-4 flex flex-row justify-start'>
        <Link href={href}>
            <div className='flex-1 h-full'>
                Go back {href}
            </div>
        </Link>
    </MaxWidthWrapper>
  )
}

export default Header