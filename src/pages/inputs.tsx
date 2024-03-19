import Input from '../components/Input';
import styles from './inputs.module.css';

export default function InputsPage() {
  return (
    <div className={styles.inputWrapper}>
      <Input />
      <Input disabled={true} placeholder='주문 요청 사항을 입력해 주세요.' />
      <Input readOnly={true} value='주문 요청을 시도합니다.' />
    </div>
  );
}
