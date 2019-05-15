<template>
  <div class="settings-app widgets">
    <div class="widget-header">
      <div class="widgets-actions">
        <div class="widget-title text white-text">
          {{ actions ? 'НОВЫЙ ВИДЖЕТ' : 'ВИДЖЕТЫ'}}
        </div>
        <div class="action-buttons">
          <button class="default-button text" @click="actions = !actions" v-b-toggle.widget-construction>
           {{ actions ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}}
         </button>
         <button v-if="actions" class="btn-cancel" @click="actions = !actions" v-b-toggle.widget-construction></button>
       </div>
     </div>

     <b-collapse id="widget-construction" >
      <div class="widget-construction">

        <div class="widget-type" :class="color_schema.item">
          <div class="custom-form-group">
            <div class="form-widget-type">
              <label :class="color_schema.text" for="widget-type">
                Тип виджета
              </label>
              <div class="select-block">
                <b-dropdown toggle-class="drop-select-block" id="widget-type" v-model="item_form.widget_type.value" :text="item_form.widget_type.value" dropbottom class="btn my-btn">
                  <b-dropdown-item v-for="option in widget_type_options"
                  :value="option.value"
                  :key="option.value"
                  :class="{ active: item_form.widget_type.value == option.value }"
                  @click="item_form.widget_type.value = option.value; item_form.widget_type.message = option.message;"
                  >
                  {{ option.value }}
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <div class="form-group" v-show="item_form.widget_type.value.match(/Последний подписчик|Самый крупный донатер|Последний донатер/)">
            <label :class="color_schema.text">
             Количество
           </label>
           <input type="number" min="1" name="widget-list-count" v-model="item_form.widget_list_count" class="widget-input">
         </div>
         <div class="form-group" v-show="item_form.widget_type.value.match(/Последний подписчик|Количество подписчиков|Количество подписчиков за период/)">
          <label for="widget-subscribe" :class="color_schema.text">
            Подписка
          </label>
          <select-block id="widget-subscribe" :value="item_form.widget_subscribe" :options="widget_subscribe_options" />
        </div>
        <div class="form-group" v-show="item_form.widget_type.value.match(/Сбор средств/)">
          <label for="widget-amount" :class="color_schema.text">
           Цель собрать
         </label>
         <input type="number" min="1" name="widget-font-size" v-model="item_form.widget_max_amount" class="widget-input">
         <span>EUR</span>
       </div>
       <div class="form-group" v-show="item_form.widget_type.value.match(/Сбор средств/)">
        <label for="widget-widget-ingathering" :class="color_schema.text">
         Начать сбор с
       </label>
       <input type="number" min="1" name="widget-font-size" v-model="item_form.widget_amount" class="widget-input">
       <span>EUR</span>
     </div>
     <div class="form-group" v-show="item_form.widget_type.value.match(/Сбор средств/)">
      <label for="widget-message" :class="color_schema.text">
        Название сбора
      </label>
      <input type="text" name="widget-message" v-model="item_form.widget_type.message" class="widget-input">
    </div>
    <div class="form-group" v-show="item_form.widget_type.value.match(/Сбор средств/)">
      <label for="widget-date" :class="color_schema.text">
        Завершить сбор
      </label>
      <input type="date" name="widget-date" value="01/04/2020" class="widget-input">
    </div>
  </div>
</div>
<div class="widget-form" :class="color_schema.item">
  <form v-show="item_form.widget_type.value != 'Сбор средств'">
    <div class="form-group">
      <label for="widget-message" :class="color_schema.text">
        Сообщение
      </label>
      <input type="text" name="widget-message" v-model="item_form.widget_type.message" class="widget-input">
    </div>
    <div class="custom-form-group">
      <div class="form-group">
        <label for="widget-animation" :class="color_schema.text">
          Тип отображения
        </label>
        <div class="select-block">
          <b-dropdown toggle-class="drop-select-block" id="widget-animation" v-model="item_form.widget_animation.value" :text="item_form.widget_animation.value" dropbottom class="btn my-btn">
            <b-dropdown-item v-for="option in widget_animation_options"
            :value="option.value"
            :key="option.value"
            :class="{ active: item_form.widget_animation.value == option.value }"
            @click="item_form.widget_animation.value = option.value; item_form.widget_animation.class_name = option.class_name;"
            >
            {{ option.value }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="form-group">
      <label for="widget-color" :class="color_schema.text">
       Цвет
     </label>
     <color-picker :color="item_form.widget_color" v-model="item_form.widget_color" />
   </div>
   <div class="form-group">
    <label for="widget-font-size" :class="color_schema.text">
     Размер текста
   </label>
   <input type="number" min="1" name="widget-font-size" v-model="item_form.widget_font_size" class="widget-input">
 </div>
 <div class="form-group" v-show="item_form.widget_animation.value.match(/Слайдер/)">
  <label for="widget-animation-speed" :class="color_schema.text">
   Задержка между слайдами (микросекунды)
 </label>
 <input type="number" min="1" name="widget-animation-speed" v-model="item_form.widget_animation_delay" class="widget-input">
</div>
<div class="form-group" v-show="item_form.widget_animation.value.match(/Бегущая строка/)">
  <label for="widget-animation-speed" :class="color_schema.text">
   Скорость прокрутки
 </label>
 <div class="amount-slider">
  <b-form-slider ref="range" :min="0" :max="4000" v-model="item_form.widget_animation_delay" />
  <div class="slider-value text">{{ item_form.widget_animation_delay }}</div>
</div>
</div>
</div>
</form>
<form v-show="item_form.widget_type.value == 'Сбор средств'">
  <div class="preview-ingathering" :class="[color_schema.global, color_schema.text]">
    <div class="preview-block">
      <div class="text" :style="{color: item_form.sbor_text_outside}">{{item_form.widget_type.message}}</div>
      <div class="ingathering"
      :style="{
        width: item_form.sbor_width + 'px',
        height: item_form.sbor_height + 'px' ,
        background: item_form.sbor_bar_color,
        position: 'relative',
        color: item_form.sbor_text_inside,
        border: item_form.sbor_border ? '2px solid' + item_form.sbor_bar_border_color : 'none'
      }">
      <div class="fill-block" :style="{ height: '100%', width: item_form.sbor_percent + '%', background: item_form.sbor_bar_fill_color }">

      </div>
      <div class="ingathering-text">
        {{item_form.widget_amount}} EUR ({{ item_form.sbor_percent }}%)
      </div>
      <!-- <b-progress :value="widget_amount" :max="widget_max_amount" show-value></b-progress> -->
    </div>
    <div class="max-amount" :style="{color: item_form.sbor_text_outside}">
      {{item_form.widget_max_amount}} EUR
    </div>
  </div>

</div>
<div class="form-group">
  <label :class="color_schema.text">Фоновая картинка</label>
  <vue-dropzone id="dropzone" @vdropzone-file-added="showImageDropzone = !showImageDropzone" :include-styling="false" :options="dropzoneImageOptions" :useCustomSlot="true">
    <div class="dropzone-custom-content" ref="dropzoneContent" v-show="showImageDropzone">
      <div class="dropzone-custom-title">
        <img src="../assets/upload-cloud.svg" alt="Upload Cloud" class="upload-img">
        <div class="text" :class="color_schema.extra">Drag & Drop file here</div>
      </div>

      <div class="subtitle">JPG, PNG, GIF, WEBM, AVI, MPEG</div>
    </div>

    <div class="dz-details">
      <div class="dz-size"><span data-dz-size></span></div>
      <div class="dz-filename"><span data-dz-name></span></div>
    </div>

  </vue-dropzone>
</div>
<div class="customization-ingathering">
 <div class="form-group">
  <label for="widget-font-size" :class="color_schema.text">
   Толщина градусника
 </label>
 <input type="number" min="1" name="widget-font-size" v-model="item_form.sbor_height" class="widget-input">
</div>
<div class="form-group">
  <label for="widget-font-size" :class="color_schema.text">
   Ширина градусника
 </label>
 <input type="number" min="1" name="widget-font-size" v-model="item_form.sbor_width" class="widget-input">
</div>
<div class="form-group">
  <label for="widget-color" :class="color_schema.text">
   Текст внутри
 </label>
 <color-picker :color="item_form.sbor_text_inside" v-model="item_form.sbor_text_inside" />
</div>
<div class="form-group">
  <label for="widget-color" :class="color_schema.text">
   Текст снаружи
 </label>
 <color-picker :color="item_form.sbor_text_outside" v-model="item_form.sbor_text_outside" />
</div>
<div class="form-group">
  <label for="widget-color" :class="color_schema.text">
   Цвет градусника
 </label>
 <color-picker :color="item_form.sbor_bar_color" v-model="item_form.sbor_bar_color" />
</div>
<div class="form-group">
  <label for="widget-color" :class="color_schema.text">
   Цвет заполнения
 </label>
 <color-picker :color="item_form.sbor_bar_fill_color" v-model="item_form.sbor_bar_fill_color" />
</div>
<div class="form-group">
  <label for="widget-color" :class="color_schema.text">
    <input type="checkbox" v-model="item_form.sbor_border" name="checkbox">
    Обводка
  </label>
  <color-picker :color="item_form.sbor_bar_border_color" v-model="item_form.sbor_bar_border_color" />
</div>
</div>
</form>

</div>
<div class="widget-preview" :class="color_schema.item">
  <div class="text" :class="color_schema.text">
    Превью
  </div>
  <div class="custom-widget">
    <div :class="['custom-widget-message', item_form.widget_animation.class_name]" :style="{ color: item_form.widget_color, fontSize: item_form.widget_font_size + 'px' , 'animation-duration': (item_form.widget_animation_delay/1000) +'s' }" v-html="item_form.widget_type.message">
    </div>
  </div>
</div>
</div>
</b-collapse>
</div>

<div class="widgets-list">
  <template v-for="(item,index) in widgets">

    <div class="widget-item" :class="color_schema.item"   >
      <div class="item-title" v-b-toggle="'collapse-' + index " aria-expanded="false" @click="item.active = !item.active">
        {{ item.title }}
      </div>
      <div class="item-actions">
        <button
        style="border: 0"
        class="copy-link btn-action"
        v-tooltip.hover.top.end="{ content: 'Копировать ссылку', class: 'tooltip-custom' }"
        v-clipboard="'test-text' + index"
        aria-controls="false"
        />
        <button
        style="border: 0"
        :class="[{'collapse-link': !item.active, 'collapse-link-up': item.active } , 'btn-action']"
        v-b-toggle="'collapse-' + index " aria-expanded="false" @click="item.active = !item.active"
        />
      </div>
    </div>
    <b-collapse :id="'collapse-' + index">
      <div class="widget-collapse collapse-content" :class="color_schema.item"  v-for="(c_item, c_index) in item.collapseItem">
        <div class="collapse-checkbox">
          <label class="switch-checkbox" >
            <input type="radio" :name="'select-widget'+index" v-model="c_item.active" :value="c_item.active">
            <span class="collapse-slider-checkbox round"></span>
          </label>
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
          <button
          style="border: 0"
          class="edit-link btn-action"
          v-tooltip.hover.top.end="{ content: 'Редактировать', class: 'tooltip-custom' }"
          @click="editForm(1)"
          />
          <button style="border: 0" class="delete-link btn-action" v-b-modal.destroy-modal/>
        </div>
      </div>
    </b-collapse>
  </template>
</div>
<destroy-modal title="Виджет" />
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import SelectBlock from '@/components/SelectBlock.vue'
import ColorPicker from '@/components/widget-component/ColorPicker.vue'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'widgets',
  components: {
    SelectBlock,
    ColorPicker,
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
      showImageDropzone: true,
      widget_animation_options: [
        { value: 'Стандартно', class_name: 'static' },
        { value: 'Слайдер', class_name: 'widget-slider' },
        { value: 'Список', class_name: 'widget-list' },
        { value: 'Бегущая строка', class_name: 'crawl-line' }
      ],
      actions: false,
      widget_subscribe_options: [
        { value: 'Любая' },
        { value: 'Платная' },
        { value: 'Премиум' },
        { value: 'Простая' }
      ],
      widget_type_options: [
        { value: 'Последнее сообщение', message: 'Последнее сообщение: {{message}}' },
        { value: 'Самый крупный донатер', message: 'Самый(-е) крупный(-е) донатер(-ы): {{users}} || {{name}} {{sum}}' },
        { value: 'Последний донатер', message: 'Последний(-е) донатер(-ы): {{users}} || {{name}} {{sum}}' },
        { value: 'Последний подписчик', message: 'Последний(-е) подписчик(-и): {{subscriber}}' },
        { value: 'Количество подписчиков', message: 'Количество подписчиков: {{count}}' },
        { value: 'Количество подписчиков за период', message: 'Количество подписчиков за период: {{count}} {{type}} {{period}}' },
        { value: 'Сбор средств', message: 'Сбор средств - 1' }
      ],
      item_form: {
        widget_type: { value: 'Последнее сообщение', message: 'Последнее сообщение: {{message}}' },
        widget_list_count: 20,
        widget_subscribe: 'Любая',
        widget_animation: { value: 'Стандартно', class_name: 'static' },
        widget_animation_delay: 1000,
        widget_color: '#ffffff',
        widget_font_size: 16,
        widget_amount: 900,
        widget_max_amount: 1500,
        sbor_width: 400,
        sbor_height: 30,
        sbor_text_inside: '#FFFFFF',
        sbor_text_outside: '#FFFFFF',
        sbor_bar_color: '#525286',
        sbor_bar_fill_color: '#6C55D9',
        sbor_border: false,
        sbor_bar_border_color: '#FFFFFF'
      }
    }
  },
  mounted() {
    this.$store.dispatch('fetchWidgets')
  },
  computed: {
    ...mapGetters(['color_schema']),
    ...mapState(['widgets']),
    replaceWidgetMessage () {
      return this.widget_message.replace(/({{message}})/, '<p> [текст сообщения]</p>')
    },
    colorType () {
      return this.item.colorType
    },
    colorString () {
      if (!this.colors[this.colorType]) {
        return ''
      }

      if (this.colorType === 'hex') {
        return this.colors.hex
      }

      return this.colorType + '(' + Object.values(this.colors[this.colorType]).join(',') + ')'
    },
    sbor_percent () {
      return (this.widget_amount * 100) / this.widget_max_amount
    }
  },
  methods: {
    showPicker (item) {
      if (item.color) {
        this.colors = item.color
      }

      this.displayPicker = true
    },
    editForm (id) {
      this.$http.get('widgets/' + id).then((res) => {
        this.item_form = res.body
      })
      this.$root.$emit('bv::toggle::collapse', 'widget-construction')
      this.actions = true
    }
  }
}
</script>

<style scoped>
.widget-item:hover {
  background-color: #434377;
}
.widget-header {
  grid-column: 1/3;
  grid-row: 1/3;
}
.widgets-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: 1/2;
  grid-row: 1/2;
  max-width: 670px;
}
div#widget-construction {
  grid-column: 1/3;
}
.widgets {
  display: grid;
  grid-template-columns: 670px 1fr;
  /*grid-template-rows: 45px auto 1fr;*/
}
.widgets-list {
  grid-area: list;
  /*display: grid;*/
  /*grid-auto-rows: 60px;*/
  grid-row: 3/4;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  /*grid-row-gap: 20px;*/
}
.widget-collapse {
  display: grid;
  grid-auto-rows: 60px;
  grid-row-gap: 3px;
  margin-top: 3px;
}

.widget-item {
  border-radius: 10px;
  grid-auto-rows: 60px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
}

.collapse-content {
  display: grid;
  grid-template-columns: 75px 1fr 1fr 80px;
  align-items: center;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 12px;
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
div.widget-construction {
/*  grid-column: 1/3;
grid-row: 2/2;*/
display: grid;
grid-template-columns: 670px 1fr;
grid-template-rows: auto 1fr;
grid-column-gap: 20px;
grid-row-gap: 3px;
margin-top: 25px;
}
.widget-preview, .widget-type, .widget-form{
  border-radius: 10px;
  font-size: 12px;
  padding: 20px;
}

.widget-type {
  grid-column: 1/2;
  grid-row: 1/2;
}
.widget-preview{
  grid-column: 2/2;
  grid-row: 1/3;
}
.widget-form {
  grid-column: 1/2;
  grid-row: 2/3;
}

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

.collapse-slider-checkbox {
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

.collapse-slider-checkbox:before {
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

input:checked + .collapse-slider-checkbox {
  background-color: #6C55D9;
}

/*input:checked + .collapse-slider-checkbox:before {
  background: white;
  background-size: 50% auto, cover;
  }*/

  input:focus + .collapse-slider-checkbox {
    box-shadow: 0 0 1px #2C2C43;
  }

  input:checked + .collapse-slider-checkbox:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
  .collapse-slider-checkbox.round {
    border-radius: 23px;
  }

  .collapse-slider-checkbox.round:before {
    border-radius: 50%;
  }

  .copy-link {
    background: url(../assets/copy-content.svg) no-repeat center;
    height: 20px;
    width: 20px;
  }

  .copy-link:hover, .copy-link:focus {
    background: url(../assets/copy-content-active.svg) no-repeat center;
    height: 20px;
    width: 20px;
  }

  .custom-widget {
    margin-top: 22px;
  }
</style>

<style>
input.widget-input {
  background: transparent;
  border-radius: 3px;
  border: 2px solid #595986;
  color: white;
  height: 45px;
  font-size: 12px;
  padding: 15px;
  width: 100%;
}

.custom-form-group {
  display: grid;
  grid-template-columns: 300px 140px 1fr;
  grid-column-gap: 20px;
}
.edit-link{
  background: url(../assets/edit.svg) no-repeat center;
  height: 20px;
  width: 20px;
}

.delete-link{
  background: url(../assets/delete.svg) no-repeat center;
  height: 20px;
  width: 20px;
}
.btn-action {
  margin-left: 20px;
}
.item-actions, .collapse-actions, .payment-actions {
  justify-self: end;
}

.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}

div#widget-type > button {
  min-width: 300px;
  font-size: 14px;
}
div.widget-slider, div.crawl-line {
  width: 100%;
  overflow: hidden;
  animation: widget-slider;
  margin-top: 0%;
  animation-iteration-count: infinite;
}

@keyframes widget-slider {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}

.preview-ingathering {
  height: 120px;
}

.form-group {
  position: relative;

}

.form-group > span {
  position: absolute;
  right: 20px;
  top: 40px;
}

.preview-ingathering {
  height: 120px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;
}

.preview-block div {
  text-align: center;
}
.preview-block {
  display: grid;
  grid-row-gap: 10px;
}

.customization-ingathering {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
}

.ingathering-text {
  width: 50%;
  height: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.max-amount {
  justify-self: end;
}

</style>
