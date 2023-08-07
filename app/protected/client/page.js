'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function ClientPage() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/protected/client');
    },
  });

  return (
    <>
      <h1>This is a client side protected page</h1>
      <h2>You are logged in as {session?.data?.user?.name}</h2>
      {session?.data?.user?.image ? (
        <Image
          src={session?.data?.user?.image}
          width={200}
          height={200}
          alt={session?.data?.user?.name}
          priority={true}
        />
      ) : null}

      <Link href="/api/auth/signout">Sign Out</Link>
    </>
  );
}
