import React from 'react'
import styled from '@emotion/styled'

import { FeaturedCard } from './Card'
import { TUCMC } from './Logo'
import { media } from '../design'
import { scrollToInside, scrollToSchedule } from './Nav/Common'

const Wrapper = styled.div`
  max-width: 100%;
  color: white;
  text-align: center;
  background-color: black;
  overflow-y: hidden;
  padding-top: 24px;
  padding-bottom: 24px;
`

const FeaturedSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 48px;
`

const FeaturedSlider = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-column-gap: 24px;
  grid-auto-flow: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::before {
    content: '';
    width: 10px;
  }

  ::after {
    content: '';
    width: 10px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ${media('TABLET')} {
    grid-column-gap: 12px;
  }
`

const DiagBottom = styled.div`
  border-style: solid;
  border-width: 50px 100vw 0 0;
  border-color: black #1c1e28 transparent transparent;
`

const Title = styled.h1`
  font-size: 48px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  svg {
    margin-left: 24px;
    fill: grey;
    transition: fill 1s;

    :hover {
      fill: #fff;
    }

    :first-of-type {
      margin-left: 0px;
    }
  }
`

const Data = [
  {
    title: 'ซุ้มชมรม',
    src: '/assets/img/banner1',
    link: scrollToInside
  },
  {
    title: 'ซุ้มสายการเรียน',
    src: '/assets/img/banner5',
    link: scrollToInside
  },
  {
    title: 'การแข่งขัน',
    src: '/assets/img/banner4',
    link: scrollToInside
  },
  {
    title: 'TRIAMTALK',
    src: '/assets/img/banner3',
    link: 'https://www.facebook.com/triamtalk/'
  },
  {
    title: 'การแสดงจากชมรมต่าง ๆ',
    src: '/assets/img/banner2',
    link: scrollToSchedule
  }
]

export const Featured = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Title>Featuring</Title>
        <FeaturedSliderWrapper>
          <FeaturedSlider>
            {Data.map(val => {
              if (typeof val.link === 'string') {
                return (
                  <a href={val.link}>
                    <FeaturedCard
                      width={280}
                      height={240}
                      bordered
                      title={val.title}
                      imgSrc={val.src}
                    />
                  </a>
                )
              } else {
                return (
                  <a onClick={val.link}>
                    <FeaturedCard
                      width={280}
                      height={240}
                      bordered
                      title={val.title}
                      imgSrc={val.src}
                    />
                  </a>
                )
              }
            })}
          </FeaturedSlider>
        </FeaturedSliderWrapper>
        <LogoWrapper>
          <TUCMC />
        </LogoWrapper>
      </Wrapper>
      <DiagBottom />
    </React.Fragment>
  )
}
