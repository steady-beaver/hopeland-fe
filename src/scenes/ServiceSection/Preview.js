import ReadMoreBtn from '@/components/ReadMoreBtn/ReadMoreBtn';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Preview.module.scss';

const Preview = ({ title, text, srcPrimary, srcSecondary, link, className, stopRotation, restoreRotation }) => {
  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.primaryImgFrame}>
        <img src={srcPrimary} alt="Wedding" fill={true} className={`${styles.primaryImg} imgShadow fill`} />
      </div>
      <div className={styles.secondaryImgFrame}>
        <img src={'/pictures/white-paper-1.png'}
          width={1000}
          height={1}
          className={styles.paperOrnament}
          alt="Paper decoration" />
        <img src={srcSecondary} alt="Wedding" className={`${styles.secondaryImg} imgShadow fill`} />
      </div>
      <div className={styles.textSection}>
        <Link href={link} onMouseEnter={stopRotation} onMouseLeave={restoreRotation}>
          <h4 className={`${styles.title} headingH3`}>{title}</h4>
        </Link>
        <p className={` textS`}>{text}</p>
        <ReadMoreBtn
          className={styles.readMore}
          to={`${link}`}
          onMouseEnter={stopRotation}
          onMouseLeave={restoreRotation}
        />
      </div>
    </div>
  );
};

export default Preview;
