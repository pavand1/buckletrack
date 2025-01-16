import styles from './GetQuote.module.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loading from 'react-fullscreen-loading';
import {mockData} from '../common/cp-banner/CpBanner_data';
const GetQuote = ({open, setOpen}) => {
    const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [error, setError] = useState('');
  const handleSendEmail = (e) => {
    e.preventDefault();
    if(!name || !email || !message || !phone1) {
      setError('All fields are required, except the secondary phone number');
      return;
    }
    setIsLoading(true);
    emailjs
      .sendForm('service_f5bl48g', 'template_agxy0jb', form.current, {
        publicKey: 'UwYDiQ1gdS6YNU1C-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setError('Our Expert will get in touch with you shortly');
          setName('');
          setEmail('');
          setMessage('');
          setPhone1('');
          setPhone2('');
          setIsLoading(false);
          setTimeout(() => {
            setError('');
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false);
        },
      );
  };
    return (
        <div className={styles.getQuote}>
            <div className={styles.right}>
          <form className={styles.form} ref={form} onSubmit={handleSendEmail} style={{position: 'relative'}}>
          <h2 className={styles.heading}>{mockData.form.heading}</h2>
          <div className={styles.formGroup}>
            <input
                    type={"text"}
                    id={"name"}
                    name={"name"}
                    placeholder={"Name"}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
            </div>
            <div className={styles.formGroup}>
            <input
                    type={"email"}
                    id={"email"}
                    name={"email"}
                    placeholder={"email"}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
            </div>
            <div className={styles.formGroup}>
            <input
                    type={"text"}
                    id={"phone1"}
                    name={"phone"}
                    placeholder={"primary phone number"}
                    required
                    value={phone1}
                    onChange={(e) => setPhone1(e.target.value)}
                  />
            </div>
            <div className={styles.formGroup}>
            <input
                    type={"text"}
                    id={"phone2"}
                    name={"phone 2"}
                    placeholder={"secondary phone number"}
                    value={phone2}
                    onChange={(e) => setPhone2(e.target.value)}
                  />
            </div>
            <div className={styles.formGroup}>
            <textarea
                    id={"message"}
                    name={"message"}
                    placeholder={"message"}
                    rows="4"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
            </div>
            <button type="submit" className={styles.submitButton}>
              {mockData.form.submitButtonText}
            </button>
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>
        </div>
    )
}

export default GetQuote