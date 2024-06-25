import React, { memo, useEffect } from 'react'
import PropTypes, { func } from 'prop-types'
import { PictureBrowserWrapper } from '@/base-ui/picture-browser/style'
import IconClose from '@/assets/svg/icon-close'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }

  return (
    <PictureBrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="list"></div>
      <div className="indicator"></div>
    </PictureBrowserWrapper>
  )
})
PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  name: PropTypes.string
}
export default PictureBrowser
