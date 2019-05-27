<template>
  <b-modal id="destroy-modal" ref="destroy_modal" hide-header hide-footer :content-class="['destroy-modal-content', color_schema.item]" body-class="destroy-modal-body" centered>
    <button type="button" class="close" @click="hideModal">
      <img class="icon-close" src="../../assets/close.svg">
    </button>
    <div class="destroy-modal-title text" :class="color_schema.title_text">
      Удалить {{ title }}?
    </div>
    <div class="form-destroy" >
      <div class="group-form destroy-description" :class="color_schema.text">
        Все заполненные данные будут потеряны
      </div>
      <div class="button-action">
        <button class="destroy-button" @click="removeItem()">УДАЛИТЬ</button>
        <b-button class="cancel-buttone" variant="outline-light" @click="hideModal">ОТМЕНА</b-button>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'destroy-modal',
  props: ['title', 'type', 'w_id', 'm_id', 'a_id'],
  methods: {
    ...mapActions(['removeMilestones', 'removeWidgets']),
    hideModal () {
      this.$refs.destroy_modal.hide()
    },
    removeItem() {
      if (this.title == 'Виджет') {
        this.removeWidgets({id: this.w_id, type: this.type})
      } 
      if (this.title == 'Майлстоун') {} {
        this.removeMilestones(this.m_id)
      }
      if (this.title == 'Алерт') {} {
        this.removeAlert(this.a_id)
      }
      this.$refs.destroy_modal.hide()
    }
  },
  computed: {
    ...mapGetters(['color_schema', 'user'])
  }
}
</script>

<style>
.destroy-modal-content {
  width: 380px !important;
  height: 255px !important;
  border-radius: 5px !important;
  text-align: center !important;
}
.destroy-modal-content.dark-item {
  background-color: #37376A !important;
}

@media (min-width: 576px) {
  #destroy-modal > .modal-dialog {
    max-width: 380px !important;
  }
}

.button-action > button {
  height: 45px;
  width: 130px;
  border-radius: 33px;
  color: white;
}
.destroy-description {
  margin: 40px 0;
  text-align: center;
}

.destroy-modal-title {
  font-size: 22px;
  text-align: center;
  margin-top: 25px;
}

button.destroy-button {
  background: #D04B4B;
  border: none;
  box-shadow: #060333 0 3px 20px;
}

.button-action {
  height: 45px;
  text-align: center;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
