import { colorPairs } from '@variant/profile/lib/colors';
import HeaderBackground from 'src/tjenesteomrader/images/headerBackground/headerBackground';
import { useState } from 'react';

const KulturellGranskning = () => {
  const [_, setMenuVisible] = useState(false);
  const color = colorPairs.secondary3.shade![1];

  return (
    <div style={{ position: 'relative' }}>
      <HeaderBackground
        headerText={'Kulturell granskning'}
        colorPair={color}
        whiteMode={true}
        onVisibleChange={setMenuVisible}
        breadcrumbsType={'Kultur'}
      />
    </div>
  );
};

export default KulturellGranskning;
