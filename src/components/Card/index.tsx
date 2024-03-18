import styles from './Card.module.css';
import Description from './Description';
import Image from './Image';
import Label from './Label';
import Stars from './Stars';
import Title from './Title';

export type CardProps = {
  direction: 'row' | 'column';
  label: string;
  title: string;
  description: string;
  image?: string;
  star: 1 | 2 | 3 | 4 | 5;
};

export default function Card({ direction, label, title, description, image, star }: CardProps) {
  return (
    <article aria-label='Card' className={`${styles.container} ${styles[direction]}`}>
      <Image src={image} alt={title} />
      <section className={styles.info}>
        <div className={styles.titleWrapper}>
          <Label text={label} />
          <Title text={title} />
        </div>
        <div className={styles.descWrapper}>
          <span className={styles.highlight}>Highlight</span>
          <span>
            <s className={styles.strikethrough}>Cross Out</s>
          </span>
        </div>
      </section>
      <section className={styles.stars}>
        <Stars count={star} />
        <Description text={description} />
      </section>
    </article>
  );
}
