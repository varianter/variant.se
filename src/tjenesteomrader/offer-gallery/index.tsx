import { ButtonNextLink } from '@components/button';
import { offers } from './offers';
import style from './offer-gallery.module.css';
import { colorPairs } from '@variant/profile/lib/colors';

interface OffersProps {
  selectedArea: string;
  hideHeading?: boolean;
  showLessOffers?: boolean;
  pageName?: string;
}

const OfferGallery = ({
  selectedArea,
  hideHeading = false,
  showLessOffers = false,
  pageName = '',
}: OffersProps) => {
  let offersToShow;
  const filteredOffers = offers.filter(
    (offer) => offer.category === selectedArea,
  );

  if (showLessOffers) {
    const shorterOfferArray = filteredOffers.filter(
      (offer) => offer.name !== pageName,
    );
    offersToShow =
      shorterOfferArray.length > 3
        ? shorterOfferArray.slice(0, 3)
        : shorterOfferArray;
  } else {
    offersToShow = filteredOffers;
  }

  return (
    <div className={style['offers__wrapper']}>
      {!hideHeading && <h2>Erbjudanden</h2>}
      <div className={style['offers__container']}>
        {offersToShow.map((offer, index) => {
          return (
            <div key={offer.heading} className={style['offers__offer']}>
              <img src={offer.blob} alt="" />
              <h4>{offer.heading}</h4>
              <p>{offer.text}</p>
              <ButtonNextLink
                href={offer.link}
                colorPair={
                  index % 2 === 0 ? colorPairs.primary : colorPairs.secondary1
                }
              >
                {offer.buttonText ? offer.buttonText : offer.heading}
              </ButtonNextLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfferGallery;
