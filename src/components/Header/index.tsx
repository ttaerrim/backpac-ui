import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <Link className={styles.menu} to='/cards'>
        과제 1
      </Link>
      <Link className={styles.menu} to='/inputs'>
        과제 2
      </Link>
    </header>
  );
}
