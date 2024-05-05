import ContactForm from '@/components/ContactForm/ContactForm';
import InfoPoint from '@/components/InfoPoint/InfoPoint';
import Layout from '@/components/Layout';
import NewContainer from '@/components/NewContainer/NewContainer';
import PersonalSectionExtended from '@/scenes/PersonalSectionExtended/PersonalSectionExtended';
import styles from '../styles/pages/Contacts.module.scss';

export default function Contacts() {
  return (
    <Layout>
      <NewContainer>
        <PersonalSectionExtended />
        <ContactForm />

        <div className={styles.infoContainer}>
          <InfoPoint title="How do you manage the prepayment for your work?">
            For photo sessions, a deposit of 50 euros is required to secure your booking. For wedding reservations, a deposit of 200 euros is required.
          </InfoPoint>
          <InfoPoint title="What are your travel fees?">
            For sessions within the Algarve region, there are no extra travel charges. However, for locations outside of the Algarve, travel fees are determined individually based on the location. Typically, this includes transportation costs and possibly one night&rsquo;s accommodation.
          </InfoPoint>
          <InfoPoint title="Can we meet before booking?">
            Absolutely! I love meeting with future couples. We can arrange to meet in person in Algarve or connect via Zoom or Google Meets. Another great idea is to get to know each other during a pre-wedding session.
          </InfoPoint>
        </div>
      </NewContainer>
    </Layout>
  );
}
