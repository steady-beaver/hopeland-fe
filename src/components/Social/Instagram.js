import Image from 'next/image';
import SocialBg from '/public/icons/socialNew/social-bg.svg';
import styles from './logo.module.scss';
import InstagramLogo from '/public/icons/socialNew/instagram-logo.svg'

const Instagram = ({ iconBg }) => {
  return (
    <a
      href="https://www.instagram.com/smileisthekeyphotography/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.main}  ${iconBg}`}
    >
      <SocialBg className={` ${styles.bg}`} />
      <InstagramLogo />
    </a>
  );
};

export default Instagram;
