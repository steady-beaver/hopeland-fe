import CoveredImg from '@/components/CoveredImg/CoveredImg';
import Date from '@/components/Date/Date';
import Link from 'next/link';
import styles from './ArticlePreview.module.scss';

const ArticlePreview = ({ imgNode, categories, date, title, excerpt, link }) => {
  return (
    <div className={styles.main}>
      <div className={styles.imgFrame}>
        <Link href={link}>
          <CoveredImg imageNode={imgNode} />
        </Link>
      </div>
      <div>
        <h2 className={`headingH2 ${styles.title}  uppercase`}>
          <Link href={link}>{title} </Link>
        </h2>

        <div className={`${styles.details} subtitleTiny uppercase`}>
          {categories?.map((categoryObj, i) => (
            <span key={i} className={`${styles.category}`}>
              {categoryObj.name}
            </span>
          ))}
          <Date>{date}</Date>
        </div>
      </div>
      {excerpt && (
        <div
          className={`${styles.excerpt} text`}
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
      )}
      <div>
        <Link href={link}>
          <span className={`${styles.articleLink} textS regular uppercase letterSpacing`}>Read more</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticlePreview;
