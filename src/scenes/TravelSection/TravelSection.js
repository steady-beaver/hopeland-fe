import Image from 'next/image';
import styles from './TravelSection.module.scss';

const TravelSection = ({ primaryImg, secondaryImg }) => {
  return (
    <div className={styles.main}>
      <div className={styles.textFrame}>
        <h2 className={`${styles.title} headingH1 uppercase`}>Travel</h2>
        <p className={`textS`}>
          Ready to travel anywhere for your destination wedding! Let&rsquo;s turn your dream location into the backdrop
          of your special day. I&rsquo;ll fly out to capture every moment, making sure your love story is beautifully
          told, no matter where in the world you decide to say I DO.
        </p>
        <span className={`${styles.link} textS letterSpacing uppercase`}>ASK ME ABOUT DETAILS</span>
      </div>
      <div className={styles.imgCanvas}>
        <div className={styles.primaryImg}>
          <Image src={primaryImg} fill={true} alt="Wedding" className={`${styles.imageSrc} imgShadow`} />
        </div>
        <div className={styles.secondaryImg}>
          <Image src={secondaryImg} fill={true} alt="Wedding" className={`${styles.imageSrc} imgShadow`} />
        </div>
        <div className={styles.travelFlower}>
          <Image
            src={'/pictures/travel/travel-flower.png'}
            width={500}
            height={500}
            alt="Wedding"
            className={styles.imageSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelSection;
