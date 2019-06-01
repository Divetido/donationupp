var getters = {
  state_checkbox: state => {
    return state.state_checkbox
  },
  color_schema: state => {
    return state.state_checkbox ? state.color_schema.light : state.color_schema.dark
  },
  user: state => {
    return state.user_type == 'user'
  }
}

export default getters
