var alerts = {
  index() {
    return {
      method: 'GET',
      url: 'alerts/',
      response: [
      { id: 1, active: true, amount: { min: '0 EUR', max: '100 EUR' } },
      { id: 2, active: true, amount: { min: '100 EUR', max: '300 EUR' } },
      { id: 3, active: true, amount: { min: '300 EUR', max: '500 EUR' } }
      ]
    }
  },
  subscribers() {
    return {
      method: 'GET',
      url: 'alerts/subscribers',
      response: [
        { id: 1, active: true, strick: '1 месяц', icon: require('../assets/simple-icon.svg'), type: 'Простая подписка' },
        { id: 2, active: true, strick: '2 месяца', icon: require('../assets/premium.svg'), type: 'Премиум подписка' }
      ]
    }
  },
  subscribers() {
    return {
      method: 'DELETE',
      url: 'alerts/',
      response: {}
    }
  }
}

export default alerts
