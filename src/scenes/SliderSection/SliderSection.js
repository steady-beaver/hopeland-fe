import Slider from '@/components/Slider/Slider';
import { useEffect, useState } from 'react';
import styles from './SliderSection.module.scss';

const SliderSection = ({ popularSessions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((counter) => (counter + 1) % popularSessions.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [popularSessions]);

  return (
    <div className={styles.mainFrame}>
      {popularSessions.map((item, i) => (
        <Slider
          key={item.slug}
          slug={`/session/${item.slug}`}
          photoUrl={item.featuredImage.node.sourceUrl}
          topText={item.title}
          title={item.main.heroLabel}
          bottomText={item.main.description}
          className={`${i === currentIndex ? styles.active : styles.inactive} `}
          imageNode={item.featuredImage.node}
        />
      ))}
    </div>
  );
};

export default SliderSection;
