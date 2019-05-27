import Vue from 'vue'
import VueResource from 'vue-resource'
import WidgetData from '@/mock/widget_data'
import SubscriptionData from '@/mock/subscription_data'
import ActivityData from '@/mock/activity_data'
import MilestoneData from '@/mock/milestone_data'
import PlaylistData from '@/mock/playlist_data'
import SupportData from '@/mock/support_data'

Vue.use(VueResource)
let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

let routes = [
  WidgetData.index(),
  WidgetData.edit(),
  WidgetData.remove(),
  WidgetData.create(),
  ActivityData.payments(),
  ActivityData.indexUser(),
  ActivityData.indexStreamer(),
  SubscriptionData.index(),
  MilestoneData.create(),
  MilestoneData.index(),
  MilestoneData.remove(),
  PlaylistData.index(),
  PlaylistData.sounds(),
  SupportData.index(),
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
  }
]

Vue.http.interceptors.unshift((request, next) => {
  let route = routes.find((item) => {
    return (request.method === item.method && request.url === item.url)
  })
  if (!route) {
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
