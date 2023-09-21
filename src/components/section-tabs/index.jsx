import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from '@/components/section-tabs/style'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
    <SectionTabsWrapper>
      {tabNames.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames('item', { active: index === currentIndex })}
            onClick={(e) => itemClickHandle(index, item)}
          >
            {item}
          </div>
        )
      })}
    </SectionTabsWrapper>
  )
})
SectionTabs.propTypes = {
  tabNames: PropTypes.array
}
export default SectionTabs
