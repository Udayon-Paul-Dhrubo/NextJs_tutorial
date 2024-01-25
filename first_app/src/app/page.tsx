import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> Hello World!! Welcome to Home </h1>
      <Link href="/about">About</Link>
      <br />
      <Link href="/products">Product</Link>
      <br />
      <Link href="/blog">Blog</Link>
    </>
  );
}
