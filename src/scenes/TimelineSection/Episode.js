import Image from 'next/image';
import styles from './Episode.module.scss';

const Episode = ({ image, year, text }) => {
  return (
    <div className={styles.main}>
      {image && (
        <div className={styles.canvas}>
          <Image src={image} fill={true} alt="Episode of Ola" className={`${styles.image} imgShadow`} />
        </div>
      )}
      <div className={`${styles.year} textS`}>{year}</div>
      <div className={`${styles.text} textS`}>{text}</div>
    </div>
  );
};

export default Episode;
