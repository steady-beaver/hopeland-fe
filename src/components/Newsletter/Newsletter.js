import RightArrowBtn from '@/components/RightArrowBtn/RightArrowBtn';
import { useState } from 'react';
import styles from './Newsletter.module.scss';
import { useSnackbar } from 'notistack';

const Newsletter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/mailerlite', {
        method: "POST",
        body: JSON.stringify({
          email
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      enqueueSnackbar('Subscription successful!', { variant: 'success' });
      setEmail("")
    } catch (error) {
      console.error('Error subscribing:', error);
      enqueueSnackbar('Subscription failed. Please try again.', { variant: 'error' });
    }
  }

  return (
    <>
      <form
        method="post"
        action=""
        target="_blank"
        onSubmit={(e) => handleSubmit(e)}
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
            disabled={!email}
            className={styles.sendBtn}
          />
        </div>
      </form>
    </>
  );
};

export default Newsletter;
