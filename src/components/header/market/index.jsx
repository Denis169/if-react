import React from 'react';
import styled from '@emotion/styled';

import google from '../../../assets/image/google-play-badge.svg';
import apple from '../../../assets/image/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917-1.svg';

const MarketSection = styled.div`
  display: flex;
  justify-content: center;
  & a{
    & img{
      padding-left: 8px;
      padding-right: 8px;
      margin-bottom: 120px;
    }
  }
`;

const Market = () => (
  <MarketSection>
    <a href="https://play.google.com/store">
      <img src={google} alt="Googleplay" />
    </a>
    <a href="https://www.apple.com/store">
      <img src={apple} alt="App Store" />
    </a>
  </MarketSection>
);

export default Market;
