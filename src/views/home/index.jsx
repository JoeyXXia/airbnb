import React, { memo, useEffect } from 'react'
import HomeBanner from 'src/views/home/cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from '@/views/home/style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import HomeSectionV1 from '@/views/home/cpns/home-section-v1'

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
        <HomeSectionV1 infoData={goodPriceInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home
