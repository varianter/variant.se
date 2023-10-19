import digitalBlob from './images/indexBlobs/digital.svg';
import serviceBlob from './images/indexBlobs/strategi.svg';
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
      På Variant vill vi bidra till största möjliga förändring till det bättre för våra kunder, för människor och för samhället. 
      Vi vill ha ett holistiskt tänk för att koda, designa och ge råd inom tre definierade kärnområden: Digital tjänst- och produktutveckling, 
      Strategi och innovation och Kultur och kommunikation. 👇🏻
      </p>

      <div className={style.tjenesteomrader__content}>
        <Entrance
          blobPath={digitalBlob}
          ServiceName={'Digital produkt- och tjänsteutveckling'}
          serviceText={
            'Utveckling av digitala produkter och tjänster är kärnan i Variants leveranser. Med våra utvecklare, lösningsarkitekter, designers och verksamhetsutvecklare i teamet får du tillgång till best practice och erfarna experter som hjälper dig att lyckas.'
          }
          colorPair={colorPairs.primary}
          urlPath={'digital'}
        />
        <Entrance
          blobPath={serviceBlob}
          ServiceName={'Strategi och innovation'}
          serviceText={
            'Små och stora organisatoriska vägval kräver tydliga målbilder och strategier. Och strategier som inte bara blir en pappersprodukt, utan du vet hur du ska agera på. Läs mer om hur Variant kan hjälpa din organisation att göra dessa val färre, enklare och mer hållbara. Vi hjälper er med ert innovationsarbete från ax till limpa – från det strategiska till implementationen.'
          }
          colorPair={colorPairs.secondary1}
          urlPath={'strategi'}
        />
        <Entrance
          blobPath={kultur}
          ServiceName={'Kultur och kommunikation'}
          serviceText={
            'Att etablera och leda egna team för digital tjänsteutveckling kräver fokus och kunskap inom kulturbyggande. Våra konsulter arbetar för en hållbar och hälsosam utvecklingskultur– från team till topp. Kultur och kommunikation går hand i hand. För att kunna förmedla kultur, värderingar och värderbjudanden både internt och externt krävs målinriktad kommunikation och  engagerande dialog. Vi hjälper er med detta.'
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
