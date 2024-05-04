import Link from 'next/link';
import Layout from '@/components/Layout';

import styles from '@/styles/pages/Error.module.scss';

export default function Custom500() {
  return (
    <Layout>
      <h1>Internal Error</h1>
      <p className={styles.errorCode}>500</p>
      <p className={styles.errorMessage}>
        Uh oh, something went wrong. Please try refreshing the page or clearing site data. If the problem persists,
        reach out to let us know!
      </p>
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
