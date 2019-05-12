import Vue from 'vue'
import VueResource from 'vue-resource'
import WidgetData from '@/mock/widget_data'
import SubscriptionData from '@/mock/subscription_data'
import ActivityData from '@/mock/activity_data'
Vue.use(VueResource)
let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

let routes = [
  WidgetData.index(),
  WidgetData.edit(),
  SubscriptionData,
  ActivityData,
  {
    method: 'GET',
    url: 'activity-user/',
    response: [
      {
        title: 'Успешный перевод',
        amount: '200 EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        date: 'Сегодня в 13.10',
        subscribe: { state: 'premium', count: 1 },
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'paid', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Успешный перевод',
        amount: '200 EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Успешный перевод',
        amount: '200 EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Успешный перевод',
        amount: '50EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Успешный перевод',
        amount: '100EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Новый стрик подписки',
        amount: '',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Успешный перевод',
        amount: '200 EUR',
        subscribe: { state: 'premium', count: 1 },
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('./assets/avatar.png') },
        message: ''
      }
    ]
  },
  {
    method: 'GET',
    url: 'activity-streamer/',
    response: [
      {
        title: 'Вам поступил новый платеж',
        amount: '200 EUR',
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '50EUR',
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Поздравляем! У вас новый подписчик!',
        amount: '',
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '100EUR',
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Поздравляем! У вас новый подписчик!',
        amount: '',
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '200 EUR',
        date: 'Сегодня в 13.30',
        user: { nickname: 'Snoop019', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '50EUR',
        date: 'Сегодня в 13.10',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Поздравляем! У вас новый подписчик!',
        amount: '',
        date: 'Сегодня в 13.00',
        user: { nickname: 'Ali21ne', avatar: require('./assets/avatar.png') },
        message: ''
      },
      {
        title: 'Вам поступил новый платеж',
        amount: '100EUR',
        date: 'Сегодня в 12.40',
        user: { nickname: 'Morgan_Free99', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      },
      {
        title: 'Поздравляем! У вас новый подписчик!',
        amount: '',
        date: 'Сегодня в 12.00',
        user: { nickname: 'Alice_Liddell', avatar: require('./assets/avatar.png') },
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo.'
      }
    ]
  },
  {
    method: 'GET',
    url: 'comments/',
    response: [
      { user: { avatar: require('./assets/avatar.jpg'), user_name: 'Snoop019' }, message: message },
      { user: { avatar: require('./assets/avatar.jpg'), user_name: 'Ali21ne' }, message: message },
      { user: { avatar: require('./assets/avatar.jpg'), user_name: 'Ali21ne' }, message: message },
      { user: { avatar: require('./assets/avatar.jpg'), user_name: 'Snoop019' }, message: message },
      { user: { avatar: require('./assets/avatar.jpg'), user_name: 'Snoop019' }, message: message }
    ]
  },
  {
    method: 'GET',
    url: 'quotes/18/',
    response: { id: 18, body: 'Curse your sudden but inevitable betrayal!' }
  }
]

Vue.http.interceptors.unshift((request, next) => {
  let route = routes.find((item) => {
    return (request.method === item.method && request.url === item.url)
  })
  if (!route) {
    // we're just going to return a 404 here, since we don't want our test suite making a real HTTP request
    next(request.respondWith({ status: 404, statusText: 'Oh no! Not found!' }))
  } else {
    next(
      request.respondWith(
        route.response,
        { status: 200 }
      )
    )
  }
})
