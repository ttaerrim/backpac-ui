import { useState } from 'react';
import styles from './Input.module.css';

export default function Index({
  value = '',
  placeholder = '내용을 입력해 주세요.',
  disabled = false,
  readOnly = false,
}: {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
}) {
  const [input, setInput] = useState(value);
  const [isBlurred, setIsBlurred] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <textarea
          className={styles.input}
          placeholder={placeholder}
          value={input}
          onChange={(e) =>
            setInput((prev) => {
              setButtonDisabled(prev === e.target.value);
              return e.target.value;
            })
          }
          rows={5}
          onBlur={() => {
            if (buttonDisabled) setIsBlurred(true);
          }}
          onFocus={() => setIsBlurred(false)}
          readOnly={readOnly}
          disabled={disabled || readOnly}
        />
        <span className={styles.count}>{input.length}</span>
      </div>
      {!isBlurred && (
        <button
          type='button'
          className={styles.button}
          disabled={buttonDisabled}
          onClick={() => {
            setIsBlurred(true);
            setButtonDisabled(true);
          }}
        >
          Save
        </button>
      )}
    </div>
  );
}
