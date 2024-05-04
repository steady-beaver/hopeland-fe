import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import Layout from '@/components/Layout';
import NewContainer from '@/components/NewContainer/NewContainer';
import NewContainerPatch from '@/components/NewContainerPatch/NewContainerPatch';
import ParagraphsWP from '@/components/ParagraphsWP/ParagraphsWP';
import { getSessionSlugs, getSingleSession } from '@/lib/ola-blog';
import GallerySection from '@/scenes/GallerySection/GallerySection';
import OctagonSection from '@/scenes/OctagonSection/OctagonSection';
import PersonalSection from '@/scenes/PersonalSection/PersonalSection';
import SquareSection from '@/scenes/SquareSection/SquareSection';
import StandardHeaderSection from '@/scenes/StandardHeaderSection/StandardHeaderSection';
import TestimonialSectionNew from '@/scenes/TestimonialSectionNew/TestimonialSectionNew';
import styles from './Session.module.scss';

export const getStaticPaths = async () => {
  const slugsArr = await getSessionSlugs();

  return {
    paths: slugsArr.map((item) => ({
      params: {
        sessionSlug: item.slug,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const session = await getSingleSession(params.sessionSlug);
  return {
    props: {
      session,
    },
    revalidate: 60,
  };
};

const Session = ({ session }) => {
  return (
    <Layout>
      <NewContainer>
        <NewContainerPatch>
          <div className={styles.main}>
            <StandardHeaderSection
              subtitle={session?.main?.sessionType?.nodes?.[0]?.name ?? 'Category'}
              title={session?.title}
              text={session?.main?.description}
            />

            {session.featuredImage && (
              <FullWidthImage imageNode={session.featuredImage.node} className={styles.topImage} />
            )}

            <OctagonSection data={session.octagon} />

            {session.middleBigImage.middleFullWidthImage && (
              <FullWidthImage imageNode={session.middleBigImage.middleFullWidthImage.node} />
            )}

            {session?.testimonial?.testimonialHeading && (
              <TestimonialSectionNew
                title={session?.testimonial?.testimonialHeading}
                content={<ParagraphsWP longText={session?.testimonial?.content} />}
                name={session?.testimonial?.name}
              />
            )}

            <SquareSection data={session.square} />

            {session.lastBigImage.lastFullWidthImage && (
              <FullWidthImage imageNode={session.lastBigImage.lastFullWidthImage.node} />
            )}
          </div>

          <GallerySection data={session.gallery} />

          <PersonalSection />
        </NewContainerPatch>
      </NewContainer>
    </Layout>
  );
};

export default Session;
