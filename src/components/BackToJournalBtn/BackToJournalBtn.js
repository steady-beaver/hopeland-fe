import Link from 'next/link';
import ArrowBack from '/public/icons/arrow-back.svg';
import styles from './BackToJournalBtn.module.scss';

const BackToJournalBtn = () => {
  return (
    <Link className={styles.backBtn} href="/blog">
      <ArrowBack />
      <span className="subtitleStrong uppercase">Back to journal</span>
    </Link>
  );
};

export default BackToJournalBtn;
