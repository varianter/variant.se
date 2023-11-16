import React from 'react';
import { ButtonNextLink } from '@components/button';
import { and } from '../../utils/css';
import style from '../index.module.css';

export type JobListingItem = {
  name: string;
  title: string;
  location: string;
};
export type JobListingItemProps = {
  item: JobListingItem;
};
export const JobListingItem = ({ item }: JobListingItemProps) => {
  console.log('i joblistingitem');
  console.log(item);
  return (
    <section className={style.job__listing__container}>
      <div>
        <h3 className={and(style.job__title, 'fancy')}>{item.title}</h3>
        <span>{item.location}</span>
      </div>
      <ButtonNextLink href={`/jobs/${item.name}`} className={style.widerButton}>
        Läs hela annonsen
      </ButtonNextLink>
    </section>
  );
};
