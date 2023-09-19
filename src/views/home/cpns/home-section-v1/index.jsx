import React, { memo } from 'react'
import { SectionHeaderWrapper } from '@/views/home/cpns/home-section-v1/style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionHeaderWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth="25%" />
      <SectionFooter />
    </SectionHeaderWrapper>
  )
})

export default HomeSectionV1
