var milestones = {
	index () {
		return {
			method: 'GET',
			url: 'milestones/',
			response: [
			{ id: 1 , money: 100, badge_count: 1, animation_count: 1, sound_count: 1 },
			{ id: 2 ,money: 250, badge_count: 3, animation_count: 3, sound_count: 3 },
			{ id: 3 ,money: 500, badge_count: 5, animation_count: 5, sound_count: 5 },
			{ id: 4 ,money: 1000, badge_count: 10, animation_count: 10, sound_count: 10 },
			{ id: 5 ,money: 2000, badge_count: 25, animation_count: 25, sound_count: 25 }
			]
		}
	}
}

export default milestones