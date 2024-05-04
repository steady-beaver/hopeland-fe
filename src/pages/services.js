import Layout from '@/components/Layout';
import NewContainer from '@/components/NewContainer/NewContainer';
import FaqSection from '@/scenes/FaqSection/FaqSection';
import PersonalSection from '@/scenes/PersonalSection/PersonalSection';
import QuatroSectionVarA from '@/scenes/QuatroSectionVarA/QuatroSectionVarA';
import QuatroSectionVarB from '@/scenes/QuatroSectionVarB/QuatroSectionVarB';
import StandardHeaderSection from '@/scenes/StandardHeaderSection/StandardHeaderSection';
import TestimonialSection from '@/scenes/TestimonialSection/TestimonialSection';
import TravelSection from '@/scenes/TravelSection/TravelSection';
import TripleSection from '@/scenes/TripleSection/TripleSection';
import VideoSection from '@/scenes/VideoSection/VideoSection';

export default function Home() {
  return (
    <Layout>
      <NewContainer>
        <StandardHeaderSection
          subtitle="Services"
          title="For you"
          text="Capture love everywhere - from couple shoots to big weddings or elopements. Let's make memories in Portugal or any corner of the world!"
        />

        <QuatroSectionVarA
          id="coupleSection"
          header="Couple"
          title="Let's have a photoshoot that's all about your love story."
          p1="I'll make sure it's relaxed and welcoming, so you can easily be yourselves. You'll get real smiles and genuine moments of closeness. We'll capture what makes your relationship special in every photo."
          p2="We're focusing on Portugal's beautiful scenes, but I'm all about catching those quick, magic moments wherever they happen. Ready to make memories with real laughter, love, and everything that goes unsaid between you? Let's start this fun adventure."
          srcPrimary="/pictures/service_couple_9x16.jpg"
          srcSecondary="/pictures/service_couple_1x1.jpg"
        />

        <VideoSection url="https://www.youtube.com/watch?v=gW6pa6bnyVU" />

        <TripleSection photoSrc="/pictures/service-wedding.jpg" id="weddingSection" />

        <TestimonialSection />

        <QuatroSectionVarB
          id="elopementSection"
          header="Elopement"
          title="There's something incredibly special about elopement weddings that resonates deeply with me."
          p1="The intimate setting, connection between the couple, and the unique stories waiting to be told – these moments are what I cherish the most as a photographer. My services for elopement are limitless. Whether you desire to have me by your side capturing every moment from dawn till dusk, or you prefer focusing on just the pivotal moments."
          p2="I understand the beauty in the simplicity and the significance of these intimate exchanges, and I aim to preserve them in the most authentic way possible."
          srcPrimary="/pictures/service-elopement-1.jpg"
          srcSecondary="/pictures/service-elopement-2.jpg"
        />

        <TravelSection primaryImg="/pictures/travel/travel-1.jpg" secondaryImg="/pictures/travel/travel-2.jpg" />

        <FaqSection />

        <PersonalSection />
      </NewContainer>
    </Layout>
  );
}
