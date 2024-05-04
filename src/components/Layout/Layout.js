import Footer from '@/components/Footer/Footer';
import Main from '@/components/Main';
import Nav from '@/components/Nav';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Nav />

      <Main>{children}</Main>

      <Footer />
    </div>
  );
};

export default Layout;
