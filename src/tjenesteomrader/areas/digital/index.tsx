import EmojiList from '../../components/emojiList/emojiList';
import HeaderBackground from '../../images/headerBackground/headerBackground';
import style from 'src/tjenesteomrader/shared/index.module.css';
import TwoRows from '../../components/twoRows/twoRows';
import BlobText from '../../components/blobText/blobText';
import Head from 'next/head';
import { allColors, colorPairs } from '@variant/profile/lib/colors';

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

const Digital = () => {
  const blobColor = allColors.primary__shade2;
  const [_, setMenuVisible] = useState(false);
  const color = colorPairs.primary.shade![3];

  return (
    <div className={style.main} style={{ position: 'relative' }}>
      <Head>
        <title>Digital produkt- och tjänsteutveckling</title>
      </Head>

      <div className={style.tjenesteomrade}>
        <HeaderBackground
          colorPair={color}
          headerText="Digital produkt- och tjänsteutveckling"
          onVisibleChange={setMenuVisible}
        />

        <div className={style.tjenesteomrade__columns}>
          <TwoRows>
            <BlobText
              color={blobColor}
              text={['"Ja, det var en bra idé, vi gör det!"']}
              blobNr={0}
            />
            <EmojiList
              listItems={[
                [
                  '💡',
                  'Ok, nu har du en klar bild av hur lösningen ska vara. Men låt oss ta ett steg tillbaka...',
                ],
              ]}
              inverted={false}
            />
          </TwoRows>

          <img className={style.downArrow} src={down1} alt="down arrow 1" />
          <img className={style.sideArrow} src={right1} alt="right arrow 1" />

          <TwoRows>
            <EmojiList
              listItems={[
                [
                  '🎯',
                  'Vi vill ta reda på verksamhetens de övergripande målen och strategin för att uppnå dem.',
                ],
              ]}
              inverted={true}
            />
            <BlobText
              color={blobColor}
              text={[
                'Vem är målgruppen?',
                'Vilka olika användargrupper finns inom din målgrupp?',
                'Vad vill du hjälpa användaren med och vad behöver användaren hjälp med?',
                'Vad händer när du hjälper användaren med detta?',
                'Vilket resultat eller värde uppnås och vem uppnår det?',
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
                'Varför är det viktigt att förverkliga just denna idé?',
                'Vad händer om du inte gör det?',
                'Så varför inte testa detta istället:',
              ]}
              blobNr={2}
            />
          </TwoRows>

          <img className={style.downArrow} src={down3} alt="down arrow 3" />
          <img className={style.sideArrow} src={right2} alt="right arrow 1" />

          <TwoRows>
            <EmojiList
              listItems={[
                ['🧑‍💻', 'Funktionella skisser & prototyper'],
                ['🤓', 'Tekniska experiment'],
              ]}
              inverted={true}
            />
            <BlobText
              color={blobColor}
              text={[
                'Involvering av användare i idéfasen',
                'Skissa lösning för att få snabb feedback',
                'Gör en MVP och testa den i vardagen',
              ]}
              blobNr={3}
            />
          </TwoRows>

          <img className={style.downArrow} src={down4} alt="down arrow 4" />
          <img className={style.sideArrow} src={left2} alt="left arrow 2" />

          <TwoRows>
            <BlobText
              color={blobColor}
              text={['Mät och lär dig genom insikter och data  ']}
              blobNr={4}
            />
            <EmojiList
              listItems={[
                [
                  '🧑‍🔬',
                  'Det viktigaste lärandet sker när lösningen används som en naturlig del av vardagen.  ',
                ],
              ]}
              inverted={false}
            />
          </TwoRows>
        </div>
      </div>
    </div>
  );
};

export default Digital;
