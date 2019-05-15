let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

var activities = {
  payments () {
    return {
      method: 'GET',
      url: 'activities/payment',
      response: [
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Snoop019' }, date: 'Сегодня в 13.30', amount: '150', message: 'Macdonald' },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Ali21ne' }, date: 'Сегодня в 13.10', amount: '50', message: 'Shaw' },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Ali21ne' }, date: 'Сегодня в 13.00', amount: '50', message: 'Wilson' },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Snoop019' }, date: 'Сегодня в 13.30', amount: '150', message: 'Carney' },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Snoop019' }, date: 'Сегодня в 13.30', amount: '150', message: message },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Ali21ne' }, date: 'Сегодня в 13.10', amount: '50', message: 'Shaw' },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Ali21ne' }, date: 'Сегодня в 13.00', amount: '50', message: message },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Snoop019' }, date: 'Сегодня в 13.30', amount: '150', message: 'Carney' },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Snoop019' }, date: 'Сегодня в 13.30', amount: '150', message: 'Macdonald' },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Ali21ne' }, date: 'Сегодня в 13.10', amount: '50', message: 'Shaw' },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Ali21ne' }, date: 'Сегодня в 13.00', amount: '50', message: 'Wilson' },
      { user: { avatar: require('../assets/avatar.png'), user_name: 'Snoop019' }, date: 'Сегодня в 13.30', amount: '150', message: 'Carney' }
      ]
    }
  },
  indexUser () {
    return  {
      method: 'GET',
      url: 'activities/user',
      response: [
      {
        title: 'Успешный перевод',
        amount: '200 EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        date: 'Сегодня в 13.10',
        subscribe: { state: 'premium', count: 1 },
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'paid', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Успешный перевод',
        amount: '200 EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Успешный перевод',
        amount: '200 EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Успешный перевод',
        amount: '200 EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('../assets/avatar.png') },
        message: ''
      }
      ]
    }
  },
  indexStreamer () {
    return {
      method: 'GET',
      url: 'activities/streamer',
      response: [
      {
        title: 'Вам поступил новый платеж',
        amount: '200 EUR',
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '50EUR',
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Поздравляем! У вас новый подписчик!',
        amount: '',
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '100EUR',
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Поздравляем! У вас новый подписчик!',
        amount: '',
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '200 EUR',
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '50EUR',
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Поздравляем! У вас новый подписчик!',
        amount: '',
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('../assets/avatar.png') },
        message: ''
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '100EUR',
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('../assets/avatar.png') },
        message: message
      },
      {
        title: 'Поздравляем! У вас новый подписчик!',
        amount: '',
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('../assets/avatar.png') },
        message: message
      }
      ]
    }
  }
}

export default activities
