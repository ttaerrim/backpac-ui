import { CardProps } from '.';
import styles from './Card.module.css';

export default function Label({ text }: { text: CardProps['label'] }) {
  return <span className={styles.label}>{text}</span>;
}
