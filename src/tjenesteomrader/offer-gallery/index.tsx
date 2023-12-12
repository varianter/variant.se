import { ButtonNextLink } from '@components/button';
import { offers } from './offers';
import style from './offer-gallery.module.css';
import { colorPairs } from '@variant/profile/lib/colors';
import shuffleArray from '../../utils/helpers';
import { useEffect, useMemo, useState } from 'react';

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
  const filteredOffers = useMemo(
    () => offers.filter((offer) => offer.category === selectedArea),
    [selectedArea],
  );
  const [shuffledOffers, setShuffledOffers] = useState(filteredOffers);

  useEffect(() => {
    if (showLessOffers) {
      const shuffledArray = shuffleArray(filteredOffers);
      setShuffledOffers(shuffledArray);
    }
  }, [showLessOffers, filteredOffers]);

  const getOffersToShow = () => {
    return showLessOffers
      ? shuffledOffers.filter((offer) => offer.name !== pageName).slice(0, 3)
      : filteredOffers || [];
  };

  const offersToShow = getOffersToShow();

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
