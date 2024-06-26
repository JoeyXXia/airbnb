import React, { memo, useState } from 'react'
import Indicator from '@/base-ui/indicator'
import { DemoWrapper } from '@/views/demo/style'

const Demo = memo(() => {
  const names = [
    'abv',
    'cer',
    'sder',
    'err',
    'kehj',
    'eda',
    'sdweare',
    'wdwadwadwad'
  ]
  const [selectIndex, setSelectIndex] = useState(0)

  function toggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = names.length - 1
    if (newIndex > names.length - 1) newIndex = 0

    // console.log(newIndex)
    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div>
        <div className="control">
          <button onClick={(e) => toggleClickHandle(false)}>previous</button>
          <button onClick={(e) => toggleClickHandle(true)}>next</button>
        </div>
        <div className="list">
          <Indicator selectIndex={selectIndex}>
            {names.map((item) => {
              return <button key={item}>{item}</button>
            })}
          </Indicator>
        </div>
      </div>
    </DemoWrapper>
  )
})

export default Demo
