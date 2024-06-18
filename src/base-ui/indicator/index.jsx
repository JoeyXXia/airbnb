import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from '@/base-ui/indicator/style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const scrollRef = useRef()

  useEffect(() => {
    const selectItemEl = scrollRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    const contentWidth = scrollRef.current.clientWidth
    const contentScroll = scrollRef.current.scrollWidth
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    if (distance < 0) distance = 0

    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance

    scrollRef.current.style.transform = `translate(${-distance}px)`
    return () => {}
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={scrollRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})
Indicator.propTypes = {
  selectIndex: PropTypes.number
}
export default Indicator
