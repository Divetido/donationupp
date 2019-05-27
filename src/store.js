import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

let dark_theme = {
  global: {
    dark: true
  },
  item: {
    'dark-item': true
  },
  text: {
    'dark-text': true
  },
  link: {
    'dark-link': true
  },
  extra: {
    'dark-extra': true
  },
  title_text: {
    'white-text': true
  }
}

let light_theme = {
  global: {
    light: true
  },
  item: {
    'light-item': true
  },
  text: {
    'light-text': true
  },
  link: {
    'light-link': true
  },
  extra: {
    'light-extra': true
  },
  title_text: {
    'dark-blue': true
  }
}

export default new Vuex.Store({
  state: {
    user_type: 'streamer',
    state_checkbox: false,
    color_schema: {
      dark: dark_theme,
      light: light_theme
    },
    subscribers: [],
    activities: [],
    milestones: [],
    widgets: [],
    playlist: [],
    sounds: [],
    testSound: [
    "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
    ]
  },
  getters: {
    state_checkbox: state => {
      return state.state_checkbox
    },
    color_schema: state => {
      return state.state_checkbox ? state.color_schema.light : state.color_schema.dark
    },
    user: state => {
      return state.user_type == 'user'
    }
  },
  mutations: {
    set_state_checkbox: (state, payload) => {
      state.state_checkbox = payload
    },
    set_user_type: (state, payload) => {
      state.user_type = payload
    },
    setSubscribers (state, subscribers) {
      state.subscribers = subscribers
    },
    addSubscribers (state, subscribers) {
      state.subscribers.push(...subscribers)
    },
    setActivities (state, activities) {
      state.activities = activities
    },
    addActivities (state, activities) {
      state.activities.push(...activities)
    },
    createMilestone (state, milestone) {
      state.milestones.push(milestone)
    },
    setMilestones (state, milestones) {
      state.milestones = milestones
    },
    removeMilestones (state, milestone_id) {
      var removeIndex = state.milestones.map(function(item) { return item.id; }).indexOf(milestone_id);
      state.milestones.splice(removeIndex, 1)
    },
    setWidgets (state, widgets) {
      state.widgets = widgets
    },
    removeWidgets (state, payload) {
      var i_i = state.widgets.map(function(item) { return item.title; }).indexOf(payload['type']);
      var items = state.widgets[i_i]['collapseItem']
      var r_i = items.map(function(item) { return item.id; }).indexOf(payload['id']);
      state.widgets[i_i]['collapseItem'].splice(r_i, 1) 

    },
    createWidgets (state, widget) {
      state.widgets[0]['collapseItem'].push(widget)
    },
    setPlaylist (state, playlist) {
      state.playlist = playlist
    },
    addPlaylist (state, playlist) {
      state.playlist.push(...playlist)
    },
    setSounds (state, sounds) {
      state.sounds = sounds
    },
    setSupports (state, supports) {
      state.supports = supports
    },
  },
  actions: {
    fetchSupports ({ commit }) {
      return client
      .fetchSupports()
      .then(supports => commit('setSupports', supports))
    },
    fetchSounds ({ commit }) {
      return client
      .fetchSounds()
      .then(sounds => commit('setSounds', sounds))
    },
    fetchPlaylist ({ commit }) {
      return client
      .fetchPlaylist()
      .then(playlist => commit('setPlaylist', playlist))
    },
    updatePlaylist ({ commit }) {
      return client
      .fetchPlaylist()
      .then(playlist => commit('addPlaylist', playlist))
    },
    fetchSubscribers ({ commit }) {
      return client
      .fetchSibscribers()
      .then(subscribers => commit('setSubscribers', subscribers))
    },
    createMilestone ({ commit }) {
      return client
      .createMilestone()
      .then(milestone => commit('createMilestone', milestone))
    },
    fetchMilestones ({ commit }) {
      return client
      .fetchMilestones()
      .then(milestones => commit('setMilestones', milestones))
    },
    removeMilestones ({ commit }, milestone_id) {
      return client
      .removeMilestones(milestone_id)
      .then(commit('removeMilestones', milestone_id))
    },
    fetchWidgets ({ commit }) {
      return client
      .fetchWidgets()
      .then(widgets => commit('setWidgets', widgets))
    },
    removeWidgets ({ commit }, payload) {
      return client
      .removeWidgets(payload['id'])
      .then(commit('removeWidgets', payload))
    },
    createWidgets ({ commit }) {
      return client
      .createWidgets()
      .then(widget => commit('createWidgets', widget))
    },
    updateSubscribers ({ commit }) {
      return client
      .fetchSibscribers()
      .then(subscribers => commit('addSubscribers', subscribers))
    },
    fetchActivities ({ commit }, type) {
      return client
      .fetchActivities(type)
      .then(activities => commit('setActivities', activities))
    },
    updateActivities ({ commit }, type) {
      return client
      .fetchActivities(type)
      .then(activities => commit('addActivities', activities))
    },
  }
})
