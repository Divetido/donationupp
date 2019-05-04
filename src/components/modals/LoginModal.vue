<template>
  <b-modal id="login-modal" ref="login_modal" hide-header hide-footer content-class="login-modal-content" body-class="login-modal-body" centered>
    <button type="button" class="close" @click="hideModal">
      <img class="icon-close" src="../../assets/close.svg">
    </button>
    <div class="modal-title text">
      ВОЙТИ КАК:
    </div>
      <b-form class="form-login" >
        <div class="login-form-check">
          <div class="custom-control custom-radio">
            <input class="radio-btn custom-control-input" name="login-user" id="streamer" type="radio"  :checked="!user" value="streamer"  @change="updateUserType('streamer')">
            <label class="custom-control-label text description" for="streamer"> Стример
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input class="radio-btn custom-control-input" name="login-user"  id="user" type="radio" :checked="user"  value="user"  @change="updateUserType('user')">
            <label class="custom-control-label text description" for="user"> Пользователь
            </label>
          </div>
        </div>
        <div class="social-buttons">
          <router-link to="/dashboard" class="social-button"><img src="../../assets/twitch.svg" class="icon-modal"></router-link>
          <router-link to="/dashboard" class="social-button"><img src="../../assets/vk.svg" class="icon-modal"></router-link>
          <router-link to="/dashboard" class="social-button"><img src="../../assets/youtube-logo.svg" class="icon-modal"></router-link>
        </div>
      </b-form>
</b-modal>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'login-modal',
    compenents: {
    },

    methods: {
      hideModal() {
        this.$refs.login_modal.hide()
      },
      updateUserType(value) {
        this.$store.commit('set_user_type', value)
      }
    },
    computed: {
      ...mapGetters(['color_schema', 'user']),
      item_value(){
        return this.items[0].value
      }
    }
  }
</script>

<style>
.login-modal-content {
  width: 500px !important;
  height: 360px !important;
  background-color: #252A5E !important;
  border-radius: 15px !important;
  text-align: center !important;
}
.login-modal-body {

}
</style>
