import { ButtonNextLink } from '@components/button';
import { offers } from './offers';
import style from './offers-gallery.module.css';
import { colorPairs } from '@variant/profile/lib/colors';

interface OffersProps {
  selectedArea: string;
}

const OfferGallery = ({ selectedArea }: OffersProps) => {
  const offersToShow = offers.filter(
    (offer) => offer.category === selectedArea,
  );

  return (
    <div className={style['offers__wrapper']}>
      <h2>Erbjudanden</h2>
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
