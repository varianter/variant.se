import style from 'src/tjenesteomrader/shared/bottomText.module.css';
import Divider from '../images/divider/divider';
import Footer from '../images/footer/footer';
import { offerPath, OfferProps } from './utils/offerTypes';
import { sanitize } from 'isomorphic-dompurify';
import { ContactForm } from '../../contact-form';
import OfferGallery from '../offer-gallery';
import { and } from '../../utils/css';
import HeaderBackground from '../images/headerBackground/headerBackground';
import { colorPairs } from '@variant/profile/lib/colors';
import { useState } from 'react';
import { offers } from '../offer-gallery/offers';

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
  const [_, setMenuVisible] = useState(false);
  const pageInfo = offers.find(({ name }) => name === props.page);
  const categories = {
    strategi: 'strategi',
    digital: 'digital',
    kultur: 'kultur',
  };
  const color =
    pageInfo?.category === categories.strategi
      ? colorPairs.secondary1.tint![0]
      : pageInfo?.category === categories.digital
        ? colorPairs.secondary2.shade![2]
        : colorPairs.secondary3.shade![1];

  if (pageInfo) {
    return (
      <div style={{ position: 'relative' }}>
        <HeaderBackground
          headerText={pageInfo.heading}
          colorPair={color}
          whiteMode={true}
          onVisibleChange={setMenuVisible}
          breadcrumbsType={
            pageInfo.category.charAt(0).toUpperCase() +
            pageInfo.category.slice(1)
          }
        />
      </div>
    );
  } else return null;
};
