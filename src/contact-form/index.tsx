import style from './contact-form.module.css';
import React, { SyntheticEvent, useState } from 'react';
import { EmployeeTile } from '../employees';
import { EmployeeItem } from '../employees/types';

interface contactFormProps {
  employees?: EmployeeItem[];
}

export const ContactForm = ({
                              employees,
                            }: contactFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [firstEmployee, secondEmployee] = employees || [];

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleOnSubmit = async (
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    event.preventDefault();
    showSuccessMessage && setShowSuccessMessage(false);
    showErrorMessage && setShowErrorMessage(false);

    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      setShowErrorMessage(true);
      throw new Error('Error sending email');
    }
    const data = await response.json();
    setFormData({
      email: '',
      phone: '',
      message: '',
    });
    setShowSuccessMessage(true);
    console.log(data.message);
  };

  return (
    <div className={style['contact-form__container']}>
      <h2 className={style['contact-form__heading']}>Kontakta oss</h2>
      <p>
        Ta kontakt med oss om du vill veta mer eller har några funderingar kring
        Variant och vad vi erbjuder.
      </p>
      <form
        className={style['contact-form__form']}
        method='POST'
        onSubmit={handleOnSubmit}
      >
        <div className={style['contact-form__content-container']}>
          <div className={style['contact-form__input-wrapper']}>
            <label htmlFor='email'>E-postadress</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              placeholder='Fyll i din E-postadress'
              onChange={handleChange}
              required
            />

            <label htmlFor='phone'>Telefonnummer (frivilligt)</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              pattern='\+[0-9]{2}[0-9]{2}[0-9]{3}[0-9]{4}'
              placeholder='+46'
              onChange={handleChange}
            />
          </div>

          <div className={style['contact-form__textarea-container']}>
            <label htmlFor='message'>Ditt meddelande</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              placeholder='Skriv här'
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={style['contact-form__checkbox-container']}>
          <input type='checkbox' id='gdpr' name='gdpr' required />
          <label htmlFor='gdpr'>
            Jag accepterar att Variant sparar mina kontaktuppgifter för att
            kunna kontakta mig.
          </label>
        </div>

        <input type='submit' value='Skicka' />
        {showSuccessMessage && (
          <p>Hurra det gick bra! Vi kontaktar dig inom ett par dagar.</p>
        )}
        {showErrorMessage && (
          <p>
            Något verkar ha gått fel! Kolla så att du fyllt i
            kontaktinformationen korrekt, eller försök igen om ett litet tag :)
          </p>
        )}
      </form>

      {employees && (
        <div className={style['contact-form__contacts']}>
          {firstEmployee && <EmployeeTile employee={firstEmployee} />}
          {secondEmployee && <EmployeeTile employee={secondEmployee} />}
        </div>
      )}
    </div>
  );
};
