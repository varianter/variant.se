import { ButtonNextLink, ColorVariations } from '@components/button';
import { Heading3 } from '@components/heading';
import { ColorSet } from '@variant/profile/lib/colors';
import style from './entrance.module.css';

type EntranceProps = {
  blobPath: string;
  serviceName: string;
  serviceText: string;
  colorPair: ColorSet;
  urlPath: string;
  colorVariation?: ColorVariations;
  buttonName?: string;
};

const Entrance = ({
  blobPath,
  serviceName,
  buttonName,
  serviceText,
  colorPair,
  colorVariation,
  urlPath,
}: EntranceProps) => {
  return (
    <article className={style.serviceArea}>
      <header className={style.serviceArea__top}>
        <img src={blobPath} alt={serviceName + ' blob'} />
        <Heading3 styleLevel="4">{serviceName}</Heading3>
      </header>
      <div className={style.serviceArea__bottom}>
        <p>{serviceText}</p>
        <ButtonNextLink
          colorPair={colorPair}
          colorVariation={colorVariation}
          href={`tjenesteomrader/${urlPath}`}
        >
          {buttonName ? buttonName : serviceName}
        </ButtonNextLink>
      </div>
    </article>
  );
};

export default Entrance;
