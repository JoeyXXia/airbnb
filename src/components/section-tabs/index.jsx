import React, { memo } from 'react'
import { SectionTabsWrapper } from '@/components/section-tabs/style'
import PropTypes from 'prop-types'

const SectionTabs = memo(() => {
  return (
    <SectionTabsWrapper>
      <div>tabs</div>
    </SectionTabsWrapper>
  )
})
SectionTabs.propTypes = {
  tabNames: PropTypes.array
}
export default SectionTabs
