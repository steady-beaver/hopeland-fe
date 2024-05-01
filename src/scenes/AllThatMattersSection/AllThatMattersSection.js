import Image from 'next/image';
import styles from './AllThatMattersSection.module.scss';

const AllThatMattersSection = ({ primaryImg, secondaryImg, thirdImg }) => {
  return (
    <div className={styles.main}>
      <h2 className={`${styles.title} headingH3 uppercase  `}>All that matters</h2>
      <div className={styles.canvas}>
        <div className={styles.frameOne}>
          <Image src={primaryImg} width={460} height={300} alt="Passion" className={`${styles.imageSrc}`} />
        </div>
        <div className={styles.frameTwo}>
          <Image src={secondaryImg} width={300} height={300} alt="Nature" className={`${styles.imageSrc} imgShadow`} />
        </div>
        <div className={styles.frameThree}>
          <Image src={thirdImg} width={300} height={450} alt="Family" className={`${styles.imageSrc} `} />
        </div>
        <div className={styles.frameLeaf}>
          <Image
            src="/pictures/matters/matters-leaf.png"
            width={460}
            height={420}
            alt="Wedding"
            className={`${styles.imageSrc} `}
          />
        </div>
      </div>
    </div>
  );
};

export default AllThatMattersSection;
