import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionV2Wrapper } from '@/views/home/cpns/home-section-v2/style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infroDta } = props

  const initialName = Object.keys(infroDta.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infroDta.dest_address?.((item) => item.name)

  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infroDta.title} subtitle={infroDta.subtitle} />
      <SectionTabs />
      <SectionRooms
        roomList={infroDta.dest_list?.[name]}
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
