import styles from './Card.module.css';
import Image from './Image';

const EXAMPLE_IMG = 'https://image.idus.com/image/files/d5da94ffc1b840bd9ccc0dc86da5ab24.jpg';

type CardProps = {
  direction: 'row' | 'column';
  label: string;
  title: string;
  image?: string;
  star: 1 | 2 | 3 | 4 | 5;
};

export default function Card({ direction, label, title, image, star }: CardProps) {
  const getStarsArray = (star: number) => {
    const arr = Array.from({ length: 5 }, (_, i) => i);
    return arr.map((i) => i < star);
  };

  return (
    <article aria-label='Card' className={`${styles.container} ${styles[direction]}`}>
      <Image src={image} alt={title} />
      <section className={styles.info}>
        <div className={styles.titleWrapper}>
          <span>{label}</span>
          <span>
            <em>{title}</em>
          </span>
        </div>
        <div className={styles.descWrapper}>
          <span>Highlight</span>
          <span>
            <s>Cross Out</s>
          </span>
        </div>
      </section>
      <section className={styles.stars}>
        <div className={styles.starWrapper}>
          {getStarsArray(star).map((item, i) => (
            <div key={i} className={`${styles.star} ${item ? styles.fill : ''}`}></div>
          ))}
        </div>
        <span className={styles.helpMessage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </span>
      </section>
    </article>
  );
}
