import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Background from '@/components/ui/background';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-12 sm:mt-24 flex flex-col flex-wrap justify-around items-center text-center gap-x-4">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          A new way to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200 font-semibold">
            build & share
          </span>{' '}
          with your knowledge
        </h1>
        <p className="mt-5 max-w-prose sm:text-lg">
          Memoryte is the next-gen knowledge-base software that allows you to
          easily build and share your copilots in one workspace.
        </p>
        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5 rounded-xl',
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Background />
      </MaxWidthWrapper>
      <div className="mb-10 sm:mb-20">
        <div className="relative isolate -z-10">
          <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div>
            <div className="relative -z-10 mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24 -z-10">
                <div className="-m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    width={1364}
                    height={866}
                    alt="preview"
                    quality={100}
                    objectFit="contain"
                    className="relative rounded-md bg-white p-2 sm-p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
