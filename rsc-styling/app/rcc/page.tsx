import Link from 'next/link';
import { Logo } from './Logo.client';

const page = () => {
    return (
        <>
            <Link href="/">home</Link>
            <p>
                Test page with client components
            </p>
            <Logo />
        </>
    );
};


export default page;