import React, { memo, useEffect, useState } from 'react'
import PropTypes, { func } from 'prop-types'
import { PictureBrowserWrapper } from '@/base-ui/picture-browser/style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(false)
  const [showList, setShowList] = useState(true)

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
    setIsNext(isNext)
  }
  function handleBottomClick(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <PictureBrowserWrapper isNext={isNext} showList={showList}>
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
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={150}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1} / {pictureUrls.length}
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames('item', {
                      active: currentIndex === index
                    })}
                    key={item}
                    onClick={(e) => handleBottomClick(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})
PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  name: PropTypes.string
}
export default PictureBrowser
