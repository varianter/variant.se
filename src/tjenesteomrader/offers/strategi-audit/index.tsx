import { colorPairs } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import { useState } from 'react';

const StrategiAudit = () => {
  const [_, setMenuVisible] = useState(false);
  const color = colorPairs.secondary1.tint![0];

  return (
    <div style={{ position: 'relative' }}>
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
