var playlist = { 
	index() {
		return {
			method: 'GET',
			url: 'playlist/',
			response: [
			{ id: 1, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' },
			{ id: 2, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' },
			{ id: 3, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' },
			{ id: 4, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' },
			{ id: 5, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' }
			]
		}
	},
	sounds() {
		return {
			method: 'GET',
			url: 'sounds/',
			response: [
			{ id: 1, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' },
			{ id: 2, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' },
			{ id: 3, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' },
			{ id: 4, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' },
			{ id: 5, trackName: 'Queen - Another One Bites The Dust', username: 'Marissa_10', track_time: '3:47' }
			]
		}
	},
}

export default playlist