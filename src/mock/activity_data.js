let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

var activity = {
  method: 'GET',
  url: 'activity/',
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

export default activity
