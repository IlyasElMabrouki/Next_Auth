import { options } from '../../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/protected/server')
  }

  return (
    <>
      <h1>This is a client side protected page</h1>
      <h2>You are logged in as {session?.user?.name}</h2>
      <Link href="/api/auth/signout">Sign Out</Link>
    </>
  );
}
