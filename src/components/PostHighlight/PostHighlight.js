import ReadMoreBtn from '@/components/ReadMoreBtn/ReadMoreBtn';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PostHighlight.module.scss';

const PostHighlight = ({ post, imgBase, className }) => {
  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.textCol}>
        <div>
          <h2 className={`${styles.title} headingH2 uppercase`}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <div className={`${styles.details} subtitleTiny uppercase`}>
            {post?.categories?.nodes.map((categoryObj, i) => (
              <span key={i} className={`${styles.category}`}>
                {categoryObj.name}
              </span>
            ))}
            <span>{post.date}</span>
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
          <Image
            src={`${imgBase}/${post.featuredImage.node.mediaDetails.file}`}
            alt="Wedding"
            fill={true}
            className={`${styles.primaryFrame} objectCover imgShadow`}
          />
          <Image
            src={'/ornaments/grass-ornament.svg'}
            alt="Grass ornament"
            width={45}
            height={60}
            className={styles.grassOrnament}
          />
          <Image
            src={'/ornaments/old-postcard.png'}
            alt="Old postcard ornament"
            fill={true}
            className={styles.postcardBack}
          />
        </Link>
      </div>
    </div>
  );
};

export default PostHighlight;
