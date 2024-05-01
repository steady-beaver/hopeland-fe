import Link from 'next/link';
import styles from './CategoryBar.module.scss';

const CategoryBar = ({ allCategories }) => {
  return (
    <div className={styles.categoryBar}>
      {allCategories.map((item, i) => (
        <Link href={`/category/${item.slug}`} key={i}>
          <span key={i} className={`${''} subtitleStrong uppercase`}>
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryBar;
