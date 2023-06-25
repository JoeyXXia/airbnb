import React, { memo, useEffect } from 'react'
import xxRequest from '@/services'

const Home = memo(() => {
    useEffect(() => {
        xxRequest.get({url:"/home/highscore"}).then(res => {
            console.log(res)
        })
    },[])
  return (
    <div>Home</div>
  )
})

export default Home