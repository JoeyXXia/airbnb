import React, { memo } from 'react'
import { RoomsWrapper } from '@/components/section-rooms/style'
import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'

const SectionRooms = memo((props) => {
  const { roomList = [], itemwidth } = props
  return (
    <RoomsWrapper>
      {roomList.slice(0, 8)?.map((item) => {
        return <RoomItem itemData={item} key={item.id} itemwidth={itemwidth} />
      })}
    </RoomsWrapper>
  )
})
SectionRooms.propTypes = {
  roomList: PropTypes.array
}
export default SectionRooms
