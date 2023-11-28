import style from './contact-form.module.css';
// import React, { SyntheticEvent, useState } from 'react';
import React from 'react';
import { EmployeeTile } from '../employees';
import { EmployeeItem } from '../employees/types';

interface contactFormProps {
  employees?: EmployeeItem[];
  lessMargin?: boolean;
}

export const ContactForm = ({
  employees, // lessMargin = false,
}: contactFormProps) => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   phone: '',
  //   message: '',
  // });
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [firstEmployee, secondEmployee] = employees || [];

  // const handleChange = (
  //   event:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>,
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  // const handleOnSubmit = async (
  //   event: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  // ) => {
  //   event.preventDefault();
  //   showSuccessMessage && setShowSuccessMessage(false);
  //   showErrorMessage && setShowErrorMessage(false);
  //
  //   const response = await fetch('/api/send-email', {
  //     method: 'POST',
  //     body: JSON.stringify(formData),
  //   });
  //   if (!response.ok) {
  //     setShowErrorMessage(true);
  //     throw new Error('Error sending email');
  //   }
  //   const data = await response.json();
  //   setFormData({
  //     email: '',
  //     phone: '',
  //     message: '',
  //   });
  //   setShowSuccessMessage(true);
  //   console.log(data.message);
  // };

  return (
    <div className={style.contactForm__container}>
      <h2 className={style.formHeading}>Kontakta oss</h2>
      <p>
        Ta kontakt med oss om du vill veta mer eller har några funderingar kring
        Variant och vad vi erbjuder.
      </p>
      {/*<form*/}
      {/*  className={style.contactForm__form}*/}
      {/*  method="POST"*/}
      {/*  onSubmit={handleOnSubmit}*/}
      {/*>*/}
      {/*  <div className={style.contactForm__contentContainer}>*/}
      {/*    <div*/}
      {/*      className={`${*/}
      {/*        lessMargin*/}
      {/*          ? style['contactForm__less-margin']*/}
      {/*          : style.contactForm__contactDetailsContainer*/}
      {/*      }`}*/}
      {/*    >*/}
      {/*      <label htmlFor="email">E-postadress</label>*/}
      {/*      <input*/}
      {/*        type="email"*/}
      {/*        id="email"*/}
      {/*        name="email"*/}
      {/*        value={formData.email}*/}
      {/*        placeholder="Fyll i din E-postadress"*/}
      {/*        onChange={handleChange}*/}
      {/*        required*/}
      {/*      />*/}

      {/*      <label htmlFor="phone">Telefonnummer (frivilligt)</label>*/}
      {/*      <input*/}
      {/*        type="tel"*/}
      {/*        id="phone"*/}
      {/*        name="phone"*/}
      {/*        value={formData.phone}*/}
      {/*        pattern="\+[0-9]{2}[0-9]{2}[0-9]{3}[0-9]{4}"*/}
      {/*        placeholder="+46"*/}
      {/*        onChange={handleChange}*/}
      {/*      />*/}
      {/*    </div>*/}

      {/*    <div>*/}
      {/*      <label htmlFor="message">Ditt meddelande</label>*/}
      {/*      <textarea*/}
      {/*        id="message   "*/}
      {/*        name="message"*/}
      {/*        value={formData.message}*/}
      {/*        rows={8}*/}
      {/*        cols={40}*/}
      {/*        placeholder="Skriv här"*/}
      {/*        onChange={handleChange}*/}
      {/*        required*/}
      {/*      ></textarea>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <input type="submit" value="Skicka" />*/}
      {/*  {showSuccessMessage && <p>Hurra det gick bra!</p>}*/}
      {/*  {showErrorMessage && <p>Det gick inte så bra :(</p>}*/}
      {/*</form>*/}

      {employees && (
        <div className={style.contactForm__contacts}>
          {firstEmployee && <EmployeeTile employee={firstEmployee} />}
          {secondEmployee && <EmployeeTile employee={secondEmployee} />}
        </div>
      )}
    </div>
  );
};
