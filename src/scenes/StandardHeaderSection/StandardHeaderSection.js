import Link from 'next/link';
import styles from './StandardHeaderSection.module.scss';

const StandardHeaderSection = ({ title, subtitle, text }) => {
  return (
    <div className={styles.mainSHS}>
      <div className={`${styles.subtitleSHS} subtitle uppercase`}>{subtitle}</div>
      <div className={`${styles.titleSHS} headingH1 uppercase`}>{title}</div>
      <div className={`${styles.textSHS} headingH3`}>{text}</div>
      <Link href="/contacts">
        <div className={`${styles.linkSHS} textS regular uppercase letterSpacing`}>BOOK SESSION</div>
      </Link>
    </div>
  );
};

export default StandardHeaderSection;
