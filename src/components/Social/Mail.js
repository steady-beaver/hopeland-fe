import SocialBg from '/public/icons/socialNew/social-bg.svg';
import styles from './logo.module.scss';
import MailLogo from '/public/icons/socialNew/mail-logo.svg'

const Mail = ({ iconBg }) => {
  return (
    <a
      href="mailto:ola@smileisthekey.eu"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.main}  ${iconBg}`}
    >
      <SocialBg className={` ${styles.bg}`} />
      <MailLogo />
    </a>
  );
};

export default Mail;
