<template>
	<div class="advancement">
		<div class="title text" :class="color_schema.title_text">МОИ ДОСТИЖЕНИЯ</div>
		<div class="advancement-list">

			<div class="advancement-item" :class="color_schema.item" v-b-toggle="'advancement-collapse-images'" aria-expanded="false">
				<div class="collapse-item">
					<div class="item-title">
						Бейджики
					</div>
					<div class="item-actions">
						<button style="border: 0" class="collapse-link btn-action" />
					</div>
				</div>
				<b-collapse id="advancement-collapse-images">
					<div class="advancement-collapse-images" :class="[color_schema.item, color_schema.text]">
						<div class="advancement-image"  v-for="item in badges">
							<img :src="item.url" :alt="item.filename" class="collapse-image">
							<div class="text">{{ item.filename }}</div>
						</div>
					</div>
				</b-collapse>
			</div>

			<div class="advancement-item" :class="color_schema.item" v-b-toggle="'advancement-collapse-sounds'" aria-expanded="false">
				<div class="collapse-item">
					<div class="item-title">
						Мелодии
					</div>
					<div class="item-actions">
						<button style="border: 0" class="collapse-link btn-action" />
					</div>
				</div>
				<b-collapse id="advancement-collapse-sounds">
					<div class="advancement-collapse-sounds" :class="[color_schema.item, color_schema.text]">
						<div class="advancement-sounds"  v-for="item in sounds">
							<img class="play-btn" src="../assets/play video.svg">
							<div class="text">message.mp3</div>
						</div>
					</div>
				</b-collapse>
			</div>

			<div class="advancement-item" :class="color_schema.item" v-b-toggle="'advancement-collapse-animation'" aria-expanded="false">
				<div class="collapse-item">
					<div class="item-title">
						Анимации Ника
					</div>
					<div class="item-actions">
						<button style="border: 0" class="collapse-link btn-action" />
					</div>
				</div>
				<b-collapse id="advancement-collapse-animation">
					<div class="advancement-collapse-animations" :class="[color_schema.item, color_schema.text]">
						<div class="advancement-animation"  v-for="item in ['Alice Lidell', 'Alice Lidell']">

							<div class="text">{{ item }}</div>
						</div>
					</div>
				</b-collapse>
			</div>

		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	
	export default {
		name: 'advancement',
		computed: {
			...mapGetters(['color_schema']),
			badges() {
				var number_arr = Array.from({length: 9}, (v, k) => k+1); 
				var arr = [];
				number_arr.forEach(function(el) {
					let filename = 'item' + el + '.png'
					arr.push({"url": require('../assets/badges/' + filename), "filename": filename })
				})
				return arr
			},
			sounds() {
				var number_arr = Array.from({length: 6}, (v, k) => k+1); 
				var arr = [];
				number_arr.forEach(function(el) {
					let filename = 'message' + el + '.mp3'
					arr.push({"url": '../assets/badges/' + filename, "filename": filename })
				})
				return arr
			}
		}
	}
</script>

<style scoped>
.advancement-item {
	border-radius: 10px;
	padding: 20px;
	margin-top: 20px;
}

.advancement-list {
	max-width: 770px;
}
.advancement-collapse-images {
	display: grid;
	grid-template-columns: repeat(5,1fr);
	grid-column-gap: 20px;
	grid-row-gap: 25px;
	padding-top: 25px;

}
.collapse-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.advancement {
	padding: 0 35px;
	min-height: 100%;
}

.advancement-collapse-sounds, .advancement-collapse-animations {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	padding-top: 25px;
}
.advancement-sounds, .advancement-animation {
	border-radius: 3px;
	border: 2px solid #595986;
	height: 85px;
	display: flex;
	align-items: center;
}


</style>
