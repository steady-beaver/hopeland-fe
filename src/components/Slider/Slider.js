import CoveredImg from '@/components/CoveredImg/CoveredImg';
import styles from './Slider.module.scss';
import Link from 'next/link';

const Slider = ({ topText, title, bottomText, className, imageNode, slug }) => {
  return (
    <Link href={slug}>
      <div className={`${styles.main}  ${className}`}>
        <div className={styles.coverImage}>
          <CoveredImg imageNode={imageNode} />
        </div>
        <span className={`${styles.upperText} subtitle letterSpacing `}>{topText}</span>
        <h2 className={`${styles.title} `}>{title}</h2>
        <p className={`${styles.bottomText} text `}>{bottomText}</p>
        <span className={styles.readMore}>READ MORE</span>
        <div className={styles.loader} />
      </div>
    </Link>
  );
};

export default Slider;
