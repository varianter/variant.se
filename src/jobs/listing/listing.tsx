import React, { PropsWithChildren, useMemo } from 'react';

import PageTitle from '@components/page-title';
import MarkdownIt from 'markdown-it';
import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getStaticProps } from 'pages/jobs/[listing]';
import { ButtonLink } from 'src/components/button';
import { EmployeeItem } from 'src/employees/types';
import Layout from 'src/layout';
import style from './listings.module.css';
import { Heading3 } from '@components/heading';
import { formatTelephone } from 'src/utils/phone';
import { JobList } from '../components/job-list';
import { Listing } from 'src/jobs/utils/getListings';

interface ListingProps {
  listing: Listing & { contacts: EmployeeItem[] };
  listings: Listing[];
}

const Listing: NextPage<InferGetStaticPropsType<typeof getStaticProps>> =
  React.memo(function Listing({ listing, listings }: ListingProps) {
    const innerHtml = useMemo(() => {
      const md = new MarkdownIt({
        linkify: true,
        html: true,
        typographer: true,
      });
      return { __html: md.render(listing.content) };
    }, [listing.content]);

    const filteredListings = listings.filter(
      (item) => item.slug !== listing.slug,
    );

    return (
      <Layout title={`${listing.title} - ${listing.company_name}`}>
        <Head>
          <meta
            property="og:url"
            content={`https://www.variant.se/jobs/${listing.name}`}
            key="og:url"
          />
          {listing.meta_title && (
            <meta
              property="og:title"
              content={listing.meta_title}
              key="og:title"
            />
          )}
          {listing.meta_description && (
            <>
              <meta
                name="description"
                content={listing.meta_description}
                key="description"
              />
              <meta
                property="og:description"
                content={listing.meta_description}
                key="og:description"
              />
            </>
          )}
          {listing.meta_image && (
            <meta
              property="og:image"
              content={listing.meta_image}
              key="og:image"
            />
          )}
        </Head>
        <section className={style.jobArticle}>
          <div className={style.titleWrapper}>
            <PageTitle title={listing.h1_title} />
            <div className={style.button__top}>
              <ButtonLink
                href={listing.careers_apply_url ?? 'https://jobs.variant.se/'}
              >
                Sök jobbet
              </ButtonLink>
            </div>
          </div>
          <div>
            <article
              className={style.rendered__markdown__wrapper}
              dangerouslySetInnerHTML={innerHtml}
            />
            {!!listing.contacts.length && (
              <div className={style.contacts__layout}>
                {listing.contacts.map((c) => (
                  <ContactTile key={c.email} contact={c} />
                ))}
              </div>
            )}
          </div>
          <div className={style.button__bottom}>
            <ButtonLink
              href={listing.careers_apply_url ?? 'https://jobs.variant.se/'}
            >
              Sök jobbet
            </ButtonLink>
          </div>
          <div>
            <h3 className="fancy">Vi söker fler kollegor</h3>
            <JobList listings={filteredListings} />
          </div>
        </section>
      </Layout>
    );
  });

export const ContactTile = ({
  contact: { name, email, telephone, imageUrl },
}: PropsWithChildren<{ contact: EmployeeItem }>) => {
  return (
    <div className={style.contact}>
      <div className={style.contact__img}>
        <Image
          width={120}
          height={120}
          alt={`Bild på ${name}`}
          src={imageUrl}
          loading="lazy"
        />
      </div>

      <div className={style.contact__content}>
        <Heading3 styleLevel="4" className={style.contact__name}>
          {name}
        </Heading3>
        <a href={`mailto:${email}`} className={style.contact__type}>
          📬 {email}
        </a>
        {telephone && (
          <a href={`tel:${telephone}`} className={style.contact__type}>
            📞 {formatTelephone(telephone)}
          </a>
        )}
      </div>
    </div>
  );
};
export default Listing;
