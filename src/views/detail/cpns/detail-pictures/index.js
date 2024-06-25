import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { PictureWrapper } from '@/views/detail/cpns/detail-pictures/style'
import { useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPicture = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false)

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
      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && <PictureBrowser />}
    </PictureWrapper>
  )
})
DetailPicture.propTypes = {
  name: PropTypes.string
}
export default DetailPicture
