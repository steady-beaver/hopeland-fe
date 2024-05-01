import styles from './TestimonialSectionNew.module.scss';

const TestimonialSectionNew = ({ title, content, name }) => {
  return (
    <div className={styles.main}>
      <h3 className={`${''} headingH4`}>{title}</h3>
      {content}
      <span className={`${styles.signature} signature`}>{name}</span>
    </div>
  );
};

export default TestimonialSectionNew;
