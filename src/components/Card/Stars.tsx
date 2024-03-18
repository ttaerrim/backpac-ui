import styles from './Card.module.css';

type StarsProps = {
  count: 1 | 2 | 3 | 4 | 5;
};

export default function Stars({ count }: StarsProps) {
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
