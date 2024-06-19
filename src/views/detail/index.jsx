import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper } from '@/views/detail/style'
import DetailPicture from '@/views/detail/cpns/detail-pictures'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture />
    </DetailWrapper>
  )
})
Detail.propTypes = {
  name: PropTypes.string
}
export default Detail
