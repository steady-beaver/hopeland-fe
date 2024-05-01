import styles from './SendBtn.module.scss';

const SendBtn = ({ children, onClick, disabled, ...rest }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`${styles.sendBtn} `} {...rest}>
      {children}
    </button>
  );
};

export default SendBtn;
