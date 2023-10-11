'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui//label';
import { getProviders, signIn } from 'next-auth/react';
import { ArrowBigRightDash } from 'lucide-react';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};

const providerIconMap: Record<string, (props: any) => JSX.Element> = {
  Google: Icons.google,
  Github: Icons.gitHub,
};

type Providers = Record<string, Provider>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

function ProviderIcon({ name }: { name: string }) {
  if (name === 'Google') {
    return <Icons.google className="mr-2 h-4 w-4" />;
  }
  if (name === 'GitHub') {
    return <Icons.gitHub className="mr-2 h-4 w-4" />;
  }
  return <ArrowBigRightDash className="mr-2 h-4 w-4" />;
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [providers, setProviders] = React.useState<Providers | null>(null);

  React.useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };
    fetchProviders();
  }, []);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              //   disabled={isLoading}
              disabled={true}
            />
          </div>
          {/* <Button disabled={isLoading}> */}
          <Button disabled={true}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email (disabled)
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-evenly">
        {providers ? (
          Object.values(providers).map((provider) => (
            <Button
              key={provider.id}
              variant="outline"
              className="w-full"
              type="button"
              onClick={() => signIn(provider.id)}
              disabled={isLoading}
            >
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ProviderIcon name={provider.name} />
              )}
              {provider.name}
            </Button>
          ))
        ) : (
          <Button variant="outline" type="button" disabled={isLoading}>
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> Loading
          </Button>
        )}
      </div>
    </div>
  );
}
