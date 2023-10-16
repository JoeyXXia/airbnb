import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from '@/base-ui/indicator/style'

const Indicator = memo(() => {
  return <IndicatorWrapper></IndicatorWrapper>
})
Indicator.propTypes = {
  name: PropTypes.string
}
export default Indicator
