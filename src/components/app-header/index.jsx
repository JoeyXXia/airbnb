import React, { memo, useRef, useState } from 'react'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  )
  const { isFixed } = headerConfig

  const { scrollY } = useScrollPosition()
  const preY = useRef(0)

  if (!isSearch) preY.current = scrollY
  console.log(
    'scrollY - preY.current',
    isSearch && Math.abs(scrollY - preY.current) > 30
  )
  if (isSearch && Math.abs(scrollY - preY.current) > 30) setIsSearch(false)

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
            searchBarClick={(e) => setIsSearch(true)}
          />
          <HeaderRight />
        </div>
        <SearchAreaWrapper isSearch={isSearch} />
      </div>
      {isSearch && (
        <div className="cover" onClick={(e) => setIsSearch(false)}></div>
      )}
    </HeaderWrapper>
  )
})

export default AppHeader
