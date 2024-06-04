import styles from './TestimonialSection.module.scss';

const TestimonialSection = () => {
  return (
    <div className={styles.main}>
      <h3 className={`${styles.title} headingH4`}>READY FOR THE RIGHT MOMENT</h3>
      <p className={` textS`}>
        We wanted to take a moment to express our heartfelt gratitude to you Ola, our amazing wedding photographer. Your
        talent and dedication captured the most beautiful moments of our special day, creating memories that we&rsquo;ll
        cherish forever.
      </p>
      <p className={` textS`}>
        Your professionalism and creativity truly made a difference, and we couldn&rsquo;t be happier with the stunning
        photographs we have received. Your incredibly gentle and kind nature allowed every single one of us to feel so
        comfortable in your presence, the pictures really do reflect this too.
      </p>
      <p className={` textS`}>
        Ola you were a complete joy to work with and there is no doubt Simon and I were completely drawn in by your
        infectious aura. We are so elated we chose you to capture these special memories, we really couldn&rsquo;t have
        picked a photographer more suited to us. Thank you so so much. Sending the biggest hug.
      </p>
      <span className={`${styles.signature} signature`}>Paige, Simon & Raffy</span>
    </div>
  );
};

export default TestimonialSection;
