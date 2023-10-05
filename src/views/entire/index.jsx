import React, { memo, useEffect } from 'react'
import { EntireWrapper } from '@/views/entire/style'
import { useDispatch } from 'react-redux'
import { fetchEntireDataActoin } from '@/store/modules/entire/actionCreators'
import EntireFilter from '@/views/entire/cpns/entire-filter'
import EntirePagination from '@/views/entire/cpns/entire-pagination'
import EntireRooms from '@/views/entire/cpns/entire-rooms'

const Entire = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEntireDataActoin())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntirePagination />
      <EntireRooms />
    </EntireWrapper>
  )
})

export default Entire
