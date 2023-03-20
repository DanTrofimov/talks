import Image from 'next/image';
import exampleImage from '../../public/example.gif'
import { useEffect } from 'react';

export const Logo = () => {
    
    console.log('Server page rendering: this should only be printed on the server');

    return (
      <Image
        src={exampleImage}
        alt="Picture of the author"
      />
    );
  }