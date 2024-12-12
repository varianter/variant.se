import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from 'src/layout';
import { getStaticProps } from 'pages/linkoping';
import Link from 'next/link';
import Arrow from 'src/components/arrow';
import { and } from 'src/utils/css';
import { EmployeeTile } from 'src/employees';
import BlobLink from '@components/blob-link';

import style from './linkoping.module.css';
import { ButtonNextLink } from '@components/button';

const linkopingBlobUrl = require('./assets/domkyrka.png');
const bygningUrl = require('./assets/torget.png');

export function LinkopingInfoBlock() {
  return (
    <div className={style.infoBlock}>
      <img
        className={style.infoBlock__blob}
        src={linkopingBlobUrl}
        alt="Breiavatnet i natten"
      />

      <h2 className={style.infoBlock__title}>
        <Link href="/linkoping" className={style.infoBlock__link}>
          <span className={style.infoBlock__text}>Ny variant i Linköping</span>
          <Arrow className={style.infoBlock__arrow} color="standard__white" />
        </Link>
      </h2>
    </div>
  );
}

const Linkoping: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
  employees,
}) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>En ny Variant i Linköping</title>
          <meta
            property="og:url"
            content={'https://www.variant.se/linkoping'}
            key="og:url"
          />
          <meta
            property="og:title"
            content="En ny Variant i Linköping. Vi vill att du ska utveckla Linköping tillsammans med oss."
            key="og:title"
          />
          <meta
            property="og:description"
            content="Detta har vi väntat länge på. Vi vill att du ska utveckla Linköping tillsammans med oss – och skapa nästa generations företagskultur där medarbetarnas fulla potential tas tillvara med tillit och transparens."
            key="og:description"
          />
          <meta
            name="description"
            content="Detta har vi väntat länge på. Vi vill att du ska utveckla Linköping tillsammans med oss – och skapa nästa generations företagskultur där medarbetarnas fulla potential tas tillvara med tillit och transparens."
            key="description"
          />
          <meta
            property="og:image"
            content="https://www.variant.se/images/og-vd-linkoping.png"
            key="og:image"
          />
        </Head>
        <div className={style.wrapper}>
          <div className={style.content}>
            <img
              className={style.linkopingBlob}
              src={linkopingBlobUrl}
              alt="Linköping Domkyrka - Av Katlinke - Eget arbete, CC BY-SA 4.0"
            />

            <header className={style.intro}>
              <h2 className={style.title}>Hej, en ny Variant i Linköping!</h2>
            </header>

            <p className="lead">
              I 2024 blev Usify en del av Variant. Nu behöver fler vi folk, riktigt duktiga människor – 
              många människor! Vill du vara med och forma ett annorlunda konsultföretag?
            </p>
            <p>
              Läs mer om oss och våra värderingar i {" "}
              <a
                href="https://handbook.variant.se"
                title="Handboken till Variant"
              >
                vår öppna handbok
              </a>
              
            </p>
          </div>

          <div
            className={and(
              style.content,
              style['content--block'],
              style['content--map'],
            )}
          >
            <h3 className="fancy">Så, varför Linköping?</h3>

            <div className={style.contentNarrow}>
              <p>
              
                Den korta versionen: Linköping är en dynamisk stad med ett 
                spännande näringsliv, innovativa teknologimiljöer och starka 
                universitet. Dessutom – här finns fantastiska människor som vi 
                vill jobba med.
              </p>

              <p>
                Den längre versionen: Sedan Variant grundades 2018 har vi haft en otrolig tillväxt. 
                Variant-konceptet har blivit varmt mottaget och vi har till och med fått höra att vi 
                inspirerat andra. Vi vill därför sprida våra värderingar och tankesätt till fler platser. 
                Hållbarhet har alltid varit centralt för oss, och vi tror att just Linköping är en 
                perfekt plats för att arbeta med de riktigt viktiga hållbarhetsutmaningarna.
              </p>
            </div>

            <div className={style.contentSplit}>
              <img src={bygningUrl} alt="Av Katlinke - Eget arbete, CC BY-SA 4.0" />

              <div>
                <p>              
                  Vi har lärt oss mycket från uppstarten i Stockholm och Göteborg som vi tar med oss till 
                  Östergötland. Ju fler kontor vi har, desto fler perspektiv och röster 
                  får vi in i Variant-gemenskapen. Linköping kommer att ge oss ännu fler insikter 
                  och bidra till att utveckla det växande Variant-familjen.
                </p>

                <p>
                Om du vill veta mer kan du{" "}
                  <a
                    href="https://blog.variant.no/link%C3%B6ping-nu-kommer-vi-a6b897b07730"
                    title="Linköping, nu kommer vi!"
                  >
                    läsa David og Odd Mortens bloggpost om varför Linköping.
                  </a>
                  .
                </p>
              </div>
            </div>

            <div
              className={and(
                style.contentNarrow,
                style['contentNarrow--marginTop'],
              )}
            >
              <h3 className={and('fancy')}>Ny VD</h3>
              <p>
                Variant Linköping söker en handlingskraftig VD som vill leda vår tillväxtresa. 
                Vi är i dag ett litet team på 7-8 personer med fokus på design, men vi har stora ambitioner. 
                Din uppgift blir att utveckla och växa företaget till ett mångsidigt och starkt team på över 
                30 personer, med spetskompetens inom både design och utveckling.
              </p>

              <p>
                För att lyckas i rollen behöver du ha ett starkt lokalt nätverk och en förmåga att 
                skapa och vårda kundrelationer. Du är trygg med att sälja våra tjänster och ser värdet i att också 
                arbeta nära våra kunder i konkreta uppdrag. Vi söker en VD som både kan inspirera internt och representera 
                Variant externt – en person som trivs lika bra med strategiska beslut som med att kavla upp 
                ärmarna och bidra i operativa leveranser.
              </p>
            </div>

            <BlobLink
              text="Läs om våra visioner för Linköping!"
              href="linkoping/vyer"
              size={220}
              className={style.timelineButton}
            />
          </div>

          {listings.length > 0 && (
            <div className={style.content}>
              <h3 className="fancy">Låter det intressant?</h3>

              {listings.map((item) => (
                <JobListingItem
                  item={item}
                  key={`${item.name}_${item.title}_${item.location}`}
                />
              ))}
            </div>
          )}

          <div className={and(style.content, style['content--block'])}>
            <p className={and('lead', 'fancy', style.footerLine)}>
              Är det något du undrar över? Det enklaste är att ta ett 
              snack med oss om du är nyfiken (det gillar vi!)!
            </p>
          </div>

          <div
            className={and(
              style.content,
              style['content--block'],
              style['content--employees'],
            )}
          >
            {employees.map((employee) => (
              <EmployeeTile key={employee.email} employee={employee} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

/**
 * Hacky workaround to get title .
 * New web page incoming: "flytta læll™"
 * @param mail string
 * @returns string
 */
function mailToTitle(mail: string) {
  if (mail.startsWith('david.dinka@')) {
    return 'VD Variant Sverige';
  }
  
  return undefined;
}

export default Linkoping;

type JobItem = {
  name: string;
  title: string;
  location: string;
  locations: Array<Location>;
};

type Location = {
  city: string;
  state: string;
  country: string;
  street: string;
};
type JobListingItemProps = {
  item: JobItem;
};
function JobListingItem({ item }: JobListingItemProps) {
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
      <ButtonNextLink
        href={`/jobs/${item.name}`}
        aria-label={`Se på stillingen ${item.title} ${item.location}`}
      >
        Se på stillingen
      </ButtonNextLink>
    </section>
  );
}
