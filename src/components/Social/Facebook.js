import SocialBg from '/public/icons/socialNew/social-bg.svg';
import styles from './logo.module.scss';
import FacebookLogo from '/public/icons/socialNew/facebook-logo.svg';

const Facebook = ({ iconBg }) => {
  return (
    <a
      href="https://www.facebook.com/smileisthekeyphotography/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.main}  ${iconBg}`}
    >
      <SocialBg className={` ${styles.bg}`} />
      <FacebookLogo />
    </a>
  );
};

export default Facebook;
