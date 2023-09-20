import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionV2Wrapper } from '@/views/home/cpns/home-section-v2/style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  // console.log(infoData)
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  // const tabNames = infoData.dest_address?.((item) => item.name)

  // const tabClickHandle = useCallback(function (index, name) {
  //   setName(name)
  // }, [])
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs />
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth="33.33333%"
      />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})
HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}
export default HomeSectionV2
