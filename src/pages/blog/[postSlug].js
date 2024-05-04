import BackToJournalBtn from '@/components/BackToJournalBtn/BackToJournalBtn';
import CategoriesWidget from '@/components/CategoriesWidget/CategoriesWidget';
import Date from '@/components/Date/Date';
import Layout from '@/components/Layout';
import NewContainer from '@/components/NewContainer/NewContainer';
import NewsletterWidget from '@/components/NewsletterWidget/NewsletterWidget';
import { getAllCategories, getPostSlugs, getSinglePost } from '@/lib/ola-blog';
import PersonalSection from '@/scenes/PersonalSection/PersonalSection';
import styles from './Post.module.scss';

export const getStaticProps = async ({ params }) => {
  const postData = await getSinglePost(params.postSlug);
  const allCategories = await getAllCategories();
  return {
    props: {
      postData,
      allCategories,
    },
    // revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const slugsArr = await getPostSlugs();

  return {
    paths: slugsArr.map((item) => ({
      params: {
        postSlug: item.slug,
      },
    })),
    // fallback: 'blocking',
    fallback: false,
  };
};

const BlogArticle = ({ postData, allCategories }) => {
  return (
    <Layout>
      <NewContainer>
        <div className={styles.main}>
          <div className={styles.header}>
            <BackToJournalBtn />
            <h1 className={`headingH1 ${styles.title}`}>{postData.title}</h1>
            <div className={`${styles.details} subtitleTiny uppercase`}>
              {postData?.categories?.edges.map((item, i) => (
                <span key={i} className={`${styles.category}`}>
                  {item.node.name}
                </span>
              ))}
              <Date>{postData.date}</Date>
            </div>
            <div
              className={`${styles.excerpt} headingH3 centered`}
              dangerouslySetInnerHTML={{
                __html: postData.excerpt,
              }}
            />
            <img src={postData.featuredImage.node.link} alt="Featured image" />
          </div>

          <div className={styles.blogLayout}>
            <div
              className={`wpBlog`}
              dangerouslySetInnerHTML={{
                __html: postData.content,
              }}
            />
            <div className={styles.sideBar}>
              <NewsletterWidget />
              <CategoriesWidget categories={allCategories} />
            </div>
          </div>
        </div>
      </NewContainer>

      <NewContainer>
        <PersonalSection />
      </NewContainer>
    </Layout>
  );
};

export default BlogArticle;
