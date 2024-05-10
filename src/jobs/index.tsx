import Head from 'next/head';
import Layout from 'src/layout';

import { Heading2 } from '@components/heading';
import PageTitle from '@components/page-title';
import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile';
import { InferGetStaticPropsType, NextPage } from 'next';
import { getStaticProps } from 'pages/jobs';
import style from './index.module.css';
import { JobList } from './components/job-list';
import { useMediaQuery } from '../utils/use-media-query';

const JobsIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
}) => {
  const useResponsiveLayout = useMediaQuery(`(max-width: 990px)`) ?? true;

  return (
    <Layout>
      <div className={style.wrapper}>
        <Head>
          <meta
            property="og:url"
            content={'https://www.variant.se/jobs/'}
            key="og:url"
          />
          <meta
            property="og:title"
            content="Bli en variant! Se lediga tjänster i Stockholm."
            key="og:title"
          />
          <meta
            property="og:description"
            content="Välkommen till Variant. Vi är ett konsultföretag som lever för transperens, gillar människor med stor nyfikenhet och som prioriterar generositet. Vi vill arbeta med organisationer där teknik och design tillsammans skapar starka, hållbara lösningar."
            key="og:description"
          />
          <meta
            name="description"
            content="Välkommen till Variant. Vi är ett konsultföretag som lever för transperens, gillar människor med stor nyfikenhet och som prioriterar generositet. Vi vill arbeta med organisationer där teknik och design tillsammans skapar starka, hållbara lösningar."
            key="description"
          />
          <title>Variant - Lediga tjänster</title>
        </Head>
        <section className={style.jobs}>
          <PageTitle title="Bli en variant" />

          <article className={style.jobs__wrapper}>
            <div>
              <p>
                Välkommen till Variant. Vi är ett konsultföretag som lever för
                transperens, gillar människor med stor nyfikenhet och som
                prioriterar generositet. Vi vill arbeta med organisationer där
                teknik och design tillsammans skapar starka, hållbara lösningar.
                Vi erbjuder mer än schyssta villkor, bra lön samt möjlighet att
                arbeta på häftiga uppdrag tillsammans med engagerade kollegor.
                Vi tar transparensen till nya höjder, för vi tror att öppenhet
                inte kan skada. Tvärt om, skapar det samhörighet.
              </p>

              <p>
                För att kunna skapa bra lösningar behöver vi olika människor med
                olika perspektiv, olika erfarenheter och olika personligheter.
                Vi behöver bra människor med engagerade röster helt enkelt. Det
                kan betyda att vi behöver just dig.
              </p>

  
              <p>
                Kolla in vår{' '}
                <a href="https://handbook.variant.se" rel="noopeneer">
                  öppna handbok
                </a>{' '}
                om du vill se mer om vad vi står för.
              </p>
            </div>
            <div className={style.jobs__blob}>
              <BaseBlob
                seed="Variant"
                width={useResponsiveLayout ? 300 : 400}
                height={useResponsiveLayout ? 300 : 400}
                color={colors.colorPairs.secondary3.default.bg}
                imageProps={{
                  src: require('src/jobs/images/undraw_lynx.png'),
                }}
                alt="Kvinna som håller upp smartphone som visar kod"
              />
            </div>
          </article>
        </section>
        <section>
          <Heading2>Lediga tjänster</Heading2>
          <JobList listings={listings} />
        </section>
      </div>
    </Layout>
  );
};

export default JobsIndex;
