'use client';

import SendBtn from '@/components/SendBtn/SendBtn';
import { useState } from 'react';
import styles from './ContactForm.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useSnackbar } from 'notistack';

const Select = dynamic(() => import('react-select'), { ssr: false });

const sessionTypeOptions = [
  { value: '', label: 'Type of session' },
  { value: 'Couple', label: 'Couple session' },
  { value: 'Wedding', label: 'Wedding session' },
  { value: 'Elopement', label: 'Elopement session' },
  { value: 'Foreign', label: 'Sessions outside Portugal' },
];

const sourceOptions = [
  { value: '', label: 'Where did you find me' },
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Instagram', label: 'Instagram' },
  { value: 'Personal recommendation', label: 'Personal recommendation' },
];

const WEB_3_FORM_TOKEN = '2b7cd9f6-0d52-4fa0-860e-af45b090313c';

const ContactForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: '',
    source: '',
    email: '',
    phone: '',
    month: '',
    sessionType: '',
    clientInstagram: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({ ...formData, [name]: selectedOption.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formElement = e.target;
    const data = new FormData(formElement);
    data.append('access_key', WEB_3_FORM_TOKEN);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      enqueueSnackbar('Subscription successful!', { variant: 'success' });

      // Clear form
      setFormData({
        name: '',
        source: '',
        email: '',
        phone: '',
        month: '',
        sessionType: '',
        clientInstagram: '',
        message: '',
      });
    } catch (e) {
      console.error(e);
      enqueueSnackbar('Failed to submit form. Please try again later.', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-MAIL"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="PHONE"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <div>
          <input
            type="text"
            id="month"
            name="month"
            placeholder="MONTH"
            value={formData.month}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <Select
            options={sessionTypeOptions}
            name="sessionType"
            value={sessionTypeOptions.find(option => option.value === formData.sessionType)}
            placeholder="TYPE OF SESSION"
            onChange={(val) => handleSelectChange('sessionType', val)}
            unstyled
            classNamePrefix="CUSTOM"
            defaultValue=""
            styles={{
              container: (baseStyles) => ({
                ...baseStyles,
                background: 'pink',
                fontFamily: 'basic-sans',
                fontSize: '13px',
                fontWeight: '300',
                lineHeight: '16px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                width: '45%',
                '@media screen and (max-width: 800px)': {
                  width: '100%',
                },
              }),
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderBottom: `1px solid #140F0D`,
                paddingLeft: '4px',
                backgroundColor: state.isFocused ? '#F5EBE5' : '#E6DFD7',
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? '#e3d5ca' : '#F5EBE5',
                height: '36px',
                padding: '12px 4px',
              }),
            }}
            required
            isDisabled={loading}
          />
        </div>
        <div>
          <Select
            options={sourceOptions}
            name="source"
            value={sourceOptions.find(option => option.value === formData.source)}
            placeholder="WHERE DID YOU FIND ME"
            onChange={(val) => handleSelectChange('source', val)}
            unstyled
            classNamePrefix="CUSTOM"
            defaultValue=""
            styles={{
              container: (baseStyles) => ({
                ...baseStyles,
                background: 'pink',
                fontFamily: 'basic-sans',
                fontSize: '13px',
                fontWeight: '300',
                lineHeight: '16px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                width: '45%',
                '@media screen and (max-width: 800px)': {
                  width: '100%',
                },
              }),
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderBottom: `1px solid #140F0D`,
                paddingLeft: '4px',
                backgroundColor: state.isFocused ? '#F5EBE5' : '#E6DFD7',
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? '#e3d5ca' : '#F5EBE5',
                height: '36px',
                padding: '12px 4px',
              }),
            }}
            required
            isDisabled={loading}
          />
          <input
            type="text"
            id="clientInstagram"
            name="clientInstagram"
            placeholder="YOUR INSTAGRAM PROFILE"
            value={formData.clientInstagram}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="MESSAGE*"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            disabled={loading}
          ></textarea>
        </div>
        <div className={styles.controls}>
          <SendBtn type="submit" disabled={loading}>
            <span className="textXS bold uppercase letterSpacing">{loading ? 'Sending...' : 'Send'}</span>
          </SendBtn>
          <span className="textXS">
            By sending the message you agree to our{' '}
            <Link href="/privacy-policy" className={styles.policy}>
              privacy policy.
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
