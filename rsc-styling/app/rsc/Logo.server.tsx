import Image from 'next/image';
import exampleImage from '../../public/example.gif'
import styles from '@styles/styles.module.css'

export const Logo = () => {
    
    console.log('Server page rendering: this should only be printed on the server');

    return (
      <Image
        src={exampleImage}
        alt="Picture of the author"
        className={styles.logo}
      />
    );
  }