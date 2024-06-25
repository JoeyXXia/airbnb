import React, { memo, useEffect, useState } from 'react'
import PropTypes, { func } from 'prop-types'
import { PictureBrowserWrapper } from '@/base-ui/picture-browser/style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0

    setCurrentIndex(newIndex)
  }

  return (
    <PictureBrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div
            className="btn left"
            onClick={(event) => controlClickHandle(false)}
          >
            <IconArrowLeft width={77} height={77} />
          </div>
          <div
            className="btn right"
            onClick={(event) => controlClickHandle(true)}
          >
            <IconArrowRight width={77} height={77} />
          </div>
        </div>
        <div className="picture">
          <img src={pictureUrls[currentIndex]} alt="" />
        </div>
      </div>
      <div className="preview"></div>
    </PictureBrowserWrapper>
  )
})
PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  name: PropTypes.string
}
export default PictureBrowser
