import { CardProps } from '.';
import styles from './Card.module.css';

export default function Stars({ count }: { count: CardProps['star'] }) {
  const getStarsArray = (star: number) => {
    const arr = Array.from({ length: 5 }, (_, i) => i);
    return arr.map((i) => i < star);
  };

  return (
    <div className={styles.starWrapper}>
      {getStarsArray(count).map((item, i) => (
        <div key={i} className={`${styles.star} ${item ? styles.fill : ''}`}></div>
      ))}
    </div>
  );
}
