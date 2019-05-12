import subscribers from './data/subscribers'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchSibscribers () {
    return fetch(subscribers, 1000)
  }
}
