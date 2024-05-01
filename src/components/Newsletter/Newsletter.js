import RightArrowBtn from '@/components/RightArrowBtn/RightArrowBtn';
import { useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <>
      <form
        method="post"
        action=""
        target="_blank"
      // onSubmit={(e) => {
      //   console.log(e);
      //   setEmail('');
      // }}
      >
        <div className={styles.wrapper}>
          <input
            name=""
            type="email"
            id="newsletter"
            placeholder="E-MAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={` textXS`}
            required
          />
          <RightArrowBtn
            type="submit"
            // onClick={() => console.log(email)}
            disabled={!email}
            className={styles.sendBtn}
          />
        </div>
      </form>
    </>
  );
};

export default Newsletter;
