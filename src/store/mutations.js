var mutations = {
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

  setAlerts (state, alerts) {
    state.alerts = alerts
  },
}

export default mutations
