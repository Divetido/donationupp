<template>
	<div class="list-activity">
		<div class="item-activity" v-for="(item, index) in activities">
			<div class="title-item" :class="color_schema.text">
				{{item.title}}
			</div>
			<div class="amount-item">
				<template v-if="(item.amount == '' && user)">
					<img :src="update_icon(item.subscribe.state)" class="subscriber-icon">
					<span class="strick dark">
						{{item.subscribe.count}} месяц
					</span>
				</template>
				<template v-if="(item.amount != '')">
					{{item.amount}}
				</template>
			</div>
			<div class="date-activity" :class="color_schema.text">
				{{item.date}}
			</div>
			<div class="user-info-activity">
				<div class="user-name">
					{{item.user.nickname}}
				</div>
				<img :src="item.user.avatar" alt="avatar" class="avatar-icon">
			</div>
			<div class="message-activity" >
				<img :src="state_message(item.message)" alt="message" class="message-img" v-tooltip.click.top.end="{content: item.message, class: 'tooltip-custom' }">
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapState } from 'vuex'

	export default {
		name: 'activity',
		data () {
			return {
				icon_path: {
					'simple': require('../assets/simple.svg'),
					'paid': {
						dark: require('../assets/platn.svg'),
						light: require('../assets/platn_dark.svg') },
						'premium': require('../assets/prem-dark.svg')
					},
					busy: false
				}
			},
			props: ['type'],
			computed: {
				...mapGetters(['color_schema', 'user', 'state_checkbox']),
				...mapState(['activities'])
			},
			mounted() {
				const listElm = document.querySelector('.activity-block');
				listElm.addEventListener('scroll', e => {
					if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
						this.loadMore();
					}
				});
				this.$store.dispatch('fetchActivities', this.type)
			},
			methods: {
				state_message (value) {
					if (value != '') {
						return require('../assets/active message.svg')
					} else {
						return require('../assets/message.svg')
					}
				},
				update_icon (value) {
					if (value == 'paid') {
						return (this.state_checkbox) ? this.icon_path[value]['light'] : this.icon_path[value]['dark']
					} else {
						return this.icon_path[value]
					}
				},
				loadMore() {
					this.busy = true;
					setTimeout(() => {
						this.$store.dispatch('updateActivities', this.type);
						this.busy = false;
					}, 200);
				}
			}
		}
	</script>

	<style scoped>
	.user-info-activity {
		justify-self: end;
		display: flex;
	}

	.user-name {
		margin-right: 10px;
	}

	.item-activity {
		display: grid;
		grid-template-columns: 1fr 125px 1fr 1fr 25px;
		position: relative;
		border-top: 1px solid #515171;
		padding: 5px 0;
		align-items: center;
		grid-column-gap: 20px;
	}

	.list-activity {
		display: grid;
		grid-auto-rows: 45px;
	}

	.amount-item {
		/* height: 45px; */
		display: flex;
		align-items: center;
	}
	.amount-item > img {
		width: 25px;
		height: 25px;
	}
	.date-activity {
		justify-self: end;
	}
</style>
