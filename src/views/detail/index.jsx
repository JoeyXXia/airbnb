import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper } from '@/views/detail/style'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <div>detail</div>
    </DetailWrapper>
  )
})
Detail.propTypes = {
  name: PropTypes.string
}
export default Detail
