import xxRequest from '..'

export function getEntireRoomList(offset, size = 20) {
  return xxRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}
