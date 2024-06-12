import React, { memo } from 'react'
import Indicator from '@/base-ui/indicator'
import { DemoWrapper } from '@/views/demo/style'

const Demo = memo(() => {
  const names = ['abv', 'cer', 'sder', 'err', 'kehj', 'eda']
  return (
    <DemoWrapper>
      <div>
        <div className="control">
          <button>previous</button>
          <button>next</button>
        </div>
        <div className="list">
          <Indicator>
            {names.map((item) => {
              return <button>{item}</button>
            })}
          </Indicator>
        </div>
      </div>
    </DemoWrapper>
  )
})

export default Demo
