import ReadMoreBtn from '@/components/ReadMoreBtn/ReadMoreBtn';
import Link from 'next/link';
import styles from './PostHighlight.module.scss';
import Date from '@/components/Date/Date';

const PostHighlight = ({ post, imgBase, className }) => {
  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.textCol}>
        <div>
          <h2 className={`headingH2 ${styles.title}  uppercase`}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <div className={`${styles.details} subtitleTiny uppercase`}>
            {post?.categories?.nodes.map((categoryObj, i) => (
              <span key={i} className={`${styles.category}`}>
                {categoryObj.name}
              </span>
            ))}
            <Date>{post.date}</Date>
          </div>
        </div>
        <div
          className={`${styles.excerpt} textS`}
          dangerouslySetInnerHTML={{
            __html: post.excerpt,
          }}
        />

        <div>
          <ReadMoreBtn to={`/blog/${post.slug}`} />
        </div>
      </div>

      <div className={styles.imageFrame}>
        <Link href={`/blog/${post.slug}`} className={styles.imgLink}>
          <img src={`${imgBase}/${post.featuredImage.node.mediaDetails.file}`} alt='' className={`${styles.primaryFrame} objectCover imgShadow fill`} />
          <img src="/ornaments/grass-ornament.svg" alt='' className={styles.grassOrnament} />
          <img src={'/ornaments/old-postcard.png'} alt='' className={styles.postcardBack} />
        </Link>
      </div>
    </div>
  );
};

export default PostHighlight;
