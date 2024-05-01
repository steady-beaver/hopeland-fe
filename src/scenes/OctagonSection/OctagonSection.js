import CoveredImg from '@/components/CoveredImg/CoveredImg';
import styles from './OctagonSection.module.scss';

const OctagonSection = ({ data }) => {
  const {
    leftTitle,
    leftText,
    leftTopImage,
    leftMiddleImage,
    leftEndImage,
    rightTitle,
    rightText,
    rightTopImage,
    rightMiddleImage,
    rightEndImage,
  } = data;

  return (
    <>
      <div className={styles.main}>
        {leftTitle && (
          <div className={styles.col}>
            <div className="portraitOctagon">
              <CoveredImg imageNode={leftTopImage?.node} />
            </div>
            <div className={` ${styles.textContainer}`}>
              <h6 className="subtitle uppercase">{leftTitle ?? 'Left title'}</h6>
              <p className="textXS">{leftText ?? 'Left text'}</p>
            </div>
            <div className="landscapeOctagon">
              <CoveredImg imageNode={leftMiddleImage?.node} />
            </div>
            <div className="landscapeOctagon">
              <CoveredImg imageNode={leftEndImage?.node} />
            </div>
          </div>
        )}
        {rightTitle && (
          <div className={styles.col}>
            <div className="landscapeOctagon">
              <CoveredImg imageNode={rightTopImage?.node} />
            </div>
            <div className="landscapeOctagon">
              <CoveredImg imageNode={rightMiddleImage?.node} />
            </div>
            <div className="portraitOctagon">
              <CoveredImg imageNode={rightEndImage?.node} />
            </div>
            <div className={` ${styles.textContainer}`}>
              <h6 className="subtitle uppercase">{rightTitle ?? 'Right title'}</h6>
              <p className="textXS">{rightText ?? 'Right text'}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OctagonSection;
