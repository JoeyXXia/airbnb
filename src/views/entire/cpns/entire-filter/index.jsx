import React, { memo, useState } from 'react'
import { FilterWrapper } from '@/views/entire/cpns/entire-filter/style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  function setSelectItemsHandle(item) {
    const newItems = [...selectItems]
    if (newItems.includes(item)) {
      const index = newItems.findIndex((name) => item === name)
      newItems.splice(index, 1)
    } else {
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              key={item}
              className={classNames('item', {
                active: selectItems.includes(item)
              })}
              onClick={(e) => setSelectItemsHandle(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter
