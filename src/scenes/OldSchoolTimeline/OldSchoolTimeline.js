import React from 'react';
import styles from './OldSchoolTimeline.module.scss';

const OldSchoolTimeline = () => {
  return (
    <div className={styles.main}>
      <div className={`${styles.header}`}>
        <h6 className={`${styles.title} subtitleStrong uppercase`}>I guess I&lsquo;ve always known what I wanted.</h6>
        <p className={`text ${styles.text}`}>
          Sitting still was never my thing. I&lsquo;ve never worked a 9-to-5 job. I&lsquo;ve always had one foot in the
          world, drawing inspiration from people and travels. That&lsquo;s why I value naturalness in photography so
          much.
        </p>
      </div>
      <div className={styles.timelineFrame}>
        <div className={styles.timeline} />
        {/* 1 */}
        <div className={`${styles.chapter} ${styles.chapter_1}`}>
          <div className={styles.imgFrame}>
            <img src="/pictures/about-me/about-me-1.jpg" alt="Episode of Ola" className={`${styles.image} imgShadow`} />
          </div>
          <div className={`${styles.year} textS`}>2002</div>
          <div className={`${styles.text} textS`}>
            I invested all my savings in a Mamiya analog camera. My dad, a photography enthusiast himself, passed down
            his knowledge of camera settings to me. Since then, I&#39;ve been spending all my money on film rolls and
            setting up a darkroom under my desk.
          </div>
        </div>
        {/* 2 */}
        <div className={`${styles.chapter} ${styles.chapter_2}`}>
          <div className={`${styles.year} textS`}>2007</div>
          <div className={`${styles.text} textS`}>
            Dropping out of my tourism studies to apply to a photography school on the same day, I`&rsquo;ve been
            immersed in the world of photography ever since. Meeting beautiful people along the way, I started working
            as a photography teacher a year later.
          </div>
        </div>
        {/* 3 */}
        <div className={`${styles.chapter} ${styles.chapter_3}`}>
          <div className={styles.imgFrame}>
            <img src="/ornaments/sun.svg" alt="Sun detail" className={styles.ornament} />
            <img src="/pictures/about-me/about-me-2.jpg" alt="Episode of Ola" className={`${styles.image} imgShadow`} />
          </div>
          <div className={`${styles.year} textS`}>2017</div>
          <div className={`${styles.text} textS`}>
            After many travels, we pause for a moment to welcome our children into the world. Portugal holds special
            significance for us, which is why we decide to have an elopement wedding with our children running around
            us.
          </div>
        </div>
        {/* 4 */}
        <div className={`${styles.chapter} ${styles.chapter_4}`}>
          <div className={styles.imgFrame}>
            <img src="/ornaments/bush.svg" alt="Bush detail" className={styles.ornament} />
            <img src="/pictures/about-me/about-me-3.jpg" alt="Episode of Ola" className={`${styles.image} imgShadow`} />
          </div>
          <div className={`${styles.year} textS`}>2018</div>
          <div className={`${styles.text} textS`}>
            Exactly one year later, with our car packed to the ceiling, we left Poland and moved to Portugal. I left my
            photography studio behind in Poland to start afresh. Since then, I&rsquo;ve been immersed in wedding
            photography in Portugal, and I wouldn&rsquo;t have it any other way.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldSchoolTimeline;
