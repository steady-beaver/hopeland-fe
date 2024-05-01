import styles from './NewContainerPatch.module.scss';

const NewContainerPatch = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default NewContainerPatch;
