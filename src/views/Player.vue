<template>
	<div class="player-content text">
		<div class="player-left-block">

			<div class="player-block-top">
				<div class="title text" :class="color_schema.title_text">ПЛЕЕР</div>
				<div class="player-btn-add">
					<button class="default-button" v-b-modal.player-modal >ДОБАВИТЬ ТРЕК</button>
				</div>
			</div>

			<audio-player :sources="testSound" :xhrWithCredentials="true" ></audio-player>

			<div class="player-list" :class="color_schema.item">
				<div class="item-player-list" v-for="item in playlist">
					<div class="action-img">

					</div>
					<div class="item-details" >
						<div class="item-info">
							<div class="text">{{ item.trackName }}</div>
							<div class="order-user">
								<img src="../assets/user.svg">
								<div class="username" :class="color_schema.text">
									{{ item.username }}
								</div>
							</div>
						</div>
						<div class="track-time" :class="color_schema.text">{{ item.track_time }}</div>
					</div>

				</div>
			</div>

			<div class="player-orders">
				<div class="title" :class="color_schema.title_text">ЗАКАЗАННЫЕ ТРЕКИ</div>
				<div class="order-list" >
					<div class="order-item" :class="color_schema.item" v-for="item in sounds">
						<div class="action-img">

						</div>
						<div class="item-details" >
							<div class="item-info">
								<div class="text">{{ item.trackName }}</div>
								<div class="order-user">
									<img src="../assets/user.svg">
									<div class="username" :class="color_schema.text">
										{{ item.username }}
									</div>
								</div>
							</div>
							<div class="item-action">
								<button class="default-button"><span>+</span></button>
								<div class="track-time" :class="color_schema.text">{{ item.track_time }}</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="player-right-block">
			<div class="player-media-link" :class="color_schema.item">
				<div class="text">Cсылка на вывод медиа</div>
				<div class="buffer-link">
					<a href="#" :class="color_schema.title_text">https://dev.donatesupp.ru/#/stream/settings</a>
					<button style="border: 0" class="copy-link btn-action" />
				</div>
			</div>

			<div class="amount-for-player" :class="color_schema.item">
				<div :class="color_schema.text">Минимальная сумма доната для заказа медиа</div>
				<div class="amount-slider">
					<b-form-slider ref="range" :min="0" :max="1200" v-model="player_amount" />
					<div class="slider-value text">{{ player_amount }}</div> EUR
				</div>
			</div>

			<div class="player-video" :class="color_schema.item">
				<div :class="color_schema.text"> Заказанное видео</div>
				<div class="video">
					<img src="../assets/video-img.png" alt="video" class="img-video">
				</div>
			</div>
		</div>
		<player-modal/>
	</div>

</template>
<script>
	import { mapState, mapGetters } from 'vuex'
	import bFormSlider from 'vue-bootstrap-slider/es/form-slider'
	import BProgress from 'bootstrap-vue/es/components/progress/progress'
	import PlayerModal from '../components/modals/PlayerModal.vue'
	// import AudioPlayer from '@/components/player/audio-player.vue'

	export default {
		name: 'player',
		component: {
			bFormSlider,
			BProgress,
			PlayerModal,
			// AudioPlayer
		},
		data () {
			return {
				currentTime: '00:00',
				player_amount: 500,
				track_time: 30,
				busy: false,
				audioSources: [
				"http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
				"http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
				],
				
			}
		},
		mounted() {
			const listElm = document.querySelector('.player-list');
			listElm.addEventListener('scroll', e => {
				if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
					this.loadMore();
				}
			});
			this.$store.dispatch('fetchPlaylist')
			this.$store.dispatch('fetchSounds')
		},
		computed: {
			...mapGetters(['color_schema']),
			...mapState(['playlist', 'sounds', 'testSound']),
			currentSources () {
				return this.audioSources[this.playlistIndex]
			}
		},
		methods: {
			loadMore() {
				this.busy = true;
				setTimeout(() => {
					this.$store.dispatch('updatePlaylist');
					this.busy = false;
				}, 200);
			},
			prevSound () {
				this.playlistIndex = Math.max(0, this.playlistIndex - 1)
			},
			nextSound () {
				this.playlistIndex = Math.min(playlist.length - 1, this.playlistIndex + 1)
			}
		},
	}
</script>

<style>
.player-content {
	padding: 25px;
	display: grid;
	grid-template-columns: 570px 450px;
	grid-column-gap: 25px;
	/*overflow: auto;*/
}
.buffer-link {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 15px 0;
}
.player-media-link {
	width: 100%;
	height: 95px;
	font-size: 12px;
	padding: 20px;
	border-radius: 10px;
	margin-top: 70px;
}
.custom-player {
	height: 95px;
	width: 100%;
	border-radius: 10px 10px 0 0;
	padding: 0 25px;
	display: grid;
	grid-template-columns: 100px 1fr;

}
.player-content {
	padding: 25px;
}
.player-block-top {
	display: flex;
	max-width: 570px;
	align-items: center;
	justify-content: space-between;
}
.amount-for-player {
	height: 120px;
	width: 100%;
	margin: 20px 0;
	border-radius: 10px;
	font-size: 12px;
	padding: 20px 25px;
}
.player-btn-add > button {
	width: 160px;
}
.player-btn-add {
	height: 45px;
	font-size: 12px;
}

.player-list {
	width: 570px;
	height: 325px;
	margin-top: 3px;
	overflow: auto;
	border-radius: 0 0 10px 10px;
	font-size: 14px;
	padding: 20px;
}
.amount-slider {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
}
.amount-slider > .slider-value {
	margin: 0 10px 0 15px;
	width: 60px;
	height: 45px;
}

.player-video {
	height: 290px;
	border-radius: 10px;
	font-size: 12px;
	padding: 20px;
}
.player-video > div.video {
	width: 410px;
	height: 215px;
	background: #282855;
	margin-top: 20px;
}

img.img-video {
	width: 100%;
	height: 100%;
}

.progress-player.progress {
	height: 5px;
	background: rgba(255, 255, 255, 0.15);
}

.progress-player > .progress-bar {
	background: linear-gradient(to right, #9834D7 0%, #3D79DC 100%);
}
.player-details {
	font-size: 14px;
}
.track-info {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.action-img {
	width: 55px;
	height: 40px;
	background: #282855;
	border-radius: 2px;
}

.item-player-list {
	display: grid;
	grid-template-columns: 55px 1fr;
	grid-column-gap: 10px;
	position: relative;
	margin-bottom: 38px;
}
.item-player-list:after {
	content: '';
	border: 2px solid #464677;
	border-radius: 2px;
	width: 100%;
	position: absolute;
	bottom: -20px;
}
.order-user > img {
	width: 12px;
	height: 12px;
	margin-right: 10px;
}

.order-user {
	display: flex;
	align-items: center;
	font-size: 13px;
}

.item-details {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.order-item {
	padding: 15px 20px;
	display: grid;
	grid-template-columns: 55px 1fr;
	grid-column-gap: 10px;
	border-radius: 10px;
}

.order-list {
	display: grid;
	grid-auto-rows: 70px;
	grid-row-gap: 5px;
	font-size: 14px;
	margin-bottom: 25px;
}

.item-action {
	display: flex;
	align-items: center;
}

.item-action > button {
	width: 35px;
	height: 35px;
	border-radius: 100%;
	margin: 0 20px;
}

.item-action > button:hover {
	content: 'в плеер';
	width: 105px;
	height: 35px;
	border-radius: 23px;
}

.item-action > button:hover:before {
	content: '+ В ПЛЕЕР';
	font-size: 12px;
	animation: fadein 2s;
}

@keyframes fadein {
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
}
@-moz-keyframes fadein { /* Firefox */
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
}
@-webkit-keyframes fadein { /* Safari and Chrome */
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
}
@-o-keyframes fadein { /* Opera */
	from {
		opacity:0;
	}
	to {
		opacity: 1;
	}
}

.item-action > button:hover span {
	display: none;
}

.arrow-right {
	width: 0;
	height: 0;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;

	border-left: 10px solid white;
}
.arrow-left {
	width: 0;
	height: 0;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;

	border-right: 10px solid white;
}

.player-actions {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}

button.player-button {
	border-radius: 100%;
	height: 45px;
	width: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.back-step, .next-step {
	cursor: pointer;
}
</style>
