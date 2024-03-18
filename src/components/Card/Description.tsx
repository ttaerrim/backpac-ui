import { CardProps } from '.';
import styles from './Card.module.css';

export default function Description({ text }: { text: CardProps['description'] }) {
  return <span className={styles.description}>{text}</span>;
}
