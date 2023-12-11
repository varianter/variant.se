import { colorPairs } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import { useState } from 'react';

const AiStrategi = () => {
  const [_, setMenuVisible] = useState(false);
  const color = colorPairs.secondary1.tint![0];

  return (
    <div style={{ position: 'relative' }}>
      <HeaderBackground
        headerText={'Kickstarta din AI-strategi'}
        colorPair={color}
        whiteMode={true}
        onVisibleChange={setMenuVisible}
        breadcrumbsType={'Strategi'}
      />
    </div>
  );
};

export default AiStrategi;
