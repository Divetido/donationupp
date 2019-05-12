<template>
  <b-modal id="player-modal" ref="player_modal" hide-header hide-footer content-class="'player-modal-content'" :body-class="['player-modal-body', color_schema.item]" centered>
    <button type="button" class="close" @click="hideModal">
      <img class="icon-close" src="../../assets/close.svg">
    </button>
    <div class="player-modal-title text" :class="color_schema.title_text">
      Добавить трек
    </div>
    <b-form class="form-player" >
      <div class="group-form">
        <label for="audio-link" :class="color_schema.text">Название трека или ссылка с YouTube</label>
        <input type="url" name="audio-link" class="text-input">
      </div>
      <div class="group-form">
        <label for="user-nickname" :class="color_schema.text">Отправитель</label>
        <input type="text" name="user-nickname" class="text-input">
      </div>
      <div class="button-action">
        <button class="default-button">ДОБАВИТЬ</button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'player-modal',
  methods: {
    hideModal () {
      this.$refs.player_modal.hide()
    }
  },
  computed: {
    ...mapGetters(['color_schema', 'user'])
  }
}
</script>

<style>
.player-modal-content {
  max-width: 600px !important;
  height: 410px !important;
  border-radius: 15px !important;
  text-align: center !important;
}

@media (min-width: 576px) {
  #player-modal > .modal-dialog {
    max-width: 600px !important;
  }
}

.modal-body.player-modal-body {
  padding: 50px ;
}
.player-modal-title {
    margin-bottom: 40px;
    font-size: 22px;
}

.button-action {
    height: 45px;
    text-align: center;
    font-size: 13px;
}

form.form-player {
    text-align: left;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 20px;
}
</style>
