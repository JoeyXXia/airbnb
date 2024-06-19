import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { PictureWrapper } from '@/views/detail/cpns/detail-pictures/style'
import { useSelector } from 'react-redux'

const DetailPicture = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))
  return (
    <PictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
    </PictureWrapper>
  )
})
DetailPicture.propTypes = {
  name: PropTypes.string
}
export default DetailPicture
