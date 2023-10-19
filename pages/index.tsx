import PageTitle from '@components/page-title';
import { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import Arrow from 'src/components/arrow';
import { EmployeeTile } from 'src/employees';
import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';
import JobListingItem from 'src/jobs/list-item';
import { getFileListingData } from 'src/jobs/utils/getListings';
import Layout from 'src/layout';
import style from 'src/stockholm/stockholm.module.css';
import { and } from 'src/utils/css';
import Tjenesteomrader from 'src/tjenesteomrader';

const stockholmBlobUrl = require('src/stockholm/assets/stokontor.png');
export function StockholmInfoBlock() {
  return (
    <div className={style.infoBlock}>
      <img
        className={style.infoBlock__blob}
        src={stockholmBlobUrl}
        alt="Kulturhuset i Stockholm"
      />

      <h2 className={style.infoBlock__title}>
        <Link href="/stockholm">
          <a className={style.infoBlock__link}>
            <span className={style.infoBlock__text}>
              Ny variant i Stockholm
            </span>
            <Arrow className={style.infoBlock__arrow} color="standard__white" />
          </a>
        </Link>
      </h2>
    </div>
  );
}

const Stockholm: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
  employees,
}) => {
  const [firstEmployee, secondEmployee] = employees;

  return (
    <Layout homepage>
      <div>
        <div className={style.wrapper}>
          <div className={style.content}>
            <img
              className={style.stockholmBlob}
              src={stockholmBlobUrl}
              alt="Bryggen i Bergen"
            />

            <header className={style.intro}>
              <PageTitle
                title="Hej 👋 det är vi som är Variant!"
                element="h2"
              />
            </header>
            <p className="lead">
            Vi vet att digitala satsningar inte ska ta sin utgångspunkt i designskisser, kod eller infrastruktur, utan i samarbete och viljan att skapa positiv förändring. 
            Vi tror att tech, design och strategi samarbetar som bäst när vi är kreativa, öppna och tillsammans formar förändring! 
            </p>
            <p>Där finns vi, en ny Variant av digital byrå som är generös, transparent och med stor lärglädje! Från Trondheim till Stockholm &ndash; vi är +100 utvecklare, designers och strateger som står redo att samarbeta med nya kunder och kollegor.</p>
            <p>
              Läs mer om oss och våra värderingar i{' '}
              <a
                href="https://handbook.variant.se"
                title="Håndboken til Variant"
              >
                vår öppna handbok
              </a>
              .
            </p>
          </div>

          <div className={and(style['content--block'])}>
            <Tjenesteomrader />
          </div>

          <div
            className={and(
              style.content,
              style['content--block'],
              style['content--map']
            )}
          >
            <h3 className="fancy">Vilka är Variant?</h3>

            <p className={and('lead', style.map__text__lead)}>
              Vår vision är att skapa förtroende, transparens och jämlikhet i
              europeiska företag. Variant grundades i Trondheim och har nu
              kontor i Norges tre största städer.
            </p>

            <p className={and('first', style.map__text__first)}>
            Vi är totalt +100 engagerade kollegor i Norge och Sverige. Vi söker efter de bästa utvecklarna och designers som delar våra värderingar och som går igång på att skapa ett bättre digitalt avtryck.
            </p>

            <img
              className={style.mapImage}
              src="/illustrations/map-norway-sweeden.png"
              alt="Karta över kontor i Trondheim, Bergen, Oslo och Stockholm."
            />

            <p className={style.map__text__second}>
              Målet är att bygga upp en organisation där värdeskapande design och utveckling skapar en strategisk fördel för våra kunder. Vi vill inte komma till våra kunder och endast vara experten, utan jobba tillsammans och hjälpa till att bygga upp kunskap och oberoende hos kunden. Vi vill dela med oss av vår kunskap, så att vi kan ta till oss andras kunskap. Det är så vi växer!
            </p>

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
              Är det något du undrar över? Ta kontakt med någon av oss så
              snackar vi!
            </p>
          </div>

          <div
            className={and(
              style.content,
              style['content--block'],
              style['content--employees']
            )}
          >
            {firstEmployee && <EmployeeTile employee={firstEmployee} />}
            {secondEmployee && <EmployeeTile employee={secondEmployee} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stockholm;

export const getStaticProps = async () => {
  try {
    const listings = await getFileListingData('stockholm');
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
