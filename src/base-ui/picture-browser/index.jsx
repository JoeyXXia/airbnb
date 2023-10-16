import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { PictureBrowserWrapper } from '@/base-ui/picture-browser/style'

const PictureBrowser = memo(() => {
  return <PictureBrowserWrapper></PictureBrowserWrapper>
})
PictureBrowser.propTypes = {
  name: PropTypes.string
}
export default PictureBrowser
