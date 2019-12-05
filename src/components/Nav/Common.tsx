import styled from '@emotion/styled'
import { media, Fonts } from '../../design'
import { Moon } from 'react-feather'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: auto;
  max-width: 1000px;
  padding-top: 24px;

  ${media('IPAD_PRO')} {
    max-width: 800px;
  }

  ${media('TABLET')} {
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
  }
`

export const Link = styled.a`
  color: #000;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  color: #515151;
  font-weight: 700;
  font-family: ${Fonts.display};
  transition: color 1s;

  :last-child {
    margin-right: 0px;
  }

  :hover {
    color: black;
  }

  ${media('TABLET')} {
    margin-right: 0px;
    margin-bottom: 12px;
    text-align: end;

    :last-child {
      margin-bottom: 0px;
    }
  }
`

export const Logo = styled.div`
  flex-grow: 1;
`

export const Title = styled.h1`
  font-weight: 800;
  font-size: 16px;
  z-index: 9999;
`

export const DarkModeMoon = styled(Moon)`
  cursor: pointer;
`