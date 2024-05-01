import Facebook from '@/components/Social/Facebook';
import Instagram from '@/components/Social/Instagram';
import Pinterest from '@/components/Social/Pinterest';
import styles from './FollowMe.module.scss';

const FollowMe = () => {
  return (
    <div className={styles.main}>
      <div>FOLLOW ME</div>
      <div className={`${styles.media} `}>
        <Facebook iconBg={styles.iconBg} />
        <Instagram iconBg={styles.iconBg} />
        <Pinterest iconBg={styles.iconBg} />
      </div>
    </div>
  );
};

export default FollowMe;
