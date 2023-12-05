import { colorPairs } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import style from 'src/tjenesteomrader/shared/index.module.css';
import { useState } from 'react';

const ForverkligaIdeer = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const color = colorPairs.secondary2.shade![2];

  return (
    <div
      className={style.main}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      <HeaderBackground
        headerText={'Förverkliga dina idéer, värdeerbjudande och hypoteser'}
        colorPair={color}
        whiteMode={true}
        onVisibleChange={setMenuVisible}
        breadcrumbsType={'Digital'}
      />
    </div>
  );
};

export default ForverkligaIdeer;
