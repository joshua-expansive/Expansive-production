import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteWrapper = styled.div`
  max-width: 1500px;
  margin: auto;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <SiteWrapper>
        <Nav />
        {children}
      </SiteWrapper>
    </div>
  );
}
