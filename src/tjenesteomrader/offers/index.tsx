import style from 'src/tjenesteomrader/shared/bottomText.module.css';
import Divider from '../images/divider/divider';
import Footer from '../images/footer/footer';
import Tillvaxt from './tillvaxt';
import { offerPath, OfferProps } from './utils/offerTypes';
import { sanitize } from 'isomorphic-dompurify';
import { ContactForm } from '../../contact-form';
import OfferGallery from '../offer-gallery';
import ForverkligaIdeer from './forverkliga-ideer';
import ValideraIdeer from './validera-ideer';
import Tillganglighetsgranskning from './tillganglighetsgranskning';
import Anvandningstester from './anvandningstester';
import AiStrategi from './ai-strategi';
import Innovation from './innovation';
import StrategiAudit from './strategi-audit';
import { and } from '../../utils/css';
import KommunikationVarumarke from './kommunikation-varumarke';
import KulturellGranskning from './kulturell-granskning';

const Offer = (prop: OfferProps) => {
  const sanitizedHtmlContent = sanitize(prop.fileContents);
  return (
    <div className={style.main}>
      <SubPage page={prop.name} />
      <div className={style.bottomText__content_divider}>
        <Divider />
      </div>
      <div
        className={and(
          style.bottomText,
          style['bottomText__offer-text-container'],
        )}
      >
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }} />
      </div>
      <div className={style['bottomText__service-area-width']}>
        <ContactForm lessMargin />
      </div>
      <OfferGallery
        selectedArea={prop.category}
        hideHeading
        showLessOffers
        pageName={prop.name}
      />
      <Footer color={`#${prop.color}`} />
    </div>
  );
};

export default Offer;

type SubPageProps = (typeof offerPath)[number];

const SubPage = (props: { page: SubPageProps }) => {
  const page = props.page;
  if (page === 'tillvaxt') return <Tillvaxt />;
  if (page === 'forverkliga-ideer') return <ForverkligaIdeer />;
  if (page === 'validera-ideer') return <ValideraIdeer />;
  if (page === 'tillganglighetsgranskning')
    return <Tillganglighetsgranskning />;
  if (page === 'anvandningstester') return <Anvandningstester />;
  if (page === 'ai-strategi') return <AiStrategi />;
  if (page === 'innovation') return <Innovation />;
  if (page === 'strategi-audit') return <StrategiAudit />;
  if (page === 'kommunikation-varumarke') return <KommunikationVarumarke />;
  if (page === 'kulturell-granskning') return <KulturellGranskning />;
  return null;
};
