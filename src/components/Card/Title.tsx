import { CardProps } from '.';

export default function Title({ text }: { text: CardProps['title'] }) {
  return (
    <span>
      <strong>{text}</strong>
    </span>
  );
}
