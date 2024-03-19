import { CardProps } from '.';
import styles from './Card.module.css';

export default function Description({ text, line = 1 }: { text: CardProps['description']; line?: number }) {
  return (
    <span className={styles.description} style={{ WebkitLineClamp: line }}>
      {text}
    </span>
  );
}
