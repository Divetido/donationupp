<template>
	<div class="content-app settings donat">
		<div class="donat-header">
			<div class="text" :class="color_schema.title_text">
				СПОСОБЫ ВЫВОДА ДОНАТОВ
			</div>
			<b-button v-b-modal.payments class="btn-add"></b-button>
		</div>
		<div class="donat-content">
			<div class="payment-list">
				<div class="payment-item" v-for="item in paymentItems" :class="color_schema.item">
					<div class="payment-info">
						<div class="payment-name" v-if="item.name == 'Credit card'">
							{{item.name}}
						</div>
						<img :src="item.icon" :alt="item.name">
					</div>
					<div class="payment-number">
						{{ item.number }}
					</div>
					<div class="payment-actions">
						<button style="border: 0" class="edit-link btn-action" />
						<button style="border: 0" class="delete-link btn-action" />
					</div>
				</div>
			</div>
			<div class="settings-donation-form text" v-if="!user">
				<div :class="color_schema.title_text">
					НАСТРОЙКИ ФОРМЫ ДОНАТА
				</div>
				<div class="description" :class="color_schema.text">
					Редактор страницы перевода вам пожертвований от подписчиков.
				</div>
				<div class="action-block">
					<div class="donation-form" :class="color_schema.item">
						<form id="donation-form">
							<label>Верхняя панель страницы</label>
							<div class="group-radio-form">

								<div class="group-input">
									<label >

										<div class="checkbox-form-donation">
											<input type="radio" name="background-default" value="default" v-model="background_image" class="form-donation-radio">
											<span class="custom-checkbox"></span>
											Стандартно
										</div>
										<div class="background-image-block default">

										</div>
									</label>
								</div>
								<div class="group-input">
									<label>

										<div class="checkbox-form-donation">
											<input type="radio" name="background-color" value="color" v-model="background_image" class="form-donation-radio">
											<span class="custom-checkbox"></span>
											Цвет
										</div>
										<div class="background-image-block color">

										</div>
									</label>
								</div>	
								<div class="group-input">
									<label  >

										<div class="checkbox-form-donation">
											<input type="radio" name="background-image" value="image" v-model="background_image" class="form-donation-radio">
											<span class="custom-checkbox"></span>
											Изображение
										</div>
										<div class="background-image-block image">
											<vue-dropzone 
											id="dropzone"
											ref="myVueDropzone"
											@vdropzone-file-added="showImageDropzone = !showImageDropzone" 
											@vdropzone-removed-file="showImageDropzone = !showImageDropzone" 
											:include-styling="false" 
											:options="dropzoneImageOptions" 
											:useCustomSlot="true"
											v-on:vdropzone-thumbnail="thumbnail"
											>
											<div class="dropzone-custom-content" ref="dropzoneContent" v-show="showImageDropzone">
												<div class="dropzone-custom-title">
													<img src="../assets/upload-cloud.svg" alt="Upload Cloud" class="upload-img">
													<div class="text" :class="color_schema.extra">ВЫБРАТЬ ФАЙЛ</div>
												</div>

												<div class="subtitle" :class="color_schema.text">JPG, PNG</div>
											</div>
										</vue-dropzone>
									</div>
								</label>
							</div>
						</div>

					</form>
				</div>
				<div class="donation-form-preview" :class="color_schema.item">
					<div class="top-block">
						<div :class="color_schema.text"> Превью </div>
						<router-link to="/form-donation" class="form-donation-page-link" :class="color_schema.title_text">
							Посмотреть полный размер
							<img src="../assets/right-arrow.svg" alt="arrow" class="arrow-icon">
						</router-link>
					</div>

					<div class="preview-form-donation-page">
						<form-donation/>
					</div>
				</div>

				<div class="slider-donation-form" :class="color_schema.item">
					<div>Минимальная сумма доната для заказа медиа</div>
					<div class="amount-slider">
						<b-form-slider ref="range" :min="0" :max="1200" v-model="donat_amount" />
						<div class="slider-value text">{{ donat_amount }}</div> EUR
					</div>
				</div>
				<div class="form-buttons">
					<div class="buttons">
						<button class="button-cancel">СБРОС</button>
						<button class="default-button">СОХРАНИТЬ</button>
					</div>
				</div>
			</div>
		</div>

	</div>

</div>
</template>

<script>

	import { mapGetters } from 'vuex'
	import vue2Dropzone from 'vue2-dropzone'
	import 'vue2-dropzone/dist/vue2Dropzone.min.css'

	export default {
		name: 'donat',
		components: {
			vueDropzone: vue2Dropzone
		},
		computed: {
			...mapGetters(['color_schema', 'user'])
		},
		data () {
			return {
				dropzoneImageOptions: {
					url: 'https://httpbin.org/post',
					thumbnailWidth: 150,
					maxFilesize: 3,
					headers: { 'My-Awesome-Header': 'header value' },
					maxFiles: 1,
					previewTemplate: this.template(),
				},
				showImageDropzone: true,
				donat_amount: 500,
				background_image: 'default',
				paymentItems: [
				{
					name: 'Credit card',
					icon: require('../assets/Credit card.svg'),
					number: '4275 **** **** 4563'
				},
				{
					name: 'Web Money',
					icon: require('../assets/webmoney-paying-logo.svg'),
					number: '+79281248796'
				},
				{
					name: 'Yandex Money',
					icon: require('../assets/yandex-pay-logo.svg'),
					number: '410011435701035'
				},
				{
					name: 'Qiwi',
					icon: require('../assets/qiwi.svg'),
					number: '+79281248796'
				}
				]

			}
		},
		methods: {
			template: function () {
				return `<div class="dz-preview dz-file-preview">
				<div class="dz-image">
				<div data-dz-thumbnail-bg></div>
				</div>
				<div class="dz-details">
					<div class="dz-filename"><span data-dz-name></span></div>
					<div data-dz-remove class="remove-icon"> </div>
				</div>
				<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
				<div class="dz-error-message"><span data-dz-errormessage></span></div>
				
				</div>
				`;
			},
			thumbnail: function(file, dataUrl) {
				var j, len, ref, thumbnailElement;
				if (file.previewElement) {
					file.previewElement.classList.remove("dz-file-preview");
					ref = file.previewElement.querySelectorAll("[data-dz-thumbnail-bg]");
					for (j = 0, len = ref.length; j < len; j++) {
						thumbnailElement = ref[j];
						thumbnailElement.alt = file.name;
						thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")';
					}
					return setTimeout(((function(_this) {
						return function() {
							return file.previewElement.classList.add("dz-image-preview");
						};
					})(this)), 1);
				}
			},
		}
	}
</script>

<style scoped>
.settings.donat {
	display: grid;
	grid-template-rows: 25px 1fr;
	grid-row-gap: 25px;
	grid-template-columns: 53.4%;
}
.donat-header {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.donat-header > .text {
	font-size: 13px;
	margin-right: 20px;
}
.payment-list {
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: 60px;
	grid-row-gap: 10px;
}
.payment-item {
	border-radius: 10px;
	padding: 0 25px;
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
	font-size: 13px;
	align-items: center;

}
.payment-name {
	font-size: 10px;
	margin-right: 5px;
}

.payment-info {
	display: flex;
}

.background-image-block {
	width: 160px;
	height: 65px;
	border-radius: 3px;
	margin-top: 15px;
	position: relative;
}

.background-image-block.default {
	background:	linear-gradient(#6B35A4, #3D59A7);
}

.background-image-block.color {
	background: #6C55D9;
}

form#donation-form > label {
	margin-bottom: 15px;
}
.settings-donation-form > .description {
	font-size: 11px;
}
.settings-donation-form {
	margin-top: 40px;
}

.group-radio-form {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.donation-form {
	padding: 30px 25px;
	grid-column: 1/2;
	grid-row: 1/2;
	border-radius: 10px 10px 0 0;
}

.action-block {
	display: grid;
	grid-template-columns: 560px 1fr;
	grid-template-rows: 1.5fr 1fr 1fr;
	grid-row-gap: 3px;
	grid-column-gap: 20px;
}

.donation-form-preview {
	grid-column: 2/2;
	grid-row: 1/3;
	width: 470px;
	border-radius: 10px;
	position: relative;
	padding: 20px;
}
.slider-donation-form {
	padding: 25px;
	grid-column: 1/2;
	grid-row: 2/3;
	border-radius: 0 0 10px 10px;
}

.form-buttons {
	grid-column: 1/2;
	grid-row: 3/4;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.form-buttons > .buttons {
	height: 45px;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

button.button-cancel {
	background: #434377;
	border: none;
	width: 100px;
	height: 100%;
	border-radius: 33px;
	color: white;
	box-shadow: #060333 0 3px 20px;
}

.preview-form-donation-page {
	position: absolute;
	width: 300%;
	transform: scale(0.3);
	transform-origin: top left;
	top: 17%;
	pointer-events: none;
}
.donation-form-preview > .top-block {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

</style>

<style scoped>

/*custom checkbox*/

.checkbox-form-donation {
	position: relative;
	padding: 0 25px;
}

input.form-donation-radio {
	display: none;
}

.custom-checkbox {
	position: absolute;
	top: 0;
	left: 0;
	height: 15px;
	width: 15px;
	background-color: transparent;
	border: 2px solid white;
	border-radius: 3px;
}

input.form-donation-radio:hover ~ .custom-checkbox,
input.form-donation-radio:checked ~ .custom-checkbox {
	background: url(../assets/check-radio.svg) no-repeat center, white;
}

.custom-checkbox::before {
	left: 9px;
	top: 5px;
	width: 5px;
	height: 10px;
	border: solid black;
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}

.background-image-block > div#dropzone > .dz-message > .dropzone-custom-content {
	height: 65px;
}


#dropzone .dz-preview {
	width: 160px;
	display: inline-block
}
#dropzone .dz-preview .dz-image {
	width: 160px;
	height: 65px;
}
#dropzone .dz-preview .dz-image > div {
	width: inherit;
	height: inherit;
	background-size: contain;
	background: no-repeat;
}
#dropzone .dz-preview .dz-image > img {
	width: 100%;
}

#dropzone .dz-details {
    position: absolute;
    bottom: -30px;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}
#dropzone .dz-success-mark, .dz-error-mark, .dz-remove {
	display: none;
}
div.remove-icon {
	background: url(../assets/remove-btn.svg);
	width: 20px;
	height: 20px;
}
</style>