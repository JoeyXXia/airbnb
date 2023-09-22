import React, { memo } from 'react'
import { ItemWrapper } from '@/components/longfor-item/style'
import PropTypes from 'prop-types'

const LongForItem = memo((props) => {
  const { itemData } = props

  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img src={itemData.picture_url} alt="" className="cover" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">{itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})
LongForItem.propTypes = {
  itemData: PropTypes.object
}
export default LongForItem
