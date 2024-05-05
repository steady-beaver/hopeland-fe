import Layout from '@/components/Layout';
import NewContainer from '@/components/NewContainer/NewContainer';
import AllThatMattersSection from '@/scenes/AllThatMattersSection/AllThatMattersSection';
import OldSchoolTimeline from '@/scenes/OldSchoolTimeline/OldSchoolTimeline';
import PersonalSection from '@/scenes/PersonalSection/PersonalSection';
import QuatroSectionVarB from '@/scenes/QuatroSectionVarB/QuatroSectionVarB';
import StandardHeaderSection from '@/scenes/StandardHeaderSection/StandardHeaderSection';
import VideoSection from '@/scenes/VideoSection/VideoSection';

export default function Home() {
  return (
    <Layout>
      <NewContainer>
        <StandardHeaderSection
          subtitle="About me"
          title="Hi, I'm Ola"
          text="A photographer who adores coffee, traveling, nature, sunsets, draws inspiration from music, loves yoga, and can spend hours gazing at the ocean."
        />

        <VideoSection url="https://www.youtube.com/watch?v=ALqe9SiF78I" />

        <OldSchoolTimeline />

        <QuatroSectionVarB
          header="Portugal"
          title=" My Haven of Tranquility and Inspiration."
          p1="I chose this place as my home because I adore the tranquility it offers, the stunning nature, the warmth of its people, and the endless kilometers of breathtaking views, not just along the coast but everywhere you turn."
          p2="Springtime in Portugal is especially magical, with an explosion of colors that never fails to amaze me. There's just so much that Portugal has to offer, and it's a place where I find true peace and inspiration."
          srcPrimary="/pictures/portugal-1.jpg"
          srcSecondary="/pictures/portugal-2.jpg"
        />

        <AllThatMattersSection
          primaryImg="/pictures/matters/matters-2.jpg"
          secondaryImg="/pictures/matters/matters-1.jpg"
          thirdImg="/pictures/matters/matters-3.jpg"
        />

        <PersonalSection />

      </NewContainer>
    </Layout>
  );
}
