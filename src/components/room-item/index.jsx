import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from '@/components/room-item/style'
import PropTypes from 'prop-types'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props
  const swiperRef = useRef()
  const [selectIndex, setSelectIndex] = useState(0)

  function controlClickHandle(isRight = true) {
    isRight ? swiperRef.current.next() : swiperRef.current.prev()

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.len
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0

    setSelectIndex(newIndex)
  }

  const pictureElm = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const swiperElm = (
    <div className="swiper">
      <div className="controls">
        <div className="btn left" onClick={(e) => controlClickHandle(false)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="dot-item" key={item}>
                <span
                  className={classNames('dot', {
                    active: selectIndex === index
                  })}
                ></span>
              </div>
            )
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={swiperRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper
      verifycolor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
    >
      <div className="inner">
        {!itemData.picture_urls ? pictureElm : swiperElm}
        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848A', margin: '-1px' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
