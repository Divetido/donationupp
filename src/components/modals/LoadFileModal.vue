<template>
	<b-modal id="load-file-modal" ref="load_file_modal" hide-header hide-footer :content-class="['load-file-modal-content', color_schema.global]" body-class="load-file-modal-body" centered>
		<div class="left-block text">
			<div class="top-block" :class="color_schema.item">
				ВЫБРАТЬ {{ type == 'badge' ? 'БЕЙДЖ' : 'МЕЛОДИЮ' }}
			</div>
			<div class="middle-block" :class="color_schema.item">
				<div class="link-galery" @click="list = true">
					Галерея (15)
				</div>
				<div class="link-galery-loaded" @click="list = false">
					Загруженные (1)
				</div>
				<vue-dropzone id="dropzone" :include-styling="false" :options="dropzoneImageOptions" :useCustomSlot="true">
					<div class="dropzone-custom-content" ref="dropzoneContent">
						<div class="dropzone-custom-title">
							<img src="../../assets/upload-cloud.svg" alt="Upload Cloud" class="upload-img">
							<div class="text" :class="color_schema.extra">ЗАГРУЗИТЬ ФАЙЛ</div>
						</div>

						<div class="subtitle" :class="color_schema.text">JPG, PNG, GIF</div>
					</div>

					<div class="dz-details">
						<div class="dz-size"><span data-dz-size></span></div>
						<div class="dz-filename"><span data-dz-name></span></div>
					</div>

				</vue-dropzone>
			</div>
			<div class="bottom-block" :class="color_schema.item">
				<button class="default-button"  @click="hideModal">СОХРАНИТЬ</button>
				<b-button class="btn-close" variant="outline-light" @click="hideModal">ОТМЕНА</b-button>
			</div>
		</div>
		<div class="right-block text">
			<div :class="['list-modal-items', {images: (type == 'badge'), sounds: (type == 'sound')}]">
				<div class="list-modal-item" v-for="item in listItems">
					<img :src="item.url" :alt="item.filename"  v-show="type == 'badge'">
					<img class="sound-play" src="../../assets/play video.svg" v-show="type == 'sound'">
				<!-- 	<button class="default-button player-button"  v-show="type == 'sound'">
						<div class="arrow-right"></div>
					</button> -->
					<div class="filename">{{item.filename}}</div>
					<div class="filesize">{{item.filesize}}</div>
				</div>
			</div>
		</div>
	</b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'load-file-modal',
  props: ['type'],
  components: {
    vueDropzone: vue2Dropzone
  },
  data () {
    return {
      dropzoneImageOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { 'My-Awesome-Header': 'header value' },
        addRemoveLinks: true,
        maxFiles: 1
      },
      list: true,
      imageItems: [
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' },
        { url: require('../../assets/dog.png'), filename: 'test.GIF', filesize: '842,50 Кб' }
      ],
      soundItems: [
        { filename: 'message.mp3', filesize: '842,50 Кб' },
        { filename: 'message.mp3F', filesize: '842,50 Кб' },
        { filename: 'message.mp3', filesize: '842,50 Кб' },
        { filename: 'message.mp3', filesize: '842,50 Кб' },
        { filename: 'message.mp3F', filesize: '842,50 Кб' },
        { filename: 'message.mp3', filesize: '842,50 Кб' },
        { filename: 'message.mp3', filesize: '842,50 Кб' },
        { filename: 'message.mp3F', filesize: '842,50 Кб' },
        { filename: 'message.mp3', filesize: '842,50 Кб' },
        { filename: 'message.mp3F', filesize: '842,50 Кб' },
        { filename: 'message.mp3', filesize: '842,50 Кб' }
      ]
    }
  },
  methods: {
    hideModal () {
      this.$refs.load_file_modal.hide()
    }
  },
  computed: {
    ...mapGetters(['color_schema', 'user']),
    listItems () {
      var items = this.type == 'badge' ? this.imageItems : this.soundItems
      return this.list ? items : [items[0]]
    }
  }
}
</script>

<style>
.load-file-modal-content {
	width: 851px !important;
	height: 645px !important;
	border-radius: 5px !important;
	text-align: center !important;
}
.load-file-modal-content.dark {
	background-color: #282855 !important;
}

@media (min-width: 576px) {
	#load-file-modal > .modal-dialog {
		max-width: 851px !important;
	}
}

.load-file-modal-body {
	display: grid;
	grid-template-columns: 240px 1fr;
	height: 645px;
	width: 851px;
	position: absolute;
	padding: 0;
}
.left-block {
	display: grid;
	grid-template-rows: 1fr 3fr 2fr;
	grid-row-gap: 2px;
}

.right-block {
	overflow: auto;
	position: absolute;
	height: 625px;
	margin: 10px 0;
	right: 16px;
	top: 0;
	padding: 50px;
	width: calc(100% - 240px);
}
.list-modal-items.images {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 50px;
	grid-row-gap: 20px;
}

.list-modal-items.sounds {
	display: grid;
	grid-template-columns: 1fr;
}

.sounds > .list-modal-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #37376A;
	height: 100px;
	cursor: pointer;
}

.bottom-block > button {
	height: 45px;
	border-radius: 33px;
	width: 180px;
	font-size: 12px;
}

.bottom-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 40px 30px;
}

.middle-block > div#dropzone {
	width: 100%;
}

.middle-block {
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
}
.top-block {
	display: flex;
	justify-content: center;
	align-items: center;
}
.sound-play {
	widows: 45px;
	height: 45px;
}
.link-galery, .link-galery-loaded {
	cursor: pointer;
}
</style>
