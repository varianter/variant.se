import React from 'react';
import { ButtonNextLink } from '@components/button';
import { and } from '../../utils/css';
import style from '../index.module.css';

export type JobListingItem = {
  name: string;
  title: string;
  location: string;
  locations: { city: string }[];
};
export type JobListingItemProps = {
  item: JobListingItem;
};
export const JobListingItem = ({ item }: JobListingItemProps) => {
  return (
    <section className={style.job__listing__container}>
      <div>
        <h3 className={and(style.job__title, 'fancy')}>{item.title}</h3>
        <span>
          {item.locations
            .map((location) => {
              return location.city;
            })
            .join(', ')}
        </span>
      </div>
      <ButtonNextLink href={`/jobs/${item.name}`} className={style.widerButton}>
        Läs hela annonsen
      </ButtonNextLink>
    </section>
  );
};
