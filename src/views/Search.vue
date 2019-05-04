<template>
	<div class="settings-app search">
		<div class="streamers-list">
			<router-link to="/profile">
				<div class="list-item text" :class="color_schema.item">
					<div class="info">
						<img src="../assets/avatar.png" alt="avatar" class="avatar-icon">
						<div class="text">Morgana</div>
					</div>
					<div class="subscribers">
						<div class="text" >
							<span :class="color_schema.text">Подписчиков </span> 3 тыс.
						</div>
					</div>
					<div class="streams">
						<div class="text">
							<span :class="color_schema.text">Стримов </span> 55
						</div>
					</div>
					<div class="btn-subscribe">
						<button class="default-button">
							<img src="../assets/+.svg" alt="+" class="icon-plus">
							ПОДПИСАТЬСЯ
						</button>
					</div>
				</div>
			</router-link>
			<router-link to="/profile">
				<div class="list-item text" :class="color_schema.item">
					<div class="info">
						<img src="../assets/avatar.png" alt="avatar" class="avatar-icon">
						<div class="text">Morgana</div>
					</div>
					<div class="subscribers">
						<div class="text" >
							<span :class="color_schema.text">Подписчиков </span> 
							3 тыс.
						</div>
					</div>
					<div class="streams">
						<div class="text">
							<span :class="color_schema.text">Стримов </span>
							55
						</div>
					</div>
					<div class="btn-subscribe">
						<button class="default-button">
							<img src="../assets/+.svg" alt="+" class="icon-plus">
							ПОДПИСАТЬСЯ
						</button>
					</div>
				</div>
			</router-link>
			<router-link to="/profile">
				<div class="list-item text" :class="color_schema.item">
					<div class="info">
						<img src="../assets/avatar.png" alt="avatar" class="avatar-icon">
						<div class="text">Morgana</div>
					</div>
					<div class="subscribers">
						<div class="text" >
							<span :class="color_schema.text">Подписчиков </span> 3 тыс.
						</div>
					</div>
					<div class="streams">
						<div class="text">
							<span :class="color_schema.text">Стримов </span> 55
						</div>
					</div>
					<div class="btn-subscribe">
						<button class="default-button">
							<img src="../assets/+.svg" alt="+" class="icon-plus">
							ПОДПИСАТЬСЯ
						</button>
					</div>
				</div>
			</router-link>
			<router-link to="/profile">
				<div class="list-item text" :class="color_schema.item">
					<div class="info">
						<img src="../assets/avatar.png" alt="avatar" class="avatar-icon">
						<div class="text">Morgana</div>
					</div>
					<div class="subscribers">
						<div class="text" >
							<span :class="color_schema.text">Подписчиков </span> 3 тыс.
						</div>
					</div>
					<div class="streams">
						<div class="text">
							<span :class="color_schema.text">Стримов </span> 55
						</div>
					</div>
					<div class="btn-subscribe">
						<button class="default-button">
							<img src="../assets/+.svg" alt="+" class="icon-plus">
							ПОДПИСАТЬСЯ
						</button>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'search',
		computed: {
			...mapGetters(['color_schema', 'user'])
		}
	}
</script>

<style>
.icon-plus {
	width: 10px;
	height: 10px;
	margin: 0 10px;
}

.streamers-list {
	display: grid;
	grid-row-gap: 10px;
	grid-template-columns: minmax(200px, 700px);
}
.list-item {
	display: grid;
	grid-template-columns: repeat(4,1fr);
	font-size: 11px;
	height: 70px;
	border-radius: 10px;
	align-items: center;
	padding: 0 25px;
}
.list-item > .info {
	display: flex;
	align-items: center;
}
.btn-subscribe {
	height: 35px;
}
.btn-subscribe > button {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}
</style>