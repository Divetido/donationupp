<template>
	<div class="content-app1 profile">
		<div class="profile-block">
			<div class="user-info" :class="color_schema.item">
				<img src="../assets/profile-avatar.png" alt="profile-avatar">
				<div class="text">
					Morgana_1234
				</div>
			</div>
			<div class="user-statistic text" :class="color_schema.item">
				<div class="subscribe-staistic">
					<div> 2 тыс.</div>
					<div class="small-text" :class="color_schema.text"> Подписчиков</div>
				</div>
				<div class="payment-statistic">
					<div>30 </div>
					<div  class="small-text" :class="color_schema.text"> Стримов</div>
				</div>
				<div class="advancement-statistic">
					<div> 5 тыс.</div>
					<div  class="small-text" :class="color_schema.text"> Просмотров</div>
				</div>
			</div>
		</div>
		<div class="last-streams text">
			<div class="stream-block-top" :class="color_schema.item">
				<div class="title">
					Последние стримы
				</div>
				<div class="stream-link">
					<div class="text">
						Смотреть все
					</div> 
					<img src="../assets/right-arrow.svg" alt="arrow" class="arrow-icon">
				</div>
			</div>
			<div class="stream-block-bottom" :class="color_schema.item">
				<img src="../assets/img.svg" alt="img" class="video-img">
				<img src="../assets/img.svg" alt="img" class="video-img">
				<img src="../assets/img.svg" alt="img" class="video-img">
				<div class="text">
					Let's Play GRIS Gameplay Part 1 - Artistic Narrative Platformer [First 45 Minutes Game...
				</div>
				<div class="text">
					♪ Gris Main Theme - Piano Cover (with sheet music) ♫
				</div>
				<div class="text">
					GRIS - Обзор игр - Первый взгляд | Утрата
				</div>
			</div>
		</div>
		<div class="profile-actions">
			<button class="default-button">
				<img src="../assets/+.svg" alt="+" class="icon-plus">
				ПОДПИСАТЬСЯ
			</button>
			<button @click="$router.push('form-donation')" class="default-button">
				ОТПРАВИТЬ ДЕНЬГИ
			</button>
		</div>
		<div class="donat-reward">
			<div class="reward-title" :class="color_schema.title_text">
				Награды за донат
			</div>
			<div class="reward-info">
				<div class="reward-block" v-for="item in rewardItems">
					<div class="reward-block-top text" :class="color_schema.item">
						<div class="amount">
							{{ item.amount }} EUR
						</div>
						<div class="text" :class="color_schema.text">
							Суммарный донат
						</div>
					</div>
					<div class="reward-block-bottom text" :class="color_schema.item">
						<div class="milestone-badge">
							<div class="count">
								{{item.badge_count}}
							</div>
							<div class="inscription" :class="color_schema.text">
								Бейдж
							</div>
						</div>
						<div class="animation">
							<div class="count">
								{{item.animation_count}}
							</div>
							<div class="inscription  " :class="color_schema.text">
								Анимация
							</div>
						</div>
						<div class="sound">
							<div class="count">
								{{item.sound_count}}
							</div>
							<div class="inscription" :class="color_schema.text">
								Мелодия
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'profile',
		data() {
			return {
				rewardItems: [
				{ amount: 250, badge_count: 2, animation_count: 2, sound_count: 2 },
				{ amount: 500, badge_count: 5, animation_count: 5, sound_count: 5 },
				{ amount: 1200, badge_count: 10, animation_count: 10, sound_count: 10 },
				{ amount: 1200, badge_count: 10, animation_count: 10, sound_count: 10 },
				{ amount: 1200, badge_count: 10, animation_count: 10, sound_count: 10 },
				]
			}
		},
		computed: {
			...mapGetters(['color_schema', 'user'])
		}
	}
</script>

<style scoped> 
.arrow-icon {
	width: 21px;
	height: 15px;
}

.stream-link {
	font-size: 12px;
}

.stream-block-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 12px;
	padding: 0 25px;
}
.stream-link > img {
	margin-left: 8px;
}
.stream-link {
	display: flex;
	align-items: center;
}
.stream-block-bottom {
	font-size: 10px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-row-gap: 20px;
	grid-column-gap: 11px;
	padding: 25px;
}

.video-img {
	width: 240px;
	height: 125px;
}

.last-streams {
	display: grid;
	grid-row-gap: 2px;
}
.profile-actions {
	display: grid;
	grid-auto-rows: 45px;
	grid-row-gap: 20px;
	font-size: 12px;
}

.profile-actions > button {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.reward-title {
	margin-bottom: 25px;
}
.reward-info {
	display: grid;
	grid-template-columns: repeat(3, 250px);
	grid-column-gap: 15px;
	grid-row-gap: 15px;
	margin-bottom: 30px;
}

.reward-block {
	display: grid;
	grid-row-gap: 3px;
	grid-template-columns: 255px;
	grid-template-rows: repeat(2, 100px);
}

.reward-block-top {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.reward-block-bottom {
	display: flex;
	align-items: center;
	justify-content: center;
}
.profile {
    grid-template-rows: 305px 1fr;
}
.donat-reward {
    grid-column: 2/2;
    grid-row: 2/3;
}
</style>