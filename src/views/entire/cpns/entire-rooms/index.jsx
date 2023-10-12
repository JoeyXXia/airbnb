import React, { memo } from 'react'
import { EntireRoomWrapper } from '@/views/entire/cpns/entire-rooms/style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  const { roomList, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading
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
