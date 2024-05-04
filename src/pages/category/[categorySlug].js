import ArticlePreview from '@/components/ArticlePreview/ArticlePreview';
import BackToJournalBtn from '@/components/BackToJournalBtn/BackToJournalBtn';
import CategoryBar from '@/components/CategoryBar/CategoryBar';
import Layout from '@/components/Layout';
import LoadMoreBtn from '@/components/LoadMoreBtn/LoadMoreBtn';
import NewContainer from '@/components/NewContainer/NewContainer';
import { getAllCategories, getPostsSegment } from '@/lib/ola-blog';
import { useEffect, useState } from 'react';
import styles from './Category.module.scss';

export const getStaticPaths = async () => {
  const categories = await getAllCategories();

  return {
    paths: categories.map((category) => ({
      params: {
        categorySlug: category.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const currentCategorySlug = params.categorySlug;
  const categoryDataSegment = await getPostsSegment(null, params.categorySlug);
  const allCategories = await getAllCategories();

  return {
    props: {
      categoryDataSegment,
      allCategories,
      currentCategorySlug,
    },
  };
};

const ArchivePage = ({ categoryDataSegment, allCategories, currentCategorySlug }) => {
  const currentCategory = allCategories.filter((item) => item.slug === currentCategorySlug)[0];

  const [postData, setPostData] = useState(categoryDataSegment);

  useEffect(() => {
    const fetchData = async () => {
      const newCategoryDataSegment = await getPostsSegment(null, currentCategorySlug);
      setPostData(newCategoryDataSegment);
    };

    fetchData();
  }, [currentCategorySlug]);

  return (
    <Layout>
      <NewContainer>
        <div className={styles.main}>
          <div className={styles.header}>
            <BackToJournalBtn />
            <h1 className={`${''} headingH1`}>{currentCategory.name}</h1>
            <div className={`${styles.details} subtitleTiny uppercase`}>{currentCategory.count} articles</div>
            <CategoryBar allCategories={allCategories} />
          </div>
          <div className={styles.wrapper}>
            {postData.nodes.map((item, i) => {
              const link = 'http://localhost:3000' + '/blog/' + item.slug;
              return (
                <ArticlePreview
                  key={i}
                  imgNode={item.featuredImage.node}
                  categories={item.categories.nodes}
                  date={item.date}
                  title={item.title}
                  excerpt={item.excerpt}
                  link={link}
                />
              );
            })}
          </div>
          <LoadMoreBtn restPosts={postData} setRestPosts={setPostData} categorySlug={currentCategory.slug} />
        </div>
      </NewContainer>
    </Layout>
  );
};

export default ArchivePage;
