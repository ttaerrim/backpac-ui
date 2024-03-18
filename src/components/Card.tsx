import styles from './Card.module.css';

const EXAMPLE_IMG = 'https://image.idus.com/image/files/d5da94ffc1b840bd9ccc0dc86da5ab24.jpg';

export default function Card() {
  const getStarsArray = (star: number) => {
    const arr = Array.from({ length: 5 }, (_, i) => i);
    return arr.map((i) => i < star);
  };
  return (
    <article aria-label='카드' className={styles.container}>
      <img src={EXAMPLE_IMG} alt='카드 이미지' className={styles.image} />
      <section className={styles.info}>
        <div className={styles.titleWrapper}>
          <span>Card Label</span>
          <span>
            <em>Card Title</em>
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
          {getStarsArray(3).map((item, i) => (
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
