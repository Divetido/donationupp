<template>
	<div class="settings-app supports" >
		<div class="support-action">
			<div class="title text" :class="color_schema.title_text">
				ЦЕНТР ПОДДЕРЖКИ
			</div>
			<div class="support-input text">
				<img src="../assets/search.svg" alt="search" class="search-icon">
				<input type="text" name="support-question" placeholder="Введите свой вопрос…" :class="color_schema.title_text">	
			</div>
			<div class="support-button">
				<button class="default-button tex btn-search">
					СОЗДАТЬ СВОЙ ЗАПРОС
				</button>
			</div>
		</div>
		<div class="support-list">
			<template v-for="(item,index) in supportItem">

				<div class="support-item" :class="color_schema.item" v-b-toggle="'collapse-' + index " aria-expanded="false" @click="item.active = !item.active">
					<div class="item-title">
						{{ item.question }}
					</div>
					<div class="item-actions">
						<button style="border: 0" :class="[{'collapse-link': !item.active, 'collapse-link-up': item.active}, 'btn-action']" />
					</div>
				</div>
				<b-collapse :id="'collapse-' + index">
					<div class="support-collapse collapse-content" :class="[color_schema.item, color_schema.text]"  v-for="(c_item, c_index) in item.answers">
						{{c_item}}
					</div>
				</b-collapse>
			</template>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'support',
		data(){
			return {
				supportItem: [
				{
					question: 'УПРАВЛЕНИЕ АККАУНТОМ', 
					answers: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?'
					],
					active: false
				},
				{
					question: 'УПРАВЛЕНИЕ АККАУНТОМ', 
					answers: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?'
					],
					active: false
				},
				{
					question: 'УПРАВЛЕНИЕ АККАУНТОМ', 
					answers: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?'
					],
					active: false
				},
				{
					question: 'УПРАВЛЕНИЕ АККАУНТОМ', 
					answers: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor?'
					],
					active: false
				},

				]
			}
		},
		computed: {
			...mapGetters(['color_schema'])
		}
	}
</script>

<style scoped> 
.supports {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 45px auto 1fr;
}
.support-action {
	grid-column: 1/3;
	grid-row: 1/3;
	display: grid;
	grid-template-columns: repeat(3,1fr);
	grid-template-rows: 45px 1fr;
	grid-column-gap: 15px;
	align-items: center;
	font-size: 13px;
}
.support-list {
	grid-area: list;
	grid-row: 3/4;
	grid-column: 1/2;
	display: flex;
	flex-direction: column;
}
.support-button {
	height: 45px;
	display: flex;
	font-size: 12px;
}
.support-item {
	border-radius: 10px;
	grid-auto-rows: 60px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	padding: 0 20px;
	margin-top: 20px;
}

/*.collapse-link{
	background: url(../assets/play-button.svg) no-repeat center;
	height: 20px;
	width: 20px;
	background-size: 10px 5px;
}*/
.support-collapse {
	display: grid;
	grid-auto-rows: 60px;
	grid-row-gap: 3px;
	margin-top: 3px;
	align-items: center;
	padding: 0 20px;
	border-radius: 10px;
}
.support-collapse:hover {
	background: #434377;
}

.support-input {
	background: #37376A;
	border-radius: 25px;
	height: 45px;
	width: 528px;
	display: flex;
	align-items: center;
}

.support-input > input {
	width: 100%;
	background: transparent;
	border: none;
}
.btn-search {
	width: 100%;
}

</style>