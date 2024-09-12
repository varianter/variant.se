import TitleStartPage from '@components/start-page-title';
import Layout from 'src/layout';
import style from './start-page.module.css';
import React from 'react';
import { ContactForm } from '../src/contact-form';
import { InferGetStaticPropsType, NextPage } from 'next';
import { getContactsByEmails } from '../src/employees/utils/getEmployeesList';
import { JobList } from '../src/jobs/components/job-list';
import { getFileListingData } from '../src/jobs/utils/getListings';
import Tjenesteomrader from 'src/tjenesteomrader';
import { useMediaQuery } from '../src/utils/use-media-query';

const stockholmBlobUrl = require('src/stockholm/assets/stokontor.png');
const Stockholm: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
  employees,
}) => {
  const useResponsiveLayout = useMediaQuery(`(max-width: 990px)`) ?? true;

  return (
    <Layout homepage>
      <div className={style.wrapper}>
        <div className={style['homepage__intro-container']}>
          {useResponsiveLayout && (
            <header>
              <TitleStartPage />
            </header>
          )}

          <img
            className={style['homepage__blob']}
            src={stockholmBlobUrl}
            alt="En bild på tre anställda på Variant"
          />

          {!useResponsiveLayout && (
            <header>
              <TitleStartPage />
            </header>
          )}

          <p className={style['homepage__lead']}>
            Vi vet att digitala satsningar inte ska ta sin utgångspunkt i
            designskisser, kod eller infrastruktur, utan i samarbete och viljan
            att skapa positiv förändring. Vi tror att tech, design och strategi
            samarbetar som bäst när vi är kreativa, öppna och tillsammans formar
            förändring!
          </p>
          <p className={style['homepage__bigger-paragraph-text']}>
            Där finns vi, en ny Variant av digital byrå som är generös,
            transparent och med stor lärglädje! Från Trondheim till Stockholm
            &ndash; vi är +100 utvecklare, designers och strateger som står redo
            att samarbeta med nya kunder och kollegor.
          </p>
          <p className={style['homepage__bigger-paragraph-text']}>
            Läs mer om oss och våra värderingar i{' '}
            <a href="https://handbook.variant.se" title="Håndboken til Variant">
              vår öppna handbok
            </a>
            .
          </p>
        </div>

        <Tjenesteomrader />
        <ContactForm employees={employees} />
        <h3 className="fancy">Vi söker fler kollegor</h3>
        <JobList listings={listings} />
      </div>
    </Layout>
  );
};

export default Stockholm;

export const getStaticProps = async () => {
  try {
    const listings = await getFileListingData();
    const employees = await getContactsByEmails([
      'david.dinka@variant.se',
      'sara.hernandez@variant.se',
    ]);

    return {
      props: { listings, employees },
      revalidate: 60 * 60,
    };
  } catch (e) {
    console.error(e);
    return {
      props: { listings: [], employees: [] },
      revalidate: 60 * 60,
    };
  }
};
