import PostHighlight from '@/components/PostHighlight/PostHighlight';
import Link from 'next/link';
import { useId, useState } from 'react';
import JournalMenu from './JournalMenu';
import styles from './JournalSection.module.scss';

const JournalSection = ({ recentThreePosts, imgBase }) => {
  const [option, setOption] = useState('1'); // '1' | '2' | '3'
  const elemId = useId();

  if (recentThreePosts.length !== 3 || recentThreePosts.find((item) => item === undefined)) {
    console.error('! There must be at least 3 posts to visualize the section !');
    return null;
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Link href="/blog" className={styles.link}>
          <h5 className={`${''} subtitle uppercase`}>Blog</h5>
        </Link>
        <Link href="/blog" className={styles.link}>
          <h2 className={`${''} headingH1 uppercase`}>Journal</h2>
        </Link>
      </div>

      <PostHighlight
        key={`third-${elemId}`}
        post={recentThreePosts[2]}
        imgBase={imgBase}
        className={`${'3' === option ? styles.selected : styles.notSelected}`}
      />
      <PostHighlight
        key={`second-${elemId}`}
        post={recentThreePosts[1]}
        imgBase={imgBase}
        className={`${'2' === option ? styles.selected : styles.notSelected}`}
      />
      <PostHighlight
        key={`first-${elemId}`}
        post={recentThreePosts[0]}
        imgBase={imgBase}
        className={`${'1' === option ? styles.selected : styles.notSelected}`}
      />
      <JournalMenu recentThreePosts={recentThreePosts} option={option} setOption={setOption} />
    </div>
  );
};

export default JournalSection;
