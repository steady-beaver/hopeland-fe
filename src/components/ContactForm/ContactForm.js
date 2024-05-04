'use client';

import SendBtn from '@/components/SendBtn/SendBtn';
import { useState } from 'react';
import styles from './ContactForm.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic'

const Select = dynamic(() => import("react-select"), { ssr: false });

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

const ContactForm = () => {
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

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('submit');
    // Handle form submission here
    // console.log(formData);
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
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="PHONE"
            value={formData.phone}
            onChange={handleChange}
            required
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
          />
          <Select
            options={sessionTypeOptions}
            name="sessionType"
            value={formData.sessionType}
            placeholder="TYPE OF SESSION"
            onChange={(val) => handleChange({ target: { name: 'sessionType', value: val } })}
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
              control: (baseStyles, state) => {
                // console.log('STATE', state);
                return {
                  ...baseStyles,
                  borderBottom: `1px solid #140F0D`,
                  paddingLeft: '4px',
                  backgroundColor: state.isFocused ? '#F5EBE5' : '#E6DFD7',
                };
              },
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                // position: 'relative',
                // bottom: '-3px',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? '#e3d5ca' : '#F5EBE5',
                height: '36px',
                padding: '12px 4px',
              }),
            }}
            required
          />
        </div>
        <div>
          <Select
            options={sourceOptions}
            name="source"
            value={formData.source}
            placeholder="WHERE DID YOU FIND ME"
            onChange={(val) => handleChange({ target: { name: 'source', value: val } })}
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
              control: (baseStyles, state) => {
                // console.log('STATE', state);
                return {
                  ...baseStyles,
                  borderBottom: `1px solid #140F0D`,
                  paddingLeft: '4px',
                  backgroundColor: state.isFocused ? '#F5EBE5' : '#E6DFD7',
                };
              },
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                // position: 'relative',
                // bottom: '-3px',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? '#e3d5ca' : '#F5EBE5',
                height: '36px',
                padding: '12px 4px',
              }),
            }}
            required
          />
          <input
            type="text"
            id="clientInstagram"
            name="clientInstagram"
            placeholder="YOUR INSTAGRAM PROFILE"
            value={formData.clientInstagram}
            onChange={handleChange}
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
          ></textarea>
        </div>
        <div className={styles.controls}>
          <SendBtn type="submit">
            <span className="textXS bold uppercase letterSpacing">Send</span>
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
