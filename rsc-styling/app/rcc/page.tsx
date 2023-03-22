import Link from 'next/link';
import { Logo } from './Logo.client';
import { Description } from './Description.client';

const page = () => {
    return (
        <>
            <Link href="/">home</Link>
            <h2>
                Test page with client components
            </h2>
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
