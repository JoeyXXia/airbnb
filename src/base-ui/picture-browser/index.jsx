import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { PictureBrowserWrapper } from '@/base-ui/picture-browser/style'

const PictureBrowser = memo(() => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return <PictureBrowserWrapper>picture browser</PictureBrowserWrapper>
})
PictureBrowser.propTypes = {
  name: PropTypes.string
}
export default PictureBrowser
