import Vue from 'vue'

export default {
	// INDEX
	fetchSibscribers () {
		return Vue.http.get('subscribers/')
		.then(response => response.body)
	},
	fetchActivities (type) {
		return Vue.http.get('activities/' + type)
		.then(response => response.body)
	},
	fetchMilestones () {
		return Vue.http.get('milestones/')
		.then(response => response.body)
	},
	fetchWidgets () {
		return Vue.http.get('widgets/')
		.then(response => response.body)
	},
	fetchPlaylist () {
		return Vue.http.get('playlist/')
		.then(response => response.body)
	},
	fetchSounds () {
		return Vue.http.get('sounds/')
		.then(response => response.body)
	},
	fetchSupports () {
		return Vue.http.get('supports/')
		.then(response => response.body)
	},
	fetchAlerts () {
		return Vue.http.get('alerts/')
		.then(response => response.body)
	},


	//CREATE
	createMilestone() {
		return Vue.http.post('milestones/')
		.then(response => response.body)
	},
	createWidgets() {
		return Vue.http.post('widgets/')
		.then(response => response.body)
	},

	// DELETE
	removeMilestones (id) {
		return Vue.http.delete('milestones/')
		.then(response => response.body)
	},
	removeWidgets (id) {
		return Vue.http.delete('widgets/')
		.then(response => response.body)
	},
	removeAlert (id) {
		return Vue.http.delete('alerts/')
		.then(response => response.body)
	}
}
