import styles from './FullWidthImage.module.scss';

// IMAGE OPTIMIZATION STANDARD !!!

const FullWidthImage = ({ imageNode, className }) => {
  const { sourceUrl, altText, srcSet, caption } = imageNode;

  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.imgFrame}>
        <img srcSet={srcSet} src={sourceUrl} alt={altText} className={styles.image} />
      </div>
      <div
        className={`${styles.cap} textS centered`}
        dangerouslySetInnerHTML={{
          __html: caption,
        }}
      />
    </div>
  );
};

export default FullWidthImage;
