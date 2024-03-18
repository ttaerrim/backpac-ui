import styles from './Card.module.css';

export default function Description({ message }: { message: string }) {
  return <span className={styles.description}>{message}</span>;
}
