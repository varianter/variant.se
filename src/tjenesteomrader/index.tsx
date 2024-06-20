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
            'Utveckling av digitala produkter och tjänster är kärnan i Variants leveranser. 
            Med våra utvecklare, lösningsarkitekter, designers och verksamhetsutvecklare 
        i teamet får du tillgång till best practice och erfarna experter som hjälper dig att lyckas.'
          }
          colorPair={colorPairs.primary}
          urlPath={'digital'}
        />
        <Entrance
          blobPath={serviceBlob}
          serviceName={'Strategi och innovation'}
          serviceText={
            'En strategi får inte bli en pappersprodukt i en låda. Läs mer om hur Variant kan hjälpa din 
            organisation att få strategin att bli en levande del i din verksamhet.  Vi hjälper er med ert 
        innovationsarbete från ax till limpa – från det strategiska till implementationen.'
          }
          colorPair={colorPairs.secondary1}
          urlPath={'strategi'}
        />
        <Entrance
          blobPath={kultur}
          serviceName={'Kultur och kommunikation'}
          serviceText={
            'Att etablera och leda egna team för digital tjänsteutveckling kräver 
            fokus och kunskap inom kulturbyggande. Kultur och kommunikation går hand i hand. 
        För att kunna förmedla kultur, värderingar och värderbjudanden både internt och externt
        krävs målinriktad kommunikation och  engagerande dialog. Vi hjälper er med detta.'
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
