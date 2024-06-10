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
    revalidate: 60,
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

  return (
    <Layout>
      <NewContainer>
        <StandardHeaderSection
          subtitle="Portfolio "
          title="Stories"
          text="Explore my portfolio filled with enchanting wedding photography. Specializing in couples, weddings, and elopement sessions in breathtaking destinations. I craft stunning images that beautifully narrate your love story."
        />
        <div className={styles.main}>
          <div className={styles.wrapper}>
            {sessions.nodes.map((item) => {
              return (
                <ArticlePreview
                  key={item.slug}
                  imgNode={item.featuredImage.node}
                  categories={item?.main.type?.nodes ?? []}
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
