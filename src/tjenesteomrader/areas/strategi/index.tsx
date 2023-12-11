import BlobText from '../../components/blobText/blobText';
import EmojiList from '../../components/emojiList/emojiList';
import TwoRows from '../../components/twoRows/twoRows';
import HeaderBackground from '../../images/headerBackground/headerBackground';
import style from 'src/tjenesteomrader/shared/index.module.css';
import { allColors, colorPairs } from '@variant/profile/lib/colors';
import Head from 'next/head';

// Arrows
import down1 from 'src/tjenesteomrader/images/arrows/down1.svg';
import down2 from 'src/tjenesteomrader/images/arrows/down2.svg';
import down3 from 'src/tjenesteomrader/images/arrows/down3.svg';
import down4 from 'src/tjenesteomrader/images/arrows/down4.svg';
import right1 from 'src/tjenesteomrader/images/arrows/right1.svg';
import right2 from 'src/tjenesteomrader/images/arrows/right2.svg';
import left1 from 'src/tjenesteomrader/images/arrows/left1.svg';
import left2 from 'src/tjenesteomrader/images/arrows/left2.svg';
import { useState } from 'react';
import { and } from '../../../utils/css';

const Strategi = () => {
  const blobColor = allColors.secondary1__shade2;
  const [_, setMenuVisible] = useState(false);
  const color = colorPairs.secondary1.shade![3];

  return (
    <div className={style.main} style={{ position: 'relative' }}>
      <Head>
        <title>Strategi</title>
      </Head>

      <div
        style={{
          color: allColors.standard__white,
          backgroundColor: allColors.secondary1__shade3,
        }}
      >
        <HeaderBackground
          colorPair={color}
          headerText="Strategi"
          onVisibleChange={setMenuVisible}
        />

        <div
          className={and(
            style.tjenesteomrade__columns,
            style['tjenesteomrade__strategy-padding-bottom'],
          )}
        >
          <TwoRows>
            <BlobText
              color={blobColor}
              text={[
                'Först tror man att det är uppenbart. Att alla känner till:',
              ]}
              blobNr={0}
            />

            <EmojiList
              listItems={[
                ['🛣', 'vägval och stora beslut'],
                ['📈', 'affärsplaner och budget'],
                ['🤝', 'nyanställning och organisatoriska förändringar'],
              ]}
              inverted={false}
            />
          </TwoRows>

          <img className={style.downArrow} src={down1} alt="down arrow 1" />
          <img className={style.sideArrow} src={right1} alt="right arrow 1" />

          <TwoRows>
            <div></div>
            <BlobText
              color={blobColor}
              text={[
                'Att alla beslut är förankrade och samordnade utifrån strategin',
              ]}
              blobNr={1}
            />
          </TwoRows>

          <img className={style.downArrow} src={down2} alt="down arrow 2" />
          <img className={style.sideArrow} src={left1} alt="left arrow 1" />

          <TwoRows>
            <BlobText
              color={blobColor}
              text={[
                'Vi tar för givet att hela organisationen tvärs över teamen arbetar mot...',
              ]}
              blobNr={2}
            />
            <EmojiList
              listItems={[['🏔', 'en gemensam övergripande målbild  ']]}
              inverted={false}
            />
          </TwoRows>

          <img className={style.downArrow} src={down3} alt="down arrow 3" />
          <img className={style.sideArrow} src={right2} alt="right arrow 2" />

          <TwoRows>
            <EmojiList
              listItems={[
                ['❤️', 'kundvärde'],
                ['💰', 'och affärsvärde'],
              ]}
              inverted={true}
            />

            <BlobText
              color={blobColor}
              text={[
                '...och att alla smarta människor löser alla sina uppgifter på rätt sätt, vid rätt tid.',
              ]}
              blobNr={3}
            />
          </TwoRows>

          <img className={style.downArrow} src={down4} alt="down arrow 4" />
          <img className={style.sideArrow} src={left2} alt="left arrow 2" />

          <TwoRows>
            <BlobText
              color={blobColor}
              text={[
                '… men samtidigt kommer kommer bergstoppen med alla deadlines närmare och närmare. Och hur var det egentligen med strategin nu igen?',
              ]}
              blobNr={4}
            />
          </TwoRows>
        </div>
      </div>
    </div>
  );
};

export default Strategi;
