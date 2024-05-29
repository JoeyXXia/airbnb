import React, { memo } from 'react'
import { EntireRoomWrapper } from '@/views/entire/cpns/entire-rooms/style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  const { roomList, isLoading, totalCount } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading,
      totalCount: state.entire.totalCount
    }),
    shallowEqual
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleItemClick(item) {
    navigate('/detail')
    dispatch(changeDetailInfoAction(item))
  }
  return (
    <EntireRoomWrapper>
      <h2 className="title">共{totalCount}初住所</h2>
      <div className="list">
        {roomList.map((item, index) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={(e) => handleItemClick(item)}
            />
          )
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </EntireRoomWrapper>
  )
})

export default EntireRooms
