import style from '../index.module.css';
import { JobListingItem } from './job-listing-item';
import React from 'react';
import { Listing } from '../utils/getListings';

interface JobListProps {
  listings: Listing[];
}

export const JobList = ({ listings }: JobListProps) => {
  if (!listings?.length) {
    return (
      <p className={style.omVariant__wrapper__p}>
        Inga lediga tjänster just nu.
      </p>
    );
  } else {
    return (
      <>
        {listings.map((item: Listing) => (
          <JobListingItem
            item={item}
            key={`${item.name}_${item.title}_${item.location}`}
          />
        ))}
      </>
    );
  }
};
