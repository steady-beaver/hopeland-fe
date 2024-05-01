import SocialBg from '/public/icons/socialNew/social-bg.svg';
import styles from './logo.module.scss';
import PinterestLogo from '/public/icons/socialNew/pinterest-logo.svg'

const Pinterest = ({ iconBg }) => {
  return (
    <a
      href="https://www.pinterest.pt/smileisthekeyphoto/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.main}  ${iconBg}`}
    >
      <SocialBg className={` ${styles.bg}`} />
      <PinterestLogo />
    </a>
  );
};

export default Pinterest;
