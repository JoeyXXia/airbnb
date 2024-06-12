import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from '@/base-ui/indicator/style'

const Indicator = memo((props) => {
  const { selectIndex } = props
  const scrollRef = useRef()

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={scrollRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})
Indicator.propTypes = {}
export default Indicator
