import ArrowForward from '/public/icons/arrow-forward.svg';
import styles from './RightArrowBtn.module.scss';

const RightArrowBtn = ({ onClick, disabled, className, ...rest }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`${styles.main} ${className}`} {...rest}>
      <ArrowForward />
    </button>
  );
};

export default RightArrowBtn;
