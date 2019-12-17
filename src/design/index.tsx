import { Global, css } from '@emotion/core'
import reset from '../lib/reset'

export { media } from './responsive'

export function getSystemFonts() {
  return [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ]
}

export const Fonts = {
  display: ['Kanit', 'SF Pro Display', ...getSystemFonts()].join(', '),
  body: getSystemFonts().join(', ')
}

const TH_UNICODE_RANGE = 'U+0E00–U+0E7F'

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      @font-face {
        font-family: 'Kanit';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/Kanit-Regular.woff2') format('woff2');
        unicode-range: ${TH_UNICODE_RANGE};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      span,
      b,
      u,
      i,
      div {
        cursor: default;
        margin: 0;
      }

      a {
        text-decoration: none;
        cursor: pointer;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${Fonts.display};
      }

      ::selection,
      ::-webkit-selection {
        background-color: #79ffe1;
      }

      body {
        font-family: ${Fonts.body};
        font-display: swap;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent !important;
        width: 100%;
        background-color: white;
      }

      ul {
        text-align: start;
        list-style-position: inside;
      }
    `}
  />
)

export const theme = {
  fonts: {
    body: Fonts.body,
    heading: Fonts.display,
    monospace: 'Menlo, monospace'
  }
}

export const overlay = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`
