import Link from 'next/link';
import Layout from '@/components/Layout';

import styles from '@/styles/pages/Error.module.scss';

export default function Custom404() {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p className={styles.errorCode}>404</p>
      <p className={styles.errorMessage}>The page you were looking for could not be found.</p>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </Layout>
  );
}

// Next.js method to ensure a static page gets rendered
export async function getStaticProps() {
  return {
    props: {},
  };
}
