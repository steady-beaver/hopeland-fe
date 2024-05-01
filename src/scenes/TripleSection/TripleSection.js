import InfoPoint from '@/components/InfoPoint/InfoPoint';
import Image from 'next/image';
import styles from './TripleSection.module.scss';

const TripleSection = ({ photoSrc, id }) => {
  return (
    <>
      <div className={styles.main} id={id}>
        <div className={styles.verticalFrame}>
          <h2 className={`${styles.title} headingH1 vertical uppercase`}>Wedding</h2>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.colLeft}>
            <div className={styles.primaryImg}>
              <Image src={photoSrc} fill={true} alt="Wedding" className={`${styles.primarySrc} imgShadow`} />
              {/* <Image
                src={'/ornaments/tape-ornament.png'}
                width={100}
                height={100}
                className={styles.tapeOrnament}
                alt="Paper tape decoration"
              /> */}
            </div>
            <h3 className={`${styles.title} headingH3`}>
              Wedding photos that capture your story and emotions, lasting forever.
            </h3>
            <p className={`textS`}>
              During weddings, I carefully and thoughtfully capture the true atmosphere of your day. I focus on the
              realness of each moment to tell your story. I thoroughly document the essence of the celebration, making
              sure to preserve every important detail and emotion.
            </p>
          </div>
          <div className={styles.colRight}>
            <InfoPoint title="Package 1" extra="3-hour Photo Coverage • 100 Digital Images • Online Private Gallery">
              Catch the key moments of your wedding, like the ceremony and same-day photoshoot.
            </InfoPoint>
            <InfoPoint
              title="Package 2"
              extra="5-hour Photo Coverage • 200 Digital Images • Outside session on the wedding day  • Online Private Gallery"
            >
              Package designed to capture the essence of your special day from the preparations to the ceremony and
              cocktail hour.
            </InfoPoint>
            <InfoPoint
              title="Package 3"
              extra="8-hour Photo Coverage • 400 Digital Images • Outside session on the wedding day • Pre-wedding session • Online Gallery"
            >
              All-inclusive wedding package: from prep to late-night dances, capturing your day&rsquo;s essence.
            </InfoPoint>
          </div>
        </div>
      </div>
      <div className={styles.infoMediumDown}>
        <InfoPoint title="Package 1" extra="3-hour Photo Coverage • 100 Digital Images • Online Private Gallery">
          Catch the key moments of your wedding, like the ceremony and same-day photoshoot.
        </InfoPoint>
        <InfoPoint
          title="Package 2"
          extra="5-hour Photo Coverage • 200 Digital Images • Outside session on the wedding day  • Online Private Gallery"
        >
          Package designed to capture the essence of your special day from the preparations to the ceremony and cocktail
          hour.
        </InfoPoint>
        <InfoPoint
          title="Package 3"
          extra="8-hour Photo Coverage • 400 Digital Images • Outside session on the wedding day • Pre-wedding session • Online Gallery"
        >
          All-inclusive wedding package: from prep to late-night dances, capturing your day&rsquo;s essence.
        </InfoPoint>
      </div>
    </>
  );
};

export default TripleSection;
