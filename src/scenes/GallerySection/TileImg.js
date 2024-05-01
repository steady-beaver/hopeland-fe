import styles from './TileImg.module.scss';

const defImageNode = {
  sourceUrl: '/pictures/imgPlaceholder.svg',
  altText: '#',
  srcSet: undefined,
};

const TileImg = ({ imageNode = defImageNode, onClick }) => {
  const { sourceUrl, altText, srcSet } = imageNode;

  return <img srcSet={srcSet} src={sourceUrl} alt={altText} className={styles.main} onClick={onClick} />;
};

export default TileImg;
