import React, { memo } from 'react'
import { SectionHeaderWrapper } from '@/views/home/cpns/home-section-v1/style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
import PropTypes from 'prop-types'

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
HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}
export default HomeSectionV1
