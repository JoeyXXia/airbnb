import React, { memo } from 'react'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'

const AppHeader = memo(() => {
    return (
    <>
    <HeaderLeft/>
    <HeaderCenter/>
    <HeaderRight/>
    </>
    )
})

export default AppHeader