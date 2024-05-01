'use client';

import { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './GallerySection.module.scss';
import TileImg from './TileImg';

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
  const imgNodesArr = getImgArray(data);
  const slidesArr = getSlidesArray(imgNodesArr);
  const [index, setIndex] = useState(-1);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - -frameRef.current.offsetLeft);
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
    const x = e.pageX - frameRef.current.offsetLeft;
    const walk = x - startX;
    frameRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDown(true);
    setStartX(e.touches[0].pageX - frameRef.current.offsetLeft);
    setScrollLeft(frameRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - frameRef.current.offsetLeft;
    const walk = x - startX;
    frameRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDown(false);
  };

  return (
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
  );
};

export default GallerySection;
