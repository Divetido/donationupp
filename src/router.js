import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Subscribers from './views/Subscribers.vue'
import Payments from './views/Payments.vue'
import Streams from './views/Streams.vue'
import Milestone from './views/Milestone.vue'
import Widgets from './views/Widgets.vue'
import Settings from './views/Settings.vue'
import Account from './views/Account.vue'
import Donat from './views/Donat.vue'
import Alerts from './views/Alerts.vue'
import Policy from './views/Policy.vue'
import Player from './views/Player.vue'
import Help from './views/Help.vue'
import Advancement from './views/Advancement.vue'
import FormDonation from './views/FormDonation.vue'
import Search from './views/Search.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/subscribers',
    name: 'subscribers',
    component: Subscribers
  },
  {
    path: '/payments',
    name: 'payments',
    component: Payments
  },
  {
    path: '/stream',
    name: 'stream',
    component: Streams
  },
  {
    path: '/milestone',
    name: 'milestone',
    component: Milestone,
  },
  {
    path: '/widgets',
    name: 'widgets',
    component: Widgets
  },

  {
    path: '/settings/account',
    name: 'account',
    component: Account
  },
  {
    path: '/settings/donat',
    name: 'donat',
    component: Donat
  },
  {
    path: '/settings/alerts',
    name: 'alerts',
    component: Alerts
  },
  {
    path: '/policy',
    name: 'policy',
    component: Policy
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  },
  {
    path: '/player',
    name: 'player',
    component: Player
  },
  {
    path: '/advancement',
    name: 'advancement',
    component: Advancement
  },
  {
    path: '/form-donation',
    name: 'form-donation',
    component: FormDonation
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
  ]
})
