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

var state = {
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
  ],
  alerts: [],
}

export default state
