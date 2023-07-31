import React, { memo, useEffect } from 'react'
import xxRequest from '@/services'
import HomeBanner from 'src/views/home/cpns/home-banner'

const Home = memo(() => {
  useEffect(() => {
    xxRequest.get({ url: '/home/highscore' }).then((res) => {
      console.log(res)
    })
  }, [])
  return <HomeBanner />
})

export default Home