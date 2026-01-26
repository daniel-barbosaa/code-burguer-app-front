import React from 'react';
import { StyleSheetManager } from 'styled-components';

import HomeLogo from '../../assets/burger-home.png';
import { CategoryCarousel, OffersCarousel } from '../../components/index';
import { Container, HomeImg } from './style';

export function Home() {
  const filteredProps = [
    'isRTL',
    'verticalMode',
    'sliderPosition',
    'swipedSliderPosition',
    'isSwiping',
    'transitionMs',
    'tiltEasing',
    'outerSpacing',
    'active',
    'itemPosition',
  ];

  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo-da-home" />
      <StyleSheetManager
        shouldForwardProp={(prop) => !filteredProps.includes(prop)}
      >
        <CategoryCarousel />
        <OffersCarousel />
      </StyleSheetManager>
    </Container>
  );
}
