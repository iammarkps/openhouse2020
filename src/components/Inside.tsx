import React from 'react'
import styled from '@emotion/styled'
import { Card } from './Card'
import { Link as DefaultLink } from './Nav/Common'
import { media } from '../design'
import { Wrapper } from './Wrapper'

const MenuWrapper = styled.div`
  display: flex;

  ${media('TABLET')} {
    flex-direction: column;
  }
`

const Link = styled(DefaultLink)`
  color: #d1d1d1;

  :hover {
    color: white;
  }

  ${media('TABLET')} {
    text-align: center !important;
    margin: 0;
  }
`

const CardWrapper = styled.div`
  margin-top: 24px;
  max-width: 100%;
`

const CardTitle = styled.h1`
  text-align: left;
`

export const Inside = () => (
  <Wrapper>
    <MenuWrapper>
      <Link>ชมรม</Link>
      <Link>สายการเรียน</Link>
      <Link>การแข่งขัน</Link>
    </MenuWrapper>
    <CardWrapper>
      <Card minHeight={400} width={600} curved padding bg="white">
        <CardTitle>ภายในงาน</CardTitle>
      </Card>
    </CardWrapper>
  </Wrapper>
)
