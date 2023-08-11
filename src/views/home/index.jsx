import React, { memo, useEffect } from 'react'
import HomeBanner from 'src/views/home/cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from '@/views/home/style'

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxxx'))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <span>{goodPriceInfo.title}</span>
        {/*<span>{goodPriceInfo.list}</span>*/}
      </div>
    </HomeWrapper>
  )
})

export default Home
