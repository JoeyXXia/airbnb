import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper } from '@/views/detail/style'
import { shallowEqual, useSelector } from 'react-redux'

const Detail = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  )
  return (
    <DetailWrapper>
      <div>{detailInfo.name}</div>
    </DetailWrapper>
  )
})
Detail.propTypes = {
  name: PropTypes.string
}
export default Detail
