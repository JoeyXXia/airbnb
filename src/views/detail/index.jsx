import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper } from '@/views/detail/style'
import DetailPicture from '@/views/detail/cpns/detail-pictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }))
  }, [dispatch])
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
