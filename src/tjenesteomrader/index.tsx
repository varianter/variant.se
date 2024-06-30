import digitalBlob from './images/indexBlobs/digital.svg';
import serviceBlob from './images/indexBlobs/strategi.svg';
import kultur from './images/indexBlobs/kultur.svg';
import Entrance from './components/entrance/entrance';
import { colorPairs } from '@variant/profile/lib/colors';

import style from './tjenesteomrader.module.css';
import { Heading2 } from '@components/heading';

const Tjenesteomrader = ({ showHeading = true }) => {
  return (
    <section className={style.tjenesteomrader}>
      {showHeading && (
        <Heading2 id="tjenesteomrader" className={style.title}>
          Våra Tjänsteområden
        </Heading2>
      )}
      <div className={style.tjenesteomrader__content}>
        <Entrance
          blobPath={digitalBlob}
          serviceName={'Digital produkt- och tjänsteutveckling'}
          buttonName={'Produkt- och tjänsteutveckling'}
          serviceText={
            'Utveckling av digitala produkter och tjänster är kärnan i Variants leveranser. Med våra utvecklare, lösningsarkitekter, designers och verksamhetsutvecklare i teamet får du tillgång till best practice och erfarna experter som hjälper dig att lyckas.'
          }
          colorPair={colorPairs.primary}
          urlPath={'digital'}
        />
        <Entrance
          blobPath={serviceBlob}
          serviceName={'Strategi och innovation'}
          serviceText={
            'Små och stora organisatoriska vägval kräver tydliga målbilder och strategier. Och strategier som inte bara blir en pappersprodukt, utan du vet hur du ska agera på. Läs mer om hur Variant kan hjälpa din organisation att göra dessa val färre, enklare och mer hållbara.'
          }
          colorPair={colorPairs.secondary1}
          urlPath={'strategi'}
        />
        <Entrance
          blobPath={kultur}
          serviceName={'Kultur och kommunikation'}
          serviceText={
            'Att etablera och leda egna team för digital tjänsteutveckling kräver fokus och kunskap inom kulturbyggande. Våra konsulter arbetar för en hållbar och hälsosam utvecklingskultur– från team till topp. Vi hjälper er att förmedla kultur, värderingar och värdeerbjudanden.'
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
