import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Background from '@/components/ui/background';
import { UserAuthForm } from '@/components/user-auth-form';
import { cn } from '@/lib/utils';

const Login = () => {
  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'lg' }),
            'absolute text-lg right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Back
        </Link>
        <div className="w-screen h-screen flex flex-row justify-evenly items-center divide-x">
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              src="/memoryte_full.svg"
              width={256}
              height={256}
              alt="login_logo"
            />
            <p className="text-center">
              A new way of building & sharing with your knowledge.
            </p>
          </div>
          <div className="lg:p-8 w-full">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
              </div>
              <UserAuthForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{' '}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
