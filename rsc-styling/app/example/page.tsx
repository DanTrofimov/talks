import Link from 'next/link';
import { Example } from "./Example.server";

const page = () => {
    return (
        <>
            <Link href="/">home</Link>
            <Example />
        </>
    );
}

export default page;
