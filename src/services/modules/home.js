import xxRequest from '..'

export function getHomeGoodPriceData() {
  return xxRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return xxRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscountData() {
  return xxRequest.get({
    url: '/home/discount'
  })
}

export function getHomeHotRecommendData() {
  return xxRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongForData() {
  return xxRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePlusData() {
  return xxRequest.get({
    url: '/home/plus'
  })
}
