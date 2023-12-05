import style from 'src/tjenesteomrader/shared/bottomText.module.css';
import Divider from '../images/divider/divider';
import Footer from '../images/footer/footer';
import Digital from './digital';
import Strategi from './strategi';
import Kultur from './kultur';
import {
  tjenesteomradePath,
  TjenesteomradeProps,
} from '../utils/tjenesteomradeTypes';
import { sanitize } from 'isomorphic-dompurify';
// import { ContactForm } from '../../contact-form';
import OfferGallery from '../offer-gallery';

const Areas = (prop: TjenesteomradeProps) => {
  const sanitizedHtmlContent = sanitize(prop.fileContents);
  return (
    <div>
      <SubPage page={prop.name} />
      <div className={style.bottomText__content_divider}>
        <Divider />
      </div>
      <div className={style.bottomText}>
        <div
          className={style.bottomText__content}
          dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
        />
      </div>
      <OfferGallery selectedArea={prop.name} />
      <div className={style['bottomText__service-area-width']}>
        {/*<ContactForm lessMargin />*/}
      </div>
      <Footer color={`#${prop.color}`} />
    </div>
  );
};

export default Areas;

type SubPageProps = (typeof tjenesteomradePath)[number];

const SubPage = (props: { page: SubPageProps }) => {
  const page = props.page;
  if (page === 'strategi') return <Strategi />;
  if (page === 'digital') return <Digital />;
  if (page === 'kultur') return <Kultur />;
  return null;
};
