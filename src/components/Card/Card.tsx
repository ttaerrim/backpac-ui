import { ReactNode } from 'react';
import { CardProps } from './index';
import Image from './Image';
import Title from './Title';
import Label from './Label';
import Description from './Description';
import Stars from './Stars';
import Divide from './Divide';
import styles from './Card.module.css';

export default function Card({ direction, children }: { direction: CardProps['direction']; children: ReactNode }) {
  return (
    <article aria-label='Card' className={`${styles.container} ${styles[direction]}`}>
      {children}
    </article>
  );
}

Card.Image = Image;
Card.Title = Title;
Card.Label = Label;
Card.Description = Description;
Card.Stars = Stars;
Card.Divide = Divide;
