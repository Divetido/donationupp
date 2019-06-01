import client from 'api-client'

var actions = {
    fetchAlerts ({ commit }) {
      return client
      .fetchAlerts()
      .then(alerts => commit('setAlerts', alerts))
    },
    removeAlert ({ commit }, alert_id) {
      return client
      .removeAlert(alert_id)
      .then(commit('removeAlert', alert_id))
    },
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

  export default actions
