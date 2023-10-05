import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-24 max-h-64 sm:mt-40 flex flex-col flex-wrap justify-around items-center gap-x-4'>
      {"Hello world hkk lijl kljmkl ljlk ljlml".split(" ").map(
        (key: string, index: number) => (
          <div key={index} className='mb-4 flex max-w-fit overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
            <p className='text-sm font-sem text-gray-700'>
              {key}
            </p>
          </div>
        )
      )}
    </MaxWidthWrapper>
    {/* <MaxWidthWrapper>
      <div className='flex flex-col justify-start items-start gap-y-2'>
        <div className="max-w-fit">
          <h1 className='font-bold text-black'>Footer title</h1>
          This is our footer
        </div>
        <div className="flex flex-row w-full justify-between">
          <div>
            <h1 className='font-bold text-black'>Title</h1>
            <ul>
              <li>api 1</li>
              <li>api 2</li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-black'>Title</h1>
            <ul>
              <li>api 1</li>
              <li>api 2</li>
            </ul>
          </div>
        </div>
      </div>
    </MaxWidthWrapper> */}
    </>
  )
}
