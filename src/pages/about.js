import Layout from '@/components/Layout';
import NewContainer from '@/components/NewContainer/NewContainer';
import AllThatMattersSection from '@/scenes/AllThatMattersSection/AllThatMattersSection';
import OldSchoolTimeline from '@/scenes/OldSchoolTimeline/OldSchoolTimeline';
import PersonalSection from '@/scenes/PersonalSection/PersonalSection';
import QuatroSectionVarB from '@/scenes/QuatroSectionVarB/QuatroSectionVarB';
import StandardHeaderSection from '@/scenes/StandardHeaderSection/StandardHeaderSection';
// import Episode from '@/scenes/TimelineSection/Episode';
// import TimelineSection from '@/scenes/TimelineSection/TimelineSection';
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
          title="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus."
          p1="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerissque netus."
          p2="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerissque netus."
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
