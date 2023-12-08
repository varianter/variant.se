import { colorPairs } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import style from 'src/tjenesteomrader/shared/index.module.css';
import { useState } from 'react';

const StrategiAudit = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const color = colorPairs.secondary1.tint![0];

  return (
    <div
      className={style.main}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      <HeaderBackground
        headerText={'Innovationstrategi Audit'}
        colorPair={color}
        whiteMode={true}
        onVisibleChange={setMenuVisible}
        breadcrumbsType={'Strategi'}
      />
    </div>
  );
};

export default StrategiAudit;