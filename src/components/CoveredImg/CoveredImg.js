import styles from './CoveredImg.module.scss';

const defImageNode = {
  sourceUrl: '/pictures/imgPlaceholder.svg',
  altText: '#',
  srcSet: undefined,
};

const CoveredImg = ({ imageNode = defImageNode }) => {
  const { sourceUrl, altText, srcSet } = imageNode;

  return <img srcSet={srcSet} src={sourceUrl} alt={altText} className={styles.main} />;
};

export default CoveredImg;
