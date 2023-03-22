import Link from 'next/link';
import { Logo } from './Logo.server';
import { Description } from '../rcc/Description.client';

const page = () => {
    return (
        <>
            <Link href="/">home</Link>
            <p>
                Test page with server components
            </p>
            <Logo />
            <Description>
                Однажды Дейкстра сказал: «Тестирование показывает присутствие ошибок, 
                а не их отсутствие». Иными словами, тестированием можно доказать 
                неправильность программы, но нельзя доказать ее правильность. 
                Все, что дает тестирование после приложения достаточных усилий, 
                — это уверенность, что программа действует достаточно правильно.
            </Description>
        </>
    );
};

export default page;
