import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Verte from 'verte'
import 'verte/dist/verte.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/fonts/Montserrat-Bold.ttf'
import './assets/fonts/Montserrat-SemiBold.ttf'

import Donut from 'vue-css-donut-chart'
import 'vue-css-donut-chart/dist/vcdonut.css'
import VueLodash from 'vue-lodash'
import bFormSlider from 'vue-bootstrap-slider'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'
import SelectBlock from '@/components/SelectBlock.vue'
import BModal from 'bootstrap-vue/es/components/modal/modal'
import drr from '@minogin/vue-drag-resize-rotate'
import FormDonation from './views/FormDonation.vue'
import ModalBlock from '@/components/ModalBlock.vue'
import PlayerModal from '@/components/modals/PlayerModal.vue'
import DestroyModal from '@/components/modals/DestroyModal.vue'
import LoadFileModal from '@/components/modals/LoadFileModal.vue'
import AudioPlayer from '@/components/player/audio-player.vue'
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'

import VueClipboards from 'vue-clipboards'
var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll)
Vue.use(Tooltip)
Vue.use(VueClipboards)
Vue.use(bFormSlider)

Vue.component('load-file-modal', LoadFileModal)
Vue.component('audio-player', AudioPlayer)
Vue.component('player-modal', PlayerModal)
Vue.component('destroy-modal', DestroyModal)
Vue.component('verte', Verte)
Vue.component('form-donation', FormDonation)
Vue.component('modal-block', ModalBlock)
Vue.component('drr', drr)
Vue.component('select-block', SelectBlock)
Vue.directive('modal', BModal)
const options = { name: 'lodash' } // customize the way you want to call it

Vue.use(VueLodash, options) // options is optional
Vue.use(Donut)
Vue.use(BootstrapVue)

Vue.filter('numbers', (value) => {
  let number = value + 1
  if (number < 10) {
    return "0" + number + "."
  } 
  return number + "."
})

Vue.filter('minutes', (value) => {
  if (!value || typeof value !== "number") return "00:00"
  let min = parseInt(value / 60),
      sec = parseInt(value % 60)
  min = min < 10 ? "0" + min : min
  sec = sec < 10 ? "0" + sec : sec
  value = min + ":" + sec
  return value
})