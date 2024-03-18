import styles from './Card.module.css';

const EXAMPLE_IMG = 'https://image.idus.com/image/files/d5da94ffc1b840bd9ccc0dc86da5ab24.jpg';

type ImageProps = {
  alt: string;
  src?: string;
};

export default function Image({ alt, src }: ImageProps) {
  return <img src={src || EXAMPLE_IMG} alt={alt} className={styles.image} />;
}
