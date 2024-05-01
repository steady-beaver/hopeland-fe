import styles from './NewContainer.module.scss';

const NewContainer = ({ children }) => {
  return <div className={styles.newContainer}>{children}</div>;
};

export default NewContainer;
