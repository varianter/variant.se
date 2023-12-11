import { colorPairs } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import { useState } from 'react';

const ValideraIdeer = () => {
  const [_, setMenuVisible] = useState(false);
  const color = colorPairs.secondary2.shade![2];

  return (
    <div style={{ position: 'relative' }}>
      <HeaderBackground
        headerText={'Validera idéer och koncept utifrån kundupplevelse'}
        colorPair={color}
        whiteMode={true}
        onVisibleChange={setMenuVisible}
        breadcrumbsType={'Digital'}
      />
    </div>
  );
};

export default ValideraIdeer;
