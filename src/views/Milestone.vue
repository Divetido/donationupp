<template>
  <div class="content-app milestone" :class="this.$text_color_class">
    <div class="milestone-actions">
      <div class="milestone-header">
        <div :class="['title', color_schema.title_text]">
         {{ actions ? 'НОВЫЙ МАЙЛСТОУН' : 'МАЙЛСТОУНЫ'}}
       </div>
       <div class="action-buttons">
        <button class="default-button text" @click="actions = !actions" v-b-toggle.milestone-create>
         {{ actions ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}}
       </button>
       <button v-if="actions" class="btn-cancel" @click="actions = !actions" v-b-toggle.milestone-create></button>
     </div>
   </div>

   <b-collapse id="milestone-create"> 
    <div class="milestone-create-block" :class="color_schema.item">

      <div class="form-group ">
        <label>Суммарный Донат</label>
        <div class="text amount-milestone">
          <input type="number" name="amount" class="widget-input" v-model="amount">
          EUR 
        </div>
      </div>
      <div class="form-group">
        <label>Анимация</label>
        <select-block id="milestone-animation" :value="animation.value" :options="animation_options" />
      </div>
      <div class="milestone-form-badge">
        <label>Бейдж</label>
        <div class="modal-badge modal-file" @click="type = 'badge'" v-b-modal.load-file-modal>
          ВЫБРАТЬ ФАЙЛ
        </div>
        <div class="image-form">
          <img src="../assets/dog.png" alt="dog">
        </div>
        <div class="img-info">
          <div class="name">
            happy_corgi.GIF
            
            <img src="../assets/remove-btn.svg" alt="remove" class="remove-icon">
          </img>
        </div>
        <div class="img-size" :class="color_schema.text">
          842,50 Кб
        </div> 
      </div>
    </div>
    <div class="milestone-form-sound">
      <label>Мелодия</label>
      <div class="modal-sound modal-file" @click="type = 'sound'" v-b-modal.load-file-modal>
        ВЫБРАТЬ ФАЙЛ
      </div>
      <div class="milestone-sounds" >
        <img class="play-icon-btn" src="../assets/play-icon.svg">
        <div class="info-sound text">
          message.mp3
          <div class="size-sound" :class="color_schema.text">
            118,27 Кб
          </div>
        </div>
        <img src="../assets/remove-btn.svg" alt="remove" class="remove-icon">
      </div>

    </div>
  </div>
</b-collapse>
</div>
<div class="milestone-list">
  <template v-for="milestone in list_milestone">
    <milestone-box
    :money="milestone.money"
    :badge_count="milestone.badge_count"
    :animation_count="milestone.animation_count"
    :sound_count="milestone.sound_count"
    />
  </template>
</div>
<load-file-modal :type="type"/>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ModalBlock from '@/components/ModalBlock.vue'
  import MilestoneBox from '@/components/MilestoneBox.vue'
  import SelectBlock from '@/components/SelectBlock.vue'

  export default {
    name: 'milestone',
    components: {
      MilestoneBox,
      ModalBlock,
      SelectBlock
    },
    data() {
      return {
        type: 'badge', 
        animation: {value: 'Стандартно', class_name: 'static'},
        animation_options: [
        {value: 'Стандартно', class_name: 'static'},
        {value: 'Слайдер' , class_name: 'widget-slider'},
        {value: 'Список', class_name: 'widget-list' },
        {value: 'Бегущая строка', class_name: 'crawl-line' }
        ],
        amount: 3000,
        actions: false,
        list_milestone: [
        {money: 100, badge_count: 1, animation_count: 1, sound_count: 1},
        {money: 250, badge_count: 3, animation_count: 3, sound_count: 3},
        {money: 500, badge_count: 5, animation_count: 5, sound_count: 5},
        {money: 1000, badge_count: 10, animation_count: 10, sound_count: 10},
        {money: 2000, badge_count: 25, animation_count: 25, sound_count: 25}
        ]
      }
    },
    computed: {
      ...mapGetters(['color_schema'])
    }
  }
</script>

<style >
.milestone {
  display: flex;
  flex-direction: column;

}
.milestone-list {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
.milestone-actions {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 61.1%;
}
.milestone-actions > .white-text {
  font-size: 13px;
  padding: 30px 15px 20px 25px;
}
.btn.btn-add {
  width: 45px;
  height: 45px;
  background: url(../assets/+.svg) no-repeat center, linear-gradient(to right, #9834D7, #3D79DC) 90%;
  background-size: 12px auto, cover;
  border-radius: 23px;
  margin: 5px;
  border-color: transparent;
}
.btn.btn-add:focus {
  box-shadow: 0 0 0 0.2rem #282855;
}

.milestone-modal-content {
  width: 500px;
  height: 395px;
  border-radius: 5px;
  text-align: center;
  box-shadow: #000000 0px 3px 99px;
}

button.close {
  position: absolute;
  top: 24px;
  right: 25px;
}

img.icon-close {
  width: 15px;
  height: 15px;
}
.modal-title {
  margin: 50px 0;
  text-align: center;
}

.submit-btn {
  height: 45px;
  align-self: center;
  justify-self: center;
}

.list-form-input {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0 30px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
form.form-modal {
  display: grid;
  grid-template-rows: 2fr 1fr;
}

.group-input {
  font-size: 12px;
  text-align: left;
}
.form-control {
  color: #A9ABBF;
  background-color: transparent;
  border: 2px #595986 solid;
  height: 45px;
}

.form-control:focus {
  color: white;
  background-color: transparent;
  border: 2px white solid;
  border-radius: 3px;
}

input#money {
  width: calc(100% - 16px);
}

span.white-text {
  margin-left: 8px;
}
.milestone-modal-body {
  width: 500px;
  height: 395px;
  position: relative;
  padding: 0;
  display: grid;
  grid-template-rows: 1fr 2fr;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: center;
  height: 100%;
}
label {
  margin-bottom: 10px;
}

.milestone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.milestone-create-block {
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  border-radius: 10px;
}

.milestone-form-badge {
  display: flex;
  flex-direction: column;
  /* width: 53%; */
}

.image-form > img {
  border: 1px solid #595986;
}

img.remove-icon {
  cursor: pointer;
  margin: 10px;
}

.img-info {
  margin-top: 10px;
}

.amount-milestone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 170px;
}

.amount-milestone > input {
  max-width: 130px;
}

.info-sound.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.milestone-sounds {
  display: flex;
  justify-content: space-around;
  max-width: 238px;
  align-items: center;
  height: 70px;
  border: 2px solid #595986;
}

.modal-file {
  margin: 10px 0;
  cursor: pointer;
}

.modal-file:hover {
  color: #998CFD;
}
</style>
