import styles from './cards.module.css';
import Card from '../components/Card';

const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export default function CardsPage() {
  return (
    <div className={styles.container}>
      <h2>세로형 카드</h2>
      <div className={styles.rowCardWrapper}>
        <Card direction='column' label='Card Label' title='Card Title' star={3} description={LOREM_IPSUM} />
        <Card direction='column' label='Card Label 2' title='Card Title 2' star={4} />
        <Card direction='column' label='Card Label 3' title='Card Title 3' description={LOREM_IPSUM} />
        <Card direction='column' label='Card Label 4' title='Card Title 3' description={LOREM_IPSUM} />
      </div>
      <h2>가로형 카드</h2>
      <div className={styles.columnCardWrapper}>
        <Card direction='row' label='Card Label 1' title={LOREM_IPSUM} description={LOREM_IPSUM} star={3} />
        <Card direction='row' label='Card Label 2' title={LOREM_IPSUM} description={LOREM_IPSUM} star={3} />
        <Card direction='row' label='Card Label 3' title={LOREM_IPSUM} description={LOREM_IPSUM} star={3} />
        <Card direction='row' label='Card Label 4' title={LOREM_IPSUM} description={LOREM_IPSUM} star={3} />
      </div>
    </div>
  );
}
