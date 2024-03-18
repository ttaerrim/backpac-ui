import styles from './Card.module.css';
import Description from './Description';
import Image from './Image';
import Stars from './Stars';
import Title from './Title';

type CardProps = {
  direction: 'row' | 'column';
  label: string;
  title: string;
  image?: string;
  star: 1 | 2 | 3 | 4 | 5;
};

export default function Card({ direction, label, title, image, star }: CardProps) {
  return (
    <article aria-label='Card' className={`${styles.container} ${styles[direction]}`}>
      <Image src={image} alt={title} />
      <section className={styles.info}>
        <div className={styles.titleWrapper}>
          <span>{label}</span>
          <Title text={title} />
        </div>
        <div className={styles.descWrapper}>
          <span>Highlight</span>
          <span>
            <s>Cross Out</s>
          </span>
        </div>
      </section>
      <section className={styles.stars}>
        <Stars count={star} />
        <Description
          message='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.'
        />
      </section>
    </article>
  );
}
