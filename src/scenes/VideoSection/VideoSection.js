'use client';
import CustomPlayBtn from '/public/icons/custom-play-icon.svg';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import styles from './VideoSection.module.scss';

const VideoSection = ({ url }) => {
  const [isClient, setIsCLient] = useState(false);

  useEffect(() => {
    setIsCLient(true);
  }, []);

  return (
    <div className={styles.frame}>
      {isClient && (
        <ReactPlayer
          url={url}
          controls={true}
          light={true}
          playing={true}
          width="100%"
          height="100%"
          className={styles.video}
          playIcon={<CustomPlayBtn />}
        />
      )}
    </div>
  );
};

export default VideoSection;
