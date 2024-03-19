import styles from './Card.module.css';
import Card from './Card';

export type CardProps = {
  direction: 'row' | 'column';
  label: string;
  title: string;
  description?: string;
  image?: string;
  star?: 1 | 2 | 3 | 4 | 5;
};

export default function Index({ direction, label, title, description, image, star }: CardProps) {
  const cardFactory = {
    row: <RowCard label={label} title={title} description={description} image={image} star={star} />,
    column: <ColumnCard label={label} title={title} description={description} image={image} star={star} />,
  };

  return cardFactory[direction];
}

function RowCard({ title, description, image, star }: Omit<CardProps, 'direction'>) {
  return (
    <Card direction='row'>
      <Card.Image src={image} alt={title} width='33%' />
      <section className={styles.rowWrapper}>
        <Card.Title text={title} />
        <Card.Description text={description} line={2} />
        {star && (
          <div className={styles.starWrapper}>
            <Card.Stars count={star} />
            <Card.Divide />
            <Card.Label text='john' />
          </div>
        )}
      </section>
    </Card>
  );
}

function ColumnCard({ label, title, description, image, star }: Omit<CardProps, 'direction'>) {
  return (
    <Card direction='column'>
      <Card.Image src={image} alt={title} />
      <section className={styles.info}>
        <div className={styles.titleWrapper}>
          <Card.Label text={label} />
          <Card.Title text={title} />
        </div>
        <div className={styles.descWrapper}>
          <span className={styles.highlight}>Highlight</span>
          <span>
            <s className={styles.strikethrough}>Cross Out</s>
          </span>
        </div>
      </section>
      {star && (
        <section className={`${styles.stars} ${styles.column}`}>
          <Card.Stars count={star} />
          {description && <Card.Description text={description} />}
        </section>
      )}
    </Card>
  );
}
