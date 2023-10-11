import React, { memo } from 'react'
import { EntireRoomWrapper } from '@/views/entire/cpns/entire-rooms/style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RoomItem from '@/components/room-item'

const EntireRooms = memo(() => {
  const { roomList, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  )

  const naviggate = useNavigate()
  const dispatch = useDispatch()

  function handleItemClick(item) {
    naviggate('/detail')
    // dispatch(ch)
  }
  return (
    <EntireRoomWrapper>
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
      {isLoading && <div className="cove"></div>}
    </EntireRoomWrapper>
  )
})

export default EntireRooms
