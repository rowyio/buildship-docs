import cn from 'clsx';
import styles from './style.module.css';

export default function NodeCard(props: { title: string; image: string; href: string }) {
  return (
    <a href={props.href}>
      <div className={cn(styles.nodeCard)}>
        <img className={cn(styles.image)} src={props.image} />
        <span className={cn(styles.title)}>{props.title}</span>
      </div>
    </a>
  );
}
