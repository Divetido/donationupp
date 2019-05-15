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
    setMilestones (state, milestones) {
      state.milestones = milestones
    },
    setWidgets (state, widgets) {
      state.widgets = widgets
    },
  },
  actions: {
    fetchSubscribers ({ commit }) {
      return client
      .fetchSibscribers()
      .then(subscribers => commit('setSubscribers', subscribers))
    },
    fetchMilestones ({ commit }) {
      return client
      .fetchMilestones()
      .then(milestones => commit('setMilestones', milestones))
    },
    fetchWidgets ({ commit }) {
      return client
      .fetchWidgets()
      .then(widgets => commit('setWidgets', widgets))
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
