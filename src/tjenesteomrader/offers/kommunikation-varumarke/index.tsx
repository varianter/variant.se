import { colorPairs } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import style from 'src/tjenesteomrader/shared/index.module.css';
import { useState } from 'react';

const KommunikationVarumarke = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const color = colorPairs.secondary3.shade![1];

  return (
    <div
      className={style.main}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      <HeaderBackground
        headerText={'Kommunikation och varumärke'}
        colorPair={color}
        whiteMode={true}
        onVisibleChange={setMenuVisible}
        breadcrumbsType={'Kultur'}
      />
    </div>
  );
};

export default KommunikationVarumarke;
