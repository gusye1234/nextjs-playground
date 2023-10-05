import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-24 max-h-64 sm:mt-40 flex flex-col flex-wrap justify-around items-center gap-x-4'>
        Dashboard
      </MaxWidthWrapper>
    </>
  )
}
