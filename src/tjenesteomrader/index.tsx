import digitalTjenesteBlob from './images/indexBlobs/digitalTjeneste.svg';
import serviceBlob from './images/indexBlobs/strategi.svg';
import datadrevet from './images/indexBlobs/datadrevet.svg';
import kultur from './images/indexBlobs/kultur.svg';
import Entrance from './components/entrance/entrance';
import { colorPairs } from '@variant/profile/lib/colors';

import style from './tjenesteomrader.module.css';
import { Heading2 } from '@components/heading';

const Tjenesteomrader = () => {
  return (
    <section className={style.tjenesteomrader}>
      <Heading2 id="tjenesteomrader" className={style.title}>
        Våra Tjänsteområden
      </Heading2>
      <p className={style.tjenesteomrader__ingress}>
        På Variant vill vi bidra till största möjliga förändring till det bättre
        för våra kunder, för människor och för samhället. Vi vill ha ett
        holistiskt tänk för att koda, designa och ge råd inom tre definierade
        kärnområden: Digital tjänst- och produktutveckling, Datadriven
        organisation, Strategi och Kultur. 👇🏻
      </p>

      <div className={style.tjenesteomrader__content}>
        <Entrance
          blobPath={digitalTjenesteBlob}
          ServiceName={'Digital tjänst- och produktutveckling'}
          serviceText={
            'Utveckling av digitala produkter och tjänster är kärnan i Variants leveranser. Med oss i teamet får du tillgång till best practice och erfarna experter som hjälper dig att lyckas.'
          }
          colorPair={colorPairs.primary}
          urlPath={'digitalTjeneste'}
        />
        <Entrance
          blobPath={serviceBlob}
          ServiceName={'Strategi'}
          serviceText={
            'Små och stora organisatoriska vägval kräver tydliga målbilder och strategier. Och strategier som inte bara blir en pappersprodukt, utan du vet hur du ska agera på. Läs mer om hur Variant kan hjälpa din organisation att göra dessa val färre, enklare och mer hållbara.'
          }
          colorPair={colorPairs.secondary1}
          urlPath={'strategi'}
        />
        <Entrance
          blobPath={kultur}
          ServiceName={'Kultur'}
          serviceText={
            'Att etablera och leda egna team för digital tjänsteutveckling kräver fokus och kunskap inom kulturbyggande. Våra konsulter arbetar för en hållbar och hälsosam utvecklingskultur– från team till topp'
          }
          colorPair={colorPairs.primary}
          colorVariation={{ series: colorPairs.primary.tint!, colorLevel: 2 }}
          urlPath={'kultur'}
        />
      </div>
    </section>
  );
};

export default Tjenesteomrader;
