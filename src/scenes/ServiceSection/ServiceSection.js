import { useEffect, useState } from 'react';
import Preview from './Preview';
import model from './ServiceSection.model.js';
import styles from './ServiceSection.module.scss';
import TabMenu from './TabMenu';

const serviceTypes = ['couple', 'wedding', 'elopement'];

const ServiceSection = () => {
  const [option, setOption] = useState(serviceTypes[0]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        const currentIndex = serviceTypes.indexOf(option);
        const nextIndex = (currentIndex + 1) % serviceTypes.length;

        setOption(serviceTypes[nextIndex]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, option]);

  const stopRotation = () => setIsPaused(true);
  const restoreRotation = () => setIsPaused(false);

  return (
    <section className={styles.frame}>
      <div className={`vertical ${styles.verticalPos}`}>
        <div className="subtitle">Services</div>
        <h2 className="headingH1">For you</h2>
      </div>
      {model.map(({ serviceType, ...item }, i) => {
        return (
          <Preview
            {...item}
            key={i}
            stopRotation={stopRotation}
            restoreRotation={restoreRotation}
            className={`${serviceType === option ? styles.selected : styles.notSelected}`}
          />
        );
      })}

      <TabMenu
        option={option}
        setOption={setOption}
        className={styles.menuPos}
        stopRotation={stopRotation}
        restoreRotation={restoreRotation}
      />
    </section>
  );
};

export default ServiceSection;
