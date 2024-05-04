import Image from 'next/image';
import styles from './QuatroSectionVarA.module.scss';

const QuatroSectionVarA = ({ header, title, p1, p2, srcPrimary, srcSecondary, id }) => {
  return (
    <div className={styles.mainVarA} id={id}>
      <div className={styles.verticalFrameVarA}>
        <h2 className={`${''} headingH1 vertical uppercase`}>{header}</h2>
      </div>
      <div className={styles.desktopLayoutVarA}>
        <div className={styles.leftColVarA}>
          <div className={styles.primaryFrameVarA}>
            <img
              src={srcPrimary}
              alt="Wedding"
              width={357}
              height={550}
              className={`${styles.imgPrimary} imgShadow`}
            />
          </div>

          <p className={`${styles.p2VarA} textS`}>{p2}</p>
        </div>
        <div className={styles.rightColVarA}>
          <h3 className={`${styles.titleVarA} headingH3`}>{title}</h3>
          <p className={`${styles.p1VarA} textS`}>{p1}</p>
          <div className={styles.secondaryFrameVarA}>
            <img
              src={'/pictures/white-paper-1.png'}
              width={200}
              height={200}
              className={styles.paperOrnamentVarA}
              alt="Paper decoration"
            />
            <img src={srcSecondary} alt="Wedding" className="imgShadow fill" />
          </div>
        </div>
      </div>

      {/* ================================================= */}

      <div className={styles.mobileLayoutVarA}>
        <div className={styles.topPartFrame}>
          <div className={styles.primaryFrameVarA}>
            <img src={srcPrimary} alt="Wedding" width={260} height={400} />
          </div>
          <div className={styles.secondaryFrameVarA}>
            <img
              src={'/pictures/white-paper-1.png'}
              width={130}
              height={200}
              className={styles.paperOrnamentVarA}
              alt="Paper decoration"
            />
            <img src={srcSecondary} className={styles.secondaryImg} alt="Wedding" width={200} height={200} />
          </div>
        </div>
        <div className={styles.bottomPartFrame}>
          <h3 className={`${styles.titleVarA} headingH3`}>{title}</h3>
          <p className={`${styles.p1VarA} textS`}>{p1}</p>
          <p className={`${styles.p2VarA} textS`}>{p2}</p>
        </div>
      </div>
    </div>
  );
};

export default QuatroSectionVarA;
