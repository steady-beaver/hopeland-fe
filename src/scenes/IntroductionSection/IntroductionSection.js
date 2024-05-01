import ReadMoreBtn from '@/components/ReadMoreBtn/ReadMoreBtn';
import styles from './IntroductionSection.module.scss';

const IntroductionSection = () => {
  return (
    <div className={styles.main}>
      <h2 className={`${styles.title} headingH1`}>Hi, I&rsquo;m Ola</h2>
      <p className={` textS`}>
        Thank you for that smile on your face, thank your for inviting me so close to you, thank you for your trust.
      </p>
      <p className={` textS`}>
        Started in Poland, now I snap weddings in Portugal&rsquo;s beauty. For over five years, I&rsquo;ve been loving
        every hill, beach, and sunset here. They inspire me to catch every smile and tear on your big day. Want photos
        that show all your feels and fun? That&rsquo;s what I do. Let&rsquo;s make your wedding pics unforgettable. See
        my work and let&rsquo;s chat about your story. Can&rsquo;t wait.
      </p>
      <ReadMoreBtn to="/about" className={styles.linkBtn} />
    </div>
  );
};

export default IntroductionSection;
