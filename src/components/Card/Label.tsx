import { CardProps } from '.';

export default function Label({ text }: { text: CardProps['label'] }) {
  return <span>{text}</span>;
}
