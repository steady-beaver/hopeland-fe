import styles from './InfoPoint.module.scss';

const InfoPoint = ({ title, children, extra }) => {
  return (
    <div className={styles.main}>
      <div className={styles.ornament} />
      <div className={`${styles.title} uppercase `}>{title}</div>
      <div className={`textS ${styles.customSmallFont}`}>{children}</div>
      {extra && <div className={`textS ${styles.customSmallFont} ${styles.extra}`}>{extra}</div>}
    </div>
  );
};

export default InfoPoint;
