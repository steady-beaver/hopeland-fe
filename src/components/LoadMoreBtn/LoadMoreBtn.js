import { getPostsSegment } from '@/lib/ola-blog';
import styles from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({ className, restPosts, setRestPosts, categorySlug = null }) => {
  const handleClick = async () => {
    const nextPostSegment = await getPostsSegment(restPosts.pageInfo.endCursor.toString(), categorySlug);

    const newPostsObj = {
      pageInfo: { ...nextPostSegment.pageInfo },
      nodes: [...restPosts.nodes, ...nextPostSegment.nodes],
    };

    setRestPosts(newPostsObj);
  };

  const areMorePages = restPosts.pageInfo.hasNextPage;

  return (
    <div className={styles.main}>
      <span
        className={`${styles.wrapper} ${className} ${areMorePages ? null : styles.disabled}`}
        onClick={() => {
          if (areMorePages) return handleClick();
        }}
      >
        <span className={`${styles.btn} subtitleSmall`}>{areMorePages ? 'Load more' : 'No more pages'}</span>
      </span>
    </div>
  );
};

export default LoadMoreBtn;
