import React, { memo } from 'react'
import { LongForWrapper } from '@/views/home/cpns/home-longfor/style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongForItem from '@/components/longfor-item'
import PropTypes from 'prop-types'

const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <LongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longFor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongForItem itemData={item} key={item.city} />
          })}
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object
}
export default HomeLongFor
