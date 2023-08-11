import xxRequest from '..'

export function getHomeGoodPriceData() {
  return xxRequest.get({
    url: '/home/goodprice'
  })
}
