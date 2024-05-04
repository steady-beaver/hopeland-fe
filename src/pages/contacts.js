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
          <InfoPoint title="time frame">
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc
            ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </InfoPoint>
          <InfoPoint title="confirmation">
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc
            ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </InfoPoint>
          <InfoPoint title="contract">
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc
            ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </InfoPoint>
        </div>
      </NewContainer>
    </Layout>
  );
}
