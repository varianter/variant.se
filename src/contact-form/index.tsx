import style from './contact-form.module.css';
import React from 'react';
import { EmployeeTile } from '../employees';
import { EmployeeItem } from '../employees/types';

interface contactFormProps {
  employees?: EmployeeItem[];
  lessMargin?: boolean;
}

export const ContactForm = ({ employees }: contactFormProps) => {
  const [firstEmployee, secondEmployee] = employees || [];

  return (
    <div className={style.contactForm__container}>
      <h2 className={style.formHeading}>Kontakta oss</h2>
      <p>
        Ta kontakt med oss om du vill veta mer eller har några funderingar kring
        Variant och vad vi erbjuder.
      </p>

      {employees && (
        <div className={style.contactForm__contacts}>
          {firstEmployee && <EmployeeTile employee={firstEmployee} />}
          {secondEmployee && <EmployeeTile employee={secondEmployee} />}
        </div>
      )}
    </div>
  );
};
