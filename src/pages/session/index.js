import ArticlePreview from '@/components/ArticlePreview/ArticlePreview';
import Layout from '@/components/Layout';
import LoadMoreSessionsBtn from '@/components/LoadMoreSessionsBtn/LoadMoreSessionsBtn';
import NewContainer from '@/components/NewContainer/NewContainer';
import { getPopularSessions, getSessionsSegment } from '@/lib/ola-blog';
import { useState } from 'react';
import StandardHeaderSection from '@/scenes/StandardHeaderSection/StandardHeaderSection';
import styles from './Portfolio.module.scss';

export async function getStaticProps() {
  const initialSessionsData = await getSessionsSegment();
  const popularSessions = await getPopularSessions();
  return {
    props: {
      initialSessionsData,
      popularSessions,
    },
  };
}

const Portfolio = ({ initialSessionsData, popularSessions }) => {
  let popularSessionsCopy = JSON.parse(JSON.stringify(popularSessions));

  popularSessionsCopy?.sort((a, b) => a?.main?.order - b?.main?.order);

  const popularSessionSlugsArr = popularSessions.map((item) => item.slug);
  const filteredInitialSessionNodes = initialSessionsData.nodes.filter(
    (item) => !popularSessionSlugsArr.includes(item.slug)
  );

  const [sessions, setSessions] = useState({
    nodes: [...popularSessionsCopy, ...filteredInitialSessionNodes],
    pageInfo: initialSessionsData.pageInfo,
  });

  // console.log('seSSions: ', sessions);
  // console.log('popularSessions: ', popularSessions);

  return (
    <Layout>
      <NewContainer>
        <StandardHeaderSection
          subtitle="Portfolio "
          title="Stories"
          text="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. "
        />
        <div className={styles.main}>
          <div className={styles.wrapper}>
            {sessions.nodes.map((item) => {
              return (
                <ArticlePreview
                  key={item.slug}
                  imgNode={item.featuredImage.node}
                  categories={item?.sessionConfigs?.sessionType?.nodes ?? []}
                  date={item.date}
                  title={item.title}
                  link={`/session/${item.slug}`}
                />
              );
            })}
          </div>
          <LoadMoreSessionsBtn
            sessions={sessions}
            setSessions={setSessions}
            popularSessionSlugsArr={popularSessionSlugsArr}
          />
        </div>
      </NewContainer>
    </Layout>
  );
};

export default Portfolio;
