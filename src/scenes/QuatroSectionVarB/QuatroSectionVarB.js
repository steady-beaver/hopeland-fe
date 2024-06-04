import Image from 'next/image';
import styles from './QuatroSectionVarB.module.scss';

const QuatroSectionVarB = ({ header, title, p1, p2, srcPrimary, srcSecondary, id }) => {
  return (
    <div className={styles.main} id={id}>
      <div className={styles.verticalFrame}>
        <h2 className={`${''} headingH1 vertical uppercase`}>{header}</h2>
      </div>
      <div className={styles.desktopLayout}>
        <div className={styles.leftCol}>
          <div className={styles.primaryFrame}>
            <img src={srcPrimary} alt="Wedding" className={`${styles.imgPrimary} imgShadow fill`} />
            <img
              src={'/ornaments/brown-paper.png'}
              width={375}
              height={600}
              className={styles.brownPaperOrnament}
              alt="Paper decoration"
            />

          </div>

          <p className={`${styles.p2} textS`}>{p2}</p>
        </div>
        <div className={styles.rightCol}>
          <h3 className={`${styles.title} headingH3`}>{title}</h3>
          <p className={`${styles.p1} textS`}>{p1}</p>
          <div className={styles.secondaryFrame}>
            <img src={srcSecondary} alt="Wedding" className="imgShadow fill" />
          </div>
        </div>
      </div>

      {/* ================================================= */}

      <div className={styles.mobileLayout}>
        <div className={styles.topPartFrame}>
          <div className={styles.primaryFrame}>
            <img src={srcPrimary} alt="Wedding" width={260} height={400} className={styles.primaryImg} />
            <img
              src={'/ornaments/brown-paper.png'}
              width={375}
              height={600}
              className={styles.brownPaperOrnament}
              alt="Paper decoration"
            />

          </div>
          <div className={styles.secondaryFrame}>
            <img src={srcSecondary} className={styles.secondaryImg} alt="Wedding" width={200} height={200} />
          </div>
        </div>
        <div className={styles.bottomPartFrame}>
          <h3 className={`${styles.title} headingH3`}>{title}</h3>
          <p className={`${styles.p1} textS`}>{p1}</p>
          <p className={`${styles.p2} textS`}>{p2}</p>
        </div>
      </div>
    </div>
  );
};

export default QuatroSectionVarB;
