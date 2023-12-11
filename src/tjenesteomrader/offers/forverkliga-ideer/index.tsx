import { colorPairs } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import { useState } from 'react';

const ForverkligaIdeer = () => {
  const [_, setMenuVisible] = useState(false);
  const color = colorPairs.secondary2.shade![2];

  return (
    <div style={{ position: 'relative' }}>
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
