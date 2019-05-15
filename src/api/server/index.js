import Vue from 'vue'

export default {
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
	}
}
