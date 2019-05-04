<template>
	<div class="collapse-list" :class="list_class">
		<template v-for="(item,index) in items">

			<div class="widget-item" :class="color_schema.item" v-b-toggle="'collapse-' + index " aria-expanded="false">
				<div class="item-title">
					{{ item.title }}
				</div>
				<div class="item-actions">
					<button style="border: 0" class="copy-link btn-action" />
					<button style="border: 0" class="collapse-link btn-action" />
				</div>
			</div>
			<b-collapse :id="'collapse-' + index" class="widget-collapse collapse-content" accordion="my-collapse" role="tabpanel"  :class="color_schema.item"  v-for="(c_item, c_index) in item.collapseItem">
				<!-- <div class="collapse-content" :class="color_schema.item"  v-for="(c_item, c_index) in item.collapseItem"> -->
					<div class="collapse-checkbox">
						<label class="switch-checkbox" >
							<input type="radio" :name="'select-widget'+index" v-model="c_item.active">
							<span class="collapse-slider-checkbox round"></span>
						</label>
						<!-- {{c_item.active}} -->
					</div>
					<div class="collapse-counter">
						<span :class="color_schema.text">
							Количество:
						</span>
						{{c_item.count}}
					</div>
					<div class="collapse-animation">
						<span :class="color_schema.text">
							Анимация:
						</span>
						{{c_item.animation}}
					</div>
					<div class="collapse-actions">
						<button style="border: 0" class="edit-link btn-action" />
						<button style="border: 0" class="delete-link btn-action" />
					</div>
					<!-- </div> -->
				</b-collapse>
			</template>
		</div>
	</template>

	<script>
		export default {
			name: 'collapse-list'
		}
	</script>

	<style>

</style>