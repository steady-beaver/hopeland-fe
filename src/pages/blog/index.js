import ArticlePreview from '@/components/ArticlePreview/ArticlePreview';
import CategoryBar from '@/components/CategoryBar/CategoryBar';
import Layout from '@/components/Layout';
import LoadMoreBtn from '@/components/LoadMoreBtn/LoadMoreBtn';
import NewContainer from '@/components/NewContainer/NewContainer';
import PostHighlight from '@/components/PostHighlight/PostHighlight';
import { getAllCategories, getPostsSegment } from '@/lib/ola-blog';
import { useState } from 'react';
import styles from './BlogHome.module.scss';

const BlogHome = ({ posts, allCategories, imageStorageBase }) => {
  const [firstPost, ...rest] = posts.nodes;
  const [lastPost] = useState(firstPost); //just first post
  const [restPosts, setRestPosts] = useState({ nodes: rest, pageInfo: posts.pageInfo }); // rest posts and pageInfo

  return (
    <Layout>
      <NewContainer>
        <div className={styles.main}>
          <h1 className={` ${styles.heading} headingH1 uppercase centered`}>Journal</h1>
          <CategoryBar allCategories={allCategories} />

          <PostHighlight post={lastPost} imgBase={imageStorageBase} />

          <div className={styles.wrapper}>
            {restPosts.nodes.map((item) => {
              return (
                <ArticlePreview
                  key={item.slug}
                  imgNode={item.featuredImage.node}
                  categories={item.categories.nodes}
                  date={item.date}
                  title={item.title}
                  excerpt={item.excerpt}
                  slug={item.slug}
                  link={'/blog/' + item.slug}
                />
              );
            })}
          </div>
          <LoadMoreBtn restPosts={restPosts} setRestPosts={setRestPosts} />
        </div>
      </NewContainer>
    </Layout>
  );
};

export async function getStaticProps() {
  const initialPosts = await getPostsSegment();
  const allCategories = await getAllCategories();
  return {
    props: {
      posts: initialPosts,
      allCategories,
      imageStorageBase: process.env.NEXT_PUBLIC_WORDPRESS_UPLOADS_URL,
    },
    // revalidate: 60,
  };
}

export default BlogHome;
