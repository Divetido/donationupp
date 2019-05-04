import Vue from 'vue'
import Vuex from 'vuex'

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
    }
  },
  getters: {
    state_checkbox: state => {
      return state.state_checkbox
    },
    color_schema: state => {
      return state.state_checkbox ? state.color_schema.light : state.color_schema.dark
    },
    user: state => {
      return state.user_type == 'user' ? true : false
    }
  },
  mutations: {
    set_state_checkbox: (state, payload) => {
      state.state_checkbox = payload;
    },
    set_user_type: (state, payload) => {
      state.user_type = payload;
    }
  },
  actions: {

  }
})
