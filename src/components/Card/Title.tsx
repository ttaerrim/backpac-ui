import { CardProps } from '.';
import styles from './Card.module.css';

export default function Title({ text }: { text: CardProps['title'] }) {
  return <h3 className={styles.title}>{text}</h3>;
}
