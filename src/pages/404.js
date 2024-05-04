import Link from 'next/link';

import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Section from '@/components/Section';

import styles from 'styles/pages/Error.module.scss';

export default function Custom404() {
  return (
    <Layout>
      <Section>
        <Container className={styles.center}>
          <h1>Page Not Found</h1>
          <p className={styles.errorCode}>404</p>
          <p className={styles.errorMessage}>The page you were looking for could not be found.</p>
          <p>
            <Link href="/">Go back home</Link>
          </p>
        </Container>
      </Section>
    </Layout>
  );
}

// Next.js method to ensure a static page gets rendered
export async function getStaticProps() {
  return {
    props: {},
  };
}
