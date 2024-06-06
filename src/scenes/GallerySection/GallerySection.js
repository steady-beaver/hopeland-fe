'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './GallerySection.module.scss';
import TileImg from './TileImg';
import ArrowBack from '/public/icons/arrow-left.svg';
import ArrowRight from '/public/icons/arrow-right.svg';

const getImgArray = (dataObj) => {
  const outputArray = [];

  for (const key in dataObj) {
    if (dataObj[key] && dataObj[key].node) {
      outputArray.push(dataObj[key].node);
    }
  }
  return outputArray;
};

const getSlidesArray = (imgNodesArr) => {
  const res = [];
  imgNodesArr.forEach((item) => {
    const aspectRatio = item?.mediaDetails?.width / item?.mediaDetails?.height;
    const slideItem = {
      alt: item?.altText,
      src: item?.sourceUrl,
      width: item?.mediaDetails?.width,
      height: item?.mediaDetails?.height,
      aspectRatio,
      srcSet: item?.srcSet?.split(', ').map((set) => {
        const [srcUrl, width] = set.split(' ');
        const widthNum = parseInt(width);
        const srcObj = {
          src: srcUrl,
          width: widthNum,
          height: Math.round(widthNum * aspectRatio),
        };
        return srcObj;
      }),
    };
    res.push(slideItem);
  });
  return res;
};

const GallerySection = ({ data }) => {
  const frameRef = useRef();
  const imgNodesArr = useMemo(() => getImgArray(data), [data]);
  const slidesArr = useMemo(() => getSlidesArray(imgNodesArr), [imgNodesArr]);
  const [index, setIndex] = useState(-1);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX);
    setScrollLeft(frameRef.current.scrollLeft);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setIsDown(false);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    frameRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDown(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(frameRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX;
    const walk = x - startX;
    frameRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDown(false);
  };

  const handleScroll = () => {
    if (frameRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = frameRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeftHandler = () => {
    if (canScrollLeft) {
      frameRef.current.scrollBy({ left: -frameRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRightHandler = () => {
    if (canScrollRight) {
      frameRef.current.scrollBy({ left: frameRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScroll();
    frameRef.current.addEventListener('scroll', handleScroll);
    return () => {
      frameRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div
        className={`${styles.frame} ${isDown ? styles.active : ''}`}
        ref={frameRef}
        onMouseDownCapture={handleMouseDown}
        onMouseUpCapture={handleMouseUp}
        onMouseMoveCapture={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.canvas}>
          <div className={`${styles.row} ${styles.upper}`}>
            {imgNodesArr.map((item, i) => {
              if (i % 2 == 0) return <TileImg key={'upper-' + i} imageNode={item} onClick={() => setIndex(i)} />;
            })}
          </div>
          <div className={`${styles.row} ${styles.lower}`}>
            {imgNodesArr.map((item, i) => {
              if (i % 2 == 1) return <TileImg key={'lower-' + i} imageNode={item} onClick={() => setIndex(i)} />;
            })}
          </div>
        </div>
        <Lightbox index={index} slides={slidesArr} open={index >= 0} close={() => setIndex(-1)} />
      </div>

      <div
        className={`${styles.arrow} ${styles.leftArrow} ${!canScrollLeft ? styles.disabled : ''}`}
        onClick={scrollLeftHandler}
      >
        <ArrowBack />
      </div>
      <div
        className={`${styles.arrow} ${styles.rightArrow} ${!canScrollRight ? styles.disabled : ''}`}
        onClick={scrollRightHandler}
      >
        <ArrowRight />
      </div>
    </div>
  );
};

export default GallerySection;
