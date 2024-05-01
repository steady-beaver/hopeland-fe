import Image from 'next/image';
import Link from 'next/link';
import bookSessionFlower from 'public/ornaments/book-session-flower.png';
import olaPhoto from 'public/pictures/ola-profile.webp';
import { useInView } from 'react-intersection-observer';
import styles from './PersonalSectionExtended.module.scss';
import FollowMe from '@/components/FollowMe/FollowMe';

const PersonalSectionExtended = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <div className={`${styles.main} ${className}`}>
      <div ref={ref} className={styles.presentation}>
        <Link href="/contacts">
          <Image
            src={bookSessionFlower}
            className={`${styles.flower} ${inView ? styles.shakePlant : ''} `}
            width={464}
            height={594}
            alt="Portuguese flower"
          />
          <Image
            src={olaPhoto}
            className={`${styles.olaPicture} ${inView ? styles.shakeOla : ''} `}
            width={224}
            height={244}
            alt="Image of a wedding photographer Ola Nadolna standing on the Algarve cliffs."
          />
        </Link>
        <span className={`${styles.signature} signature`}>Ola</span>
      </div>
      <div className={`${''} subtitleStrong uppercase`}>Contact me</div>
      <div className={`${styles.invitationText} textS`}>
        Let&rsquo;s make memories! Hit the image to book your session and bring your dream photos to life
      </div>
      <FollowMe />
    </div>
  );
};

export default PersonalSectionExtended;
