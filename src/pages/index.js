import Layout from '@/components/Layout';
import NewContainer from '@/components/NewContainer/NewContainer';
import { getPostsSegment } from '@/lib/ola-blog';
import IntroductionSection from '@/scenes/IntroductionSection/IntroductionSection';
import JournalSection from '@/scenes/JournalSection/JournalSection';
import ServiceSection from '@/scenes/ServiceSection/ServiceSection';
import SliderSection from '@/scenes/SliderSection/SliderSection';
// import VideoSection from '@/scenes/VideoSection/VideoSection';

import { getPopularSessions } from '@/lib/ola-blog';
import HandwritedFullWidth from '@/components/HandwritedFullWidth/HandwritedFullWidth';

export async function getStaticProps() {
  const popularSessions = await getPopularSessions();
  const initialSegment = await getPostsSegment();
  return {
    props: {
      recentThreePosts: [initialSegment?.nodes?.[0], initialSegment?.nodes?.[1], initialSegment?.nodes?.[2]],
      imageStorageBase: process.env.WORDPRESS_UPLOADS_URL,
      popularSessions,
    },
  };
}

export default function Home({ recentThreePosts, imageStorageBase, popularSessions }) {
  return (
    <Layout>
      {/* <SliderSection popularSessions={popularSessions} /> */}

      <NewContainer>
        <HandwritedFullWidth text="Emotional storytelling photography" />
        {/* <ServiceSection /> */}

        {/* <VideoSection url="https://www.youtube.com/watch?v=mrobdVDb8B4" /> */}

        {/* <JournalSection recentThreePosts={recentThreePosts} imgBase={imageStorageBase} /> */}

        {/* <IntroductionSection /> */}
      </NewContainer>
    </Layout>
  );
}
