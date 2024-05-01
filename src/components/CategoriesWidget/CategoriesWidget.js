import Link from 'next/link';
import styles from './CategoriesWidget.module.scss';

const CategoriesWidget = ({ categories }) => {
  return (
    <div className={styles.main}>
      <h5 className={`${styles.title} subtitleSmall uppercase bold letterSpacing`}>Categories</h5>

      {categories.map((item, i) => (
        <Link key={i} href={`/category/${item.slug}/`}>
          <div key={i} className={`${styles.item} subtitleSmall uppercase letterSpacing`}>
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesWidget;
