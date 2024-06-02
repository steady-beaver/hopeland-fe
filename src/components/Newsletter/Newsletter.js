import RightArrowBtn from '@/components/RightArrowBtn/RightArrowBtn';
import { useState } from 'react';
import styles from './Newsletter.module.scss';
import { useSnackbar } from 'notistack';

const Newsletter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/mailerlite', {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      enqueueSnackbar('Subscription successful!', { variant: 'success' });
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      enqueueSnackbar('Subscription failed. Please try again.', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form method="post" action="" target="_blank" onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <input
            type="email"
            id="newsletter"
            placeholder="E-MAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="textXS"
            required
            disabled={loading}
          />
          <RightArrowBtn
            type="submit"
            disabled={!email || loading}
            className={styles.sendBtn}
          />
        </div>
      </form>
    </>
  );
};

export default Newsletter;
