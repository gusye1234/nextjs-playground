import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getCurrentUser } from '@/lib/session';
import { cn } from '@/lib/utils';

type HeaderParams = {
  href?: string;
};

const Header = async ({ href = '/' }: HeaderParams) => {
  const session = await getCurrentUser();
  console.log('Getting', session);
  return (
    <nav className="sticky top-0 inset-x-0 h-16 z-30 w-full mx-auto border-b-2 border-gray-200 backdrop-blur-md">
      <MaxWidthWrapper className="flex my-2 h-14 flex-row justify-between items-center">
        <div className="w-16 h-16 relative">
          <Image src="/next.svg" layout="fill" alt="logo" />
        </div>
        <div className="flex justify-around items-center gap-2">
          <Link
            href="/pricing"
            className={buttonVariants({ size: 'sm', variant: 'ghost' })}
          >
            Pricing
          </Link>
          {session?.user ? (
            <Link href="/login" className="mx-4">
              <div className="mx-auto">
                {session?.user?.image && (
                  <Image
                    src={session.user.image}
                    width={50}
                    height={50}
                    className="rounded-full ring-1 hover:ring-4 hover:ring-primary "
                    alt="avatar"
                  />
                )}
              </div>
            </Link>
          ) : (
            <Link href="/login" className={buttonVariants({ size: 'sm' })}>
              Get started <ArrowRight className="ml-1.5" />
            </Link>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
