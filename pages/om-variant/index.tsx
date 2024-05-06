import Layout from 'src/layout';
import Head from 'next/head';
import style from './om-variant.module.css';
import PageTitle from '@components/page-title';
import Tjenesteomrader from 'src/tjenesteomrader';
import { useMediaQuery } from '../../src/utils/use-media-query';

const omVariantBlobUrl = require('src/stockholm/assets/lisa_and_david.png');

const OmVariant = () => {
  const useResponsiveLayout = useMediaQuery(`(max-width: 990px)`) ?? true;

  return (
    <Layout>
      <div className={style.wrapper}>
        <Head>
          <meta
            property="og:url"
            content={'https://www.variant.se/om-variant/'}
            key="og:url"
          />
          <meta
            property="og:title"
            content="Vilka är Variant? Läs mer om oss."
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
          <title>Variant - Om Variant</title>
        </Head>

        <header className={style['om-variant__header']}>
          <div>
            <PageTitle title="Vilka är Variant?" />
            <p className={'lead'}>
              Vår vision är att skapa förtroende, transparens och jämlikhet i
              europeiska företag. Variant grundades i Trondheim 2018, i Sverige har vi kontor i Stockholm och Göteborg.
            </p>
          </div>
          <img
            src={omVariantBlobUrl}
            width={useResponsiveLayout ? 300 : 400}
            height={useResponsiveLayout ? 300 : 400}
            alt="En bild på två anställda på Variant"
          />
        </header>
        <section>
          <div className={style['om-variant__map-container']}>
            <p className={style['om-variant__map-text']}>
              Vi är totalt +100 engagerade kollegor i Norge och Sverige. Vi
              söker efter de bästa utvecklarna och designers som delar våra
              värderingar och som går igång på att skapa ett bättre digitalt
              avtryck. 
              
              Vi vill inte komma till våra kunder och endast vara experten, utan
              jobba tillsammans och hjälpa till att bygga upp kunskap och
              oberoende hos kunden. Vi vill dela med oss av vår kunskap, så att
              vi kan ta till oss andras kunskap. Det är så vi växer!
            </p>

            <img
              className={style['om-variant__map']}
              src="/illustrations/map-norway-sweden.png"
              alt="Karta över kontor i Trondheim, Bergen, Oslo och Stockholm."
            />
          </div>
        </section>
        <Tjenesteomrader />
      </div>
    </Layout>
  );
};

export default OmVariant;
