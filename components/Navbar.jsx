import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Navbar = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
      </Head>
      <nav>
        <div className='logo'>
          <Link href="/">
            <Image src="/logo.png" width={120} height={77}></Image>
          </Link>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas/"><a>Ninja Listing</a></Link>
      </nav>
    </>
  );
}

export default Navbar;