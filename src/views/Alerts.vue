<template>
	<div class="content-app settings alerts">
		<b-collapse id="alerts-actions" accordion role="tabpanel">
			<div class="alert-actions">
				<div class="alert-title text white-text">
					НОВОЕ ОПОВЕЩЕНИЕ О ДОНАТЕ
				</div>
				<div class="action-buttons">
					<button class="default-button text" @click="actions = !actions" v-b-toggle.alerts-actions>
						ДОБАВИТЬ
					</button>
					<button v-if="actions" class="btn-cancel" @click="actions = !actions" v-b-toggle.alerts-actions></button>
				</div>
			</div>
			<div class="alert-form">
				<div class="alerts-range" :class="color_schema.item">
					<div class="custom-form-alerts">
						<div class="form-alert-range">
							<label :class="color_schema.text" for="alert-range">
								Диапазон доната для алерта, EUR
							</label>
							<div class="alert-range-slider">
								<div class="slider-value text">{{Math.min(...range_value) }} </div>
								<b-form-slider ref="range" :min="0" :max="1000" v-model="range_value" />
								<div class="slider-value text">{{Math.max(...range_value) }}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="alert-tabs text" :class="color_schema.item">
					<a @click="activetab=1" class="alert-tab" :class="[ activetab === 1 ? 'active' : '' ]">Заголовок</a>
					<div class="tab-line"  :class="color_schema.global"></div>
					<a @click="activetab=2" class="alert-tab" :class="[ activetab === 2 ? 'active' : '' ]">Сообщение</a>
					<div class="tab-line"  :class="color_schema.global"></div>
					<a @click="activetab=3" class="alert-tab" :class="[ activetab === 3 ? 'active' : '' ]">Изображение</a>
					<div class="tab-line" :class="color_schema.global"></div>
					<a @click="activetab=4" class="alert-tab" :class="[ activetab === 4 ? 'active' : '' ]">Звук</a>

				</div>

				<div class="alert-form-content">
					<div v-if="activetab === 1" class="tabcontent" :class="color_schema.item">
						<div class="form-group">
							<input type="text" name="alert-title" v-model="alert_title" class="alert-input">
						</div>
						<div class="preview-title" :class="[color_schema.global, color_schema.text]" :style="{color: alert_title_color, fontSize: alert_title_font_size + 'px'}" v-html="previewTitle">

						</div>
						<div class="form-format-text">
							<div class="form-block2">
								<div class="form-group input-title-font">
									<label class="text" :class="color_schema.text" >
										Шрифт
									</label>
									<select-block id="alert-title-font" :value="alert_title_font" :options="[{value: alert_title_font}]" />
								</div>
								<div class="form-group form-text-align">
									<label class="text" :class="color_schema.text" >
										Выравнивание текста
									</label>
									<div class="radion-text">
										<label>
											<input type="radio" name="text-title-align" value="left" class="text-title-align" v-model="title_align">
											<img src="../assets/left-text.svg" alt="text-title-align" class="text-title-align">
										</label>
										<label>
											<input type="radio" name="text-title-align" value="center" class="text-title-align" v-model="title_align" >
											<img src="../assets/center-text.svg" alt="text-title-align" class="text-title-align">
										</label>
										<label>
											<input type="radio" name="text-title-align" value="right" class="text-title-align" v-model="title_align">
											<img src="../assets/right-text.svg" alt="text-title-align" class="text-title-align">
										</label>
									</div>

									<div>

									</div>
								</div>
							</div>
							<div class="form-block1">
								<div class="form-group input-title-color">
									<label class="text" :class="color_schema.text" for="color-title">
										Цвет текста
									</label>
									<color-picker :color="alert_title_color" v-model="alert_title_color" />
								</div>
								<div class="form-group input-title-font-size">
									<label for="alert-font-size" class="text" :class="color_schema.text">
										Размер текста
									</label>
									<input type="number" min="1" max="36" name="alert-font-size" v-model="alert_title_font_size" class="alert-input">
								</div>
							</div>
							<div class="form-block1 input-title-style" :class="color_schema.text">
								<div class="form-group">
									Жирный
									<label class="switch-checkbox" for="bold-style">

										<input type="checkbox" id="bold-style" v-model="title_style.bold">
										<span class="alert-slider-checkbox round"></span>
									</label>
								</div>
								<div class="form-group">
									Курсив
									<label class="switch-checkbox" for="cursive-style">

										<input type="checkbox" id="cursive-style" v-model="title_style.italic">
										<span class="alert-slider-checkbox round"></span>
									</label>

								</div>
							</div>

						</div>
					</div>
					<div v-if="activetab === 2" class="tabcontent" :class="color_schema.item">
						<div class="preview-message" :class="[color_schema.global, color_schema.text]" :style="{color: alert_message_color, fontSize: alert_message_font_size + 'px'}" v-html="alert_message">

						</div>
						<div class="form-format-text">
							<div class="form-block2">
								<div class="form-group input-title-font">
									<label class="text" :class="color_schema.text" >
										Шрифт
									</label>
									<select-block id="alert-title-font" :value="alert_message_font" :options="[{value: alert_title_font}]" />
								</div>
								<div class="form-group">
									<label class="text" :class="color_schema.text" >
										Выравнивание текста
									</label>
									<div class="radion-text">
										<label>
											<input type="radio" name="text-title-align" value="left" class="text-title-align" v-model="message_align">
											<img src="../assets/left-text.svg" alt="text-title-align" class="text-title-align">
										</label>
										<label>
											<input type="radio" name="text-title-align" value="center" class="text-title-align" v-model="message_align" >
											<img src="../assets/center-text.svg" alt="text-title-align" class="text-title-align">
										</label>
										<label>
											<input type="radio" name="text-title-align" value="right" class="text-title-align" v-model="message_align">
											<img src="../assets/right-text.svg" alt="text-title-align" class="text-title-align">
										</label>
									</div>

									<div>

									</div>
								</div>
							</div>
							<div class="form-block1">
								<div class="form-group input-title-color">
									<label class="text" :class="color_schema.text" for="color-title">
										Цвет текста
									</label>
									<color-picker :color="alert_message_color" v-model="alert_message_color" />
								</div>
								<div class="form-group input-title-font-size">
									<label for="alert-font-size" class="text" :class="color_schema.text">
										Размер текста
									</label>
									<input type="number" min="1" max="36" name="alert-font-size" v-model="alert_message_font_size" class="alert-input">
								</div>
							</div>
							<div class="form-block1 input-title-style" :class="color_schema.text">
								<div class="form-group">
									Жирный
									<label class="switch-checkbox" for="bold-style">

										<input type="checkbox" id="bold-style" v-model="message_style.bold">
										<span class="alert-slider-checkbox round"></span>
									</label>
								</div>
								<div class="form-group">
									Курсив
									<label class="switch-checkbox" for="cursive-style">

										<input type="checkbox" id="cursive-style" v-model="message_style.italic">
										<span class="alert-slider-checkbox round"></span>
									</label>

								</div>
							</div>

						</div>
					</div>
					<div v-if="activetab === 3" class="tabcontent" :class="color_schema.item">
						<vue-dropzone 
						id="alerts-dropzone" 
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
								<div class="text" :class="color_schema.extra">Drag & Drop file here</div>
							</div>

							<div class="subtitle">JPG, PNG, GIF, WEBM, AVI, MPEG</div>
						</div>
					</vue-dropzone>
				</div>
				<div v-if="activetab === 4" class="tabcontent" :class="color_schema.item">
					<vue-dropzone id="dropzone" @vdropzone-file-added="showSoundDropzone = !showSoundDropzone" :include-styling="false" :options="dropzoneSoundOptions" :useCustomSlot="true">
						<div class="dropzone-custom-content  sound-dropzone" ref="dropzoneContent" v-show="showSoundDropzone">
							<div class="dropzone-custom-title">
								<img src="../assets/upload-cloud.svg" alt="Upload Cloud" class="upload-img">
								<div class="text" :class="color_schema.extra">Drag & Drop file here</div>
							</div>
						</div>

						<div class="dz-details">
							<div class="dz-size"><span data-dz-size></span></div>
							<div class="dz-filename"><span data-dz-name></span></div>
						</div>

					</vue-dropzone>

					<div class="form-alert-sound-slider">
						<label :class="color_schema.text" for="alert-range">
							Продолжительность
						</label>
						<div class="alert-sound-slider">
							<b-form-slider  :min="0" :max="100" v-model="durationSound"/>
							<div class="slider-value text">{{ durationSound }}</div>
							<span>sec</span>
						</div>
					</div>

					<div class="form-alert-sound-slider">
						<label :class="color_schema.text" for="alert-range">
							Громкость
						</label>
						<div class="alert-sound-slider">
							<b-form-slider  :min="0" :max="100"  v-model="volumeSound"/>
							<div class="slider-value text">{{ volumeSound }}</div>
							<span>%</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="alert-preview" :class="color_schema.item">
			<div class="preview-action">
				<div class="text " :class="color_schema.text">
					Превью
				</div>
				<div class="modal-preview">
					<img v-b-modal.preview-modal src="../assets/active-setting-icon.svg" class="preview-icon">
					<div v-b-modal.preview-modal class="text">НАСТРОИТЬ ВИД</div>
				</div>
			</div>

			<div class="custom-alert" :class="color_schema.global">
				<div class="alert-custom-block">
					<div class="custom-alert-image">
						<img :src="AlertImage" alt="alert-image">
					</div>
					<div class="custom-alert-title" :style="titleStyleoptions" v-html="alert_title">
					</div>
					<div class="custom-alert-message" :style="messageStyleoptions" v-html="alert_message">
					</div>
				</div>
			</div>

		</div>

	</b-collapse>

	<div class="donat-alert">
		<div class="donat-alert-header">
			<div class="text" :class="color_schema.title_text">
				Оповещение о донате
			</div>
			<button class="default-button text" v-show="!actions" @click="actions = !actions" v-b-toggle.alerts-actions>
				{{ 'ДОБАВИТЬ'}}
			</button>
		</div>
		<div class="donat-alert-list">
			<div class="donat-alert-item" v-for="(item, index) in alerts" :class="color_schema.item">
				<div class="alert-item-checkbox" >
					<label class="switch-checkbox" :for="'select-alert'+index">
						<input type="checkbox" :id="'select-alert'+index" v-model="item.active" :key="'select-alert' +index">
						<span class="alert-slider-checkbox round"></span>
					</label>
				</div>
				<div class="alert-amount">
					<div class="text" :class="color_schema.text">
						Сумма:
					</div>
					<div class="range-amount">
						{{item.amount.min}} < {{item.amount.max}}
					</div>

				</div>
				<div class="alert-item-actions">
					<button style="border: 0" class="preview-link btn-action" />
					<button style="border: 0" class="copy-link btn-action" />
					<button style="border: 0" class="edit-link btn-action" />
					<button style="border: 0" class="delete-link btn-action" v-b-modal.destroy-modal/>
				</div>
			</div>
		</div>
	</div>
	<div class="subscribe-alert">
		<div class="subscribe-alert-header">
			<div class="text" :class="color_schema.title_text">
				Оповещение о стриках подписок
			</div>
			<button class="default-button text" @click="actions = !actions" v-b-toggle.alerts-actions>
				{{ actions ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}}
			</button>
		</div>
		<div class="subscribe-alert-list">
			<div class="subscribe-alert-item" v-for="(item, index) in subscribeItems" :class="color_schema.item">
				<div class="subscribe-item-checkbox">
					<label class="switch-checkbox" :for="'select-alert' + index">
						<input type="checkbox" :id="'select-alert' + index" v-model="item.active" :key="'select-alert' + index">
						<span class="alert-slider-checkbox round"></span>
					</label>
				</div>
				<div class="subscribe-strick">
					<div class="text" :class="color_schema.text">
						Стрик
					</div>
					<span class="strick" :class="color_schema.global">
						{{ item.strick }}
					</span>

				</div>
				<div class="subscribe-item-type">
					<div class="subscribe-icon">
						<img :src="item.icon" :alt="item.type">
					</div>
					<div class="text subscribe-type">
						{{ item.type }}
					</div>
				</div>
				<div class="subscribe-item-actions">
					<button style="border: 0" class="preview-link btn-action" />
					<button style="border: 0" class="copy-link btn-action" />
					<button style="border: 0" class="edit-link btn-action" />
					<button style="border: 0" class="delete-link btn-action" v-b-modal.destroy-modal />
				</div>
			</div>
		</div>
	</div>
	<preview-modal/>
	<destroy-modal title="Алерт" />
</div>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	import SelectBlock from '@/components/SelectBlock.vue'
	import ColorPicker from '@/components/widget-component/ColorPicker.vue'
	import bFormSlider from 'vue-bootstrap-slider/es/form-slider'
	import PreviewModal from '@/components/modals/PreviewModal.vue'
	import vue2Dropzone from 'vue2-dropzone'
	import 'vue2-dropzone/dist/vue2Dropzone.min.css'

	export default {
		name: 'alerts',
		components: {
			SelectBlock,
			ColorPicker,
			bFormSlider,
			PreviewModal,
			vueDropzone: vue2Dropzone
		},
		data () {
			return {
				alert_image: '',
				durationSound: 15,
				volumeSound: 50,
				dropzoneImageOptions: {
					url: 'https://httpbin.org/post',
					thumbnailWidth: 150,
					maxFilesize: 3,
					headers: { 'My-Awesome-Header': 'header value' },
					addRemoveLinks: true,
					maxFiles: 1,
					previewTemplate: this.template()
				},
				dropzoneSoundOptions: {
					url: 'https://httpbin.org/post',
					thumbnailWidth: 150,
					maxFilesize: 10,
					headers: { 'My-Awesome-Header': 'header value' },
					addRemoveLinks: true,
					maxFiles: 1
				},
				alert_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute reprehenderit dolor in irure in voluptate velit cillum dolore pariatur.',
				title_align: 'center',
				message_align: 'center',
				title_style: { bold: true, italic: false },
				message_style: { bold: true, italic: false },
				alert_title_font_size: 12,
				alert_message_font_size: 12,
				alert_title_color: '#A1A1C3',
				alert_message_color: '#A1A1C3',
				alert_title_font: 'Montserrat',
				alert_message_font: 'Montserrat',
				range_value: [100, 500],
				activetab: 1,
				actions: false,
				alert_title: '{{user}} перевел вам {{amount}}',
				subscribeItems: [
				{ id: 1, active: true, strick: '1 месяц', icon: require('../assets/simple-icon.svg'), type: 'Простая подписка' },
				{ id: 2, active: true, strick: '2 месяца', icon: require('../assets/prem-dark.svg'), type: 'Премиум подписка' }
				],
				showImageDropzone: true,
				showSoundDropzone: true
			}
		},
		computed: {
			...mapState(['alerts']),
			...mapGetters(['color_schema']),
			previewTitle () {
				return this.alert_title.replace(/{{user}}|{{amount}}/gi, function (value) { return ("<span style='color: white' >" + value + '</span>') })
			},
			titleStyleoptions () {
				return {
					color: this.alert_title_color,
					textAlign: this.title_align,
					fontSize: this.alert_title_font_size + 'px',
					fontFamily: this.alert_title_font,
					fontStyle: this.title_style
				}
			},
			messageStyleoptions () {
				return {
					color: this.alert_message_color,
					textAlign: this.message_align,
					fontSize: this.alert_message_font_size + 'px',
					fontFamily: this.alert_message_font,
					fontStyle: this.message_style
				}
			},
			AlertImage () {
				return this.alert_image == '' ? require('../assets/Image 23.png') : this.alert_image
			}
		},
		methods: {
			...mapActions(['fetchAlerts', 'removeAlert']),
			hideImageDropzone () {
				this.showImageDropzone = false
			},
			hideSoundDropzone () {
				this.showSoundDropzone = false
			},
			template: function () {
				return `<div class="dz-preview dz-file-preview">
				<div class="dz-details">
				<div class="dz-filename"><span data-dz-name></span></div>
				<div data-dz-remove class="remove-icon"> </div>
				</div>
				<div class="dz-image">
				<div data-dz-thumbnail-bg></div>
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
					console.log('qwe',file.previewElement)
					console.log('qwe1',file.previewElement.classList)
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
		},
		mounted() {
			this.fetchAlerts()
		}
	}
</script>

<style>

.switch-checkbox {
	position: relative;
	display: inline-block;
	width: 36px;
	height: 20px;
}

.switch-checkbox input {
	opacity: 0;
	width: 0;
	height: 0;
}

label.switch-checkbox {
	margin: 0;
}

.alert-slider-checkbox {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #7E7EA5;
	-webkit-transition: .4s;
	transition: .4s;
}

.alert-slider-checkbox:before {
	position: absolute;
	content: "";
	height: 18px;
	width: 18px;
	left: 0px;
	bottom: 0px;
	top: 1px;
	background:white;
	-webkit-transition: .4s;
	transition: .4s;
}

input:checked + .alert-slider-checkbox {
	background-color: #6C55D9;
}

/*input:checked + .collapse-slider-checkbox:before {
  background: white;
  background-size: 50% auto, cover;
  }*/

  input:focus + .alert-slider-checkbox {
  	box-shadow: 0 0 1px #2C2C43;
  }

  input:checked + .alert-slider-checkbox:before {
  	-webkit-transform: translateX(18px);
  	-ms-transform: translateX(18px);
  	transform: translateX(18px);
  }
  .alert-slider-checkbox.round {
  	border-radius: 23px;
  }

  .alert-slider-checkbox.round:before {
  	border-radius: 50%;
  }

  .copy-link {
  	background: url(../assets/copy-content.svg) no-repeat center;
  	height: 20px;
  	width: 20px;
  }
  .preview-link {
  	background: url(../assets/player.svg) no-repeat center;
  	height: 20px;
  	width: 20px;
  }

  .copy-link:hover, .copy-link:focus {
  	background: url(../assets/copy-content-active.svg) no-repeat center;
  	height: 20px;
  	width: 20px;
  }

  .alert-link{
  	background: url(../assets/play-button.svg) no-repeat center;
  	height: 20px;
  	width: 20px;
  	background-size: 10px 5px;
  }

  .donat-alert-list, .subscribe-alert-list {
  	font-size: 11px;
  	grid-column: 1/2;
  }

  .alerts.settings {
  	display: flex;
  	flex-direction: column;
  	margin-bottom: 25px;
  }
  .donat-alert-header, .subscribe-alert-header {
  	display: flex;
  	align-items: center;
  	justify-content: flex-start;
  }

  .donat-alert, .subscribe-alert {
  	display: grid;
  	grid-template-columns: 1.1fr 1fr;
  	grid-template-rows: 45px 1fr;
  	grid-row-gap: 15px;
  	margin-bottom: 20px;
  }
  .donat-alert-header > .text, .subscribe-alert-header > .text {
  	font-size: 13px;
  	margin-right: 15px;
  }

  .donat-alert-list, .subscribe-alert-list {
  	display: grid;
  	grid-auto-rows: 60px;
  	grid-row-gap: 10px;
  	grid-column: 1/2;
  }

  .donat-alert-item {
  	border-radius: 10px;
  	display: grid;
  	padding: 0 20px;
  	grid-template-columns: 50px 1fr 160px;
  	align-items: center;
  }

  .range-amount {
  	margin-left: 5px;
  }

  .alert-amount, .subscribe-item-type, .subscribe-strick {
  	display: flex;
  	align-items: center;
  }

  .subscribe-icon {
  	width: 20px;
  	height: 20px;
  	margin-right: 10px;
  }

  span.strick {
  	padding: 5px 18px;
  	border-radius: 20px;
  	margin-left: 10px;
  }
  .subscribe-alert-item {
  	border-radius: 10px;
  	display: grid;
  	padding: 0 20px;
  	grid-template-columns: 50px 1fr 1fr 160px;
  	align-items: center;
  }

  .alert-preview {
  	grid-column: 2/2;
  	grid-row: 2/3;
  	border-radius: 10px;
  	height: 325px;
  	padding: 25px 20px;
  	font-size: 12px;
  }

  .alert-form {
  	grid-column: 1/2;
  	grid-row: 2/3;
  }

  .alert-actions {
  	grid-column: 1/2;
  	grid-row: 1/2;
  }

  div#alerts-actions {
  	display: grid;
  	grid-template-columns: 1.1fr 1fr;
  	grid-template-rows: 45px 1fr;
  	grid-row-gap: 25px;
  	grid-column-gap: 10px;
  }

  .alert-actions {
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	font-size: 13px;
  }

  .action-buttons {
  	height: 45px;
  	display: flex;
  	font-size: 12px;
  }

  button.btn-cancel {
  	background: url(../assets/btn-close.svg) no-repeat center, #434377;
  	background-size: 50% auto, cover;
  	width: 45px;
  	border-radius: 100%;
  	height: 100%;
  	border-color: transparent;
  	margin-left: 15px;
  }

  .slider-track {
  	background: #525286 !important;
  	height: 5px !important;
  }
  .custom-group-form {
  	display: flex;
  }
  .alerts-range {
  	border-top-left-radius: 10px;
  	border-top-right-radius: 10px;
  }
  .tabcontent {
  	border-bottom-left-radius: 10px;
  	border-bottom-right-radius: 10px;
  	padding: 25px;
  }
  .alert-tabs {
  	height: 60px;
  	display: flex;
  	align-items: center;
  	justify-content: space-around;
  	/*padding: 0 25px;*/
  	font-size: 12px;
  	border-top: 3px solid #282855;
  	border-bottom: 3px solid #282855;
  }

  .alert-tab {
  	padding: 20px;
  	cursor: pointer;
  }

  .tab-line {
  	height: 30px;
  	width: 3px;
  }

  .form-alert-range {
  	padding: 25px;
  }

  input.alert-input {
  	background: transparent;
  	border-radius: 3px;
  	border: 2px solid #595986;
  	color: white;
  	height: 45px;
  	font-size: 12px;
  	padding: 15px;
  	width: 100%;
  }
  .alert-range-slider {
  	display: grid;
  	grid-template-columns: 1fr 10fr 1fr;
  	align-items: center;
  	justify-items: center;
  	grid-column-gap: 15px;
  }

  .slider-selection {
  	background: #6957D9 !important;
  }

  .slider-handle.round {
  	background: #6957D9 !important;
  	width: 15px !important;
  	height: 15px !important;
  	border: 3px solid white !important;
  }

  .slider-value {
  	border: 2px solid #595986;
  	width: 45px;
  	height: 45px;
  	/* text-align: center; */
  	display: flex;
  	align-items: center;
  	justify-content: center;
  }

  .slider.slider-horizontal {
  	width: 100% !important;
  	margin: 0 !important;
  }

  .preview-title {
  	height: 80px;
  }
  .preview-message {
  	padding: 15px;
  }

  .preview-title, .preview-message {
  	/*width: 520px;*/
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	margin-bottom: 25px;
  }

  button#alert-title-font {
  	width: 325px;
  }

  input.text-title-align {
  	display: none;
  }

  img.text-title-align {
  	display: block;
  	border: 2px solid #595986;
  	padding: 13px;
  	cursor: pointer;
  	border-radius: 3px;
  	/*margin-right: 15px;*/
  	height: 45px;
  	width: 45px;
  }

  .form-block1 {
  	font-size: 12px;
  	display: grid;
  	grid-template-columns: auto 1fr;
  	grid-column-gap: 20px;
  }

  .input-title-font-size {
  	width: 140px;
  }
  .input-title-color {
  	width: 175px;
  }
  .input-title-font {
  	width: 100%;
  }
  .btn-group {
  	width: 100% !important;
  }
  .btn-group > .btn {

  	display: flex !important;
  	align-items: center !important;
  	justify-content: space-between !important;
  }

  .input-title-style {
  	font-size: 12px;
  	font-family: 'MontserratBold';
  }
  .input-title-style > .form-group {
  	margin: 1em 0 0 0;
  }

  .dropzone-custom-content {
  	font-size: 12px;
  	/* display: none; */
  	border: 2px dashed #595986;
  	background: transparent;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	height: 130px;
  	cursor: pointer;
  	flex-direction: column;
  }
  .dropzone-custom-title {
  	display: flex;
  	align-items: center;
  	justify-content: center;
  }

  .upload-img {
  	margin-right: 8px;
  }

  .dz-message {

  }
  .dz-image {
  	max-height: 130px;
  	max-width: 130px;
  }
  .dz-preview {
  	position: relative;

  }

  .sound-dropzone {
  	max-height: 45px;
  }

  .d-inline-block {
  	width: 100%;
  }

  .alert-sound-slider {
  	display: grid;
  	grid-template-columns: 1fr auto 10px;
  	grid-column-gap: 15px;
  	align-items: center;
  	justify-items: center;
  }

  .form-alert-sound-slider {
  	font-size: 12px;
  	margin-top: 25px;
  }

  .radion-text {
  	display: grid;
  	grid-template-columns: 1fr 1fr 1fr;
  	grid-column-gap: 15px;
  }

  .form-block2 {
  	font-size: 12px;
  	display: grid;
  	grid-template-columns: 2fr 1fr;
  	grid-column-gap: 20px;
  }

</style>

<style>

.custom-alert-image {
	display: flex;
	justify-content: center;
}
.alert-custom-block {
	transform: scale(0.5);
	transform-origin: left top;
	width: 300px;
}
.custom-alert {
	width: 100%;
	height: 240px;
	position: relative;
}

.tr-transform--active{
	position: absolute;
	z-index: 5;
}

.tr-transform__content{
	user-select: none;
}
.tr-transform__rotator {
	top: -45px;
	left: calc(50% - 7px);
}

.tr-transform__rotator,
.tr-transform__scale-point {
	background: #fff;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	position: absolute;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(0, 0, 0, 0.1);
	cursor: pointer;
}

.tr-transform__rotator:hover,
.tr-transform__scale-point:hover {
	background: #F1F5F8;
}

.tr-transform__rotator:active,
.tr-transform__scale-point:active {
	background: #DAE1E7;
}

.tr-transform__scale-point {

}

.tr-transform__scale-point--tl {
	top: -7px;
	left: -7px;
}

.tr-transform__scale-point--ml {
	top: calc(50% - 7px);
	left: -7px;
}

.tr-transform__scale-point--tr {
	left: calc(100% - 7px);
	top: -7px;
}

.tr-transform__scale-point--tm {
	left: calc(50% - 7px);
	top: -7px;
}

.tr-transform__scale-point--mr {
	left: calc(100% - 7px);
	top: calc(50% - 7px);
}

.tr-transform__scale-point--bl {
	left: -7px;
	top: calc(100% - 7px);
}

.tr-transform__scale-point--bm {
	left: calc(50% - 7px);
	top: calc(100% - 7px);
}

.tr-transform__scale-point--br {
	left: calc(100% - 7px);
	top: calc(100% - 7px);
}
img.preview-icon {
	width: 20px;
	height: 20px;
	margin-right: 10px;
	cursor: pointer;
}

.modal-preview > div.text {
	cursor: pointer;
}
.modal-preview {
	display: flex;
	align-items: center;
}
.preview-action {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
}

#alerts-dropzone .dz-preview {
	display: inline-block
}
#alerts-dropzone .dz-preview .dz-image {
	width: 300px;
	height: 300px;
}
#alerts-dropzone .dz-preview .dz-image > div {
	width: inherit;
	height: inherit;
	background-size: contain;
	background: no-repeat;
}
#alerts-dropzone .dz-preview .dz-image > img {
	width: 100%;
}

#alerts-dropzone .dz-details {
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	margin-bottom: 10px;
}
#alerts-dropzone .dz-success-mark, .dz-error-mark, .dz-remove {
	display: none;
}
div.remove-icon {
	background: url(../assets/remove-btn.svg);
	width: 20px;
	height: 20px;
}
</style>
