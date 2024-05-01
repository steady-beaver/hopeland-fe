import Link from 'next/link';
import CircleAround from '/public/icons/circle-around.svg';
import styles from './ReadMoreBtn.module.scss';

const ReadMoreBtn = ({ className, to = '#' }) => {
  return (
    <Link href={to} className={`${styles.anchor} ${className}`}>
      <CircleAround className={styles.circleAround} />
      <span className={`${styles.btn} subtitleSmall`}>Read more</span>
    </Link>
  );
};

export default ReadMoreBtn;
