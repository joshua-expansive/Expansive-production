import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/soehne-breit-test-buch.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: soehne-breit-test-buch;
    src: url(${font});
  }
  html {
    font-family: soehne-breit-test-buch, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
`;

export default Typography;
