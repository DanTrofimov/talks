'use client'

import Image from 'next/image';
import exampleImage from '../../public/example.gif'
import { useEffect } from 'react';

export const Logo = () => {
    
    console.log(
        'Client page rendering: this should only be printed on the server during ssr, and client when routing'
    );

    useEffect(() => {
        console.log('Client component rendered');
    });


    return (
      <Image
        src={exampleImage}
        alt="Picture of the author"
      />
    );
  }