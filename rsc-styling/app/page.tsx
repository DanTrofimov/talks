import { Inter } from 'next/font/google'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Styling, RSC, Next.js 13</h1>
      <p>
        Main Demo page.
      </p>
      <Link href="/example">RSC Example</Link>
      <br />
      <Link href="/rsc">go to test page with React Server Components</Link>
      <br />
      <Link href="/rcc">go to test page with React Client Components</Link>
    </main>
  )
}
