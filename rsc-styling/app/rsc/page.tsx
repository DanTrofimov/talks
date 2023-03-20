import Link from 'next/link';
import { Logo } from './Logo.server';

const page = () => {
    return (
        <>
            <Link href="/">home</Link>
            <p>
                Test page with server components
            </p>
            <Logo />
        </>
    );
};

export default page;