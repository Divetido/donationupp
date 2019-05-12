<template>
  <b-modal :id="id" ref="modal" :hide-header="true" :hide-footer="true" :content-class="[id + '-modal-content', color_schema.item]" :body-class="id + '-modal-body'" centered>
    <button type="button" class="close" @click="hideModal">
      <img class="icon-close" src="../assets/close.svg">
    </button>
    <div class="modal-title text">
      {{ title }}
    </div>
    <template v-if="id == 'login'">
      <b-form class="form-login" >
        <div class="login-form-check">
          <div class="custom-control custom-radio">
            <input class="radio-btn custom-control-input" name="login-user" id="streamer" type="radio"  :checked="!user" value="streamer"  @change="updateUserType('streamer')">
            <label class="custom-control-label text description" for="streamer"> Стример
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input class="radio-btn custom-control-input" name="login-user"  id="user" type="radio"   value="user"  @change="updateUserType('user')">
            <label class="custom-control-label text description" for="user"> Пользователь
            </label>
          </div>
        </div>
        <div class="social-buttons">
          <router-link to="/dashboard" class="social-button">
            <img src="../assets/twitch.svg" class="icon-modal">
          </router-link>
          <router-link to="/dashboard" class="social-button">
            <img src="../assets/vk.svg" class="icon-modal">
          </router-link>
          <router-link to="/dashboard" class="social-button">
            <img src="../assets/youtube-logo.svg" class="icon-modal">
          </router-link>
        </div>
      </b-form>
    </template>

    <template v-if="id == 'milestone'">
      <b-form class="form-modal">
        <div class="list-form-input">
          <div class="group-input">
            <label for="money" class="text" :class="color_schema.text">Суммарный Донат</label>
            <input
            id="money"
            type="text"
            class="d-inline text-input"
            required
            placeholder="Введите сумму" />
            <span class="white-text d-inline">$</span>
          </div>
          <div class="group-input">
            <label for="badges" class="text" :class="color_schema.text">Бейджики</label>
            <select-block id="badges"  :value="badge_value" :options="badges" width="200px" />
          </div>
          <div class="group-input">
            <label for="animations" class="text" :class="color_schema.text">Анимации</label>
            <select-block id="animations"  :value="badge_value" :options="badges" width="200px" />
          </div>
          <div class="group-input">
            <label for="sounds" class="text" :class="color_schema.text">Мелодии</label>
            <select-block id="sounds"  :value="badge_value" :options="badges" width="200px" />
          </div>

        </div>
        <div class="submit-btn">
          <button class="default-button text" type="submit"">Создать</button>
        </div>
      </b-form>
    </template>

    <template v-if="id == 'donat'">
      <b-form class="form-modal">
        <div class="list-form-input">
          <div class="group-input">
            <label for="money" class="text" :class="color_schema.text">Суммарный Донат</label>
            <b-form-input
            id="money"
            type="text"
            class="d-inline"
            required
            placeholder="Введите сумму" />
            <span class="white-text d-inline">$</span>
          </div>

        </div>
        <div class="submit-btn">
          <b-button class="btn default-button text" type="submit"">Создать</b-button>
        </div>
      </b-form>
    </template>

    <template v-if="id == 'payments'">
      <b-form class="form-modal payments">
        <div class="list-form-input-column">
         <div class="group-input">
          <label for="payment_type" class="text" :class="color_schema.text">Платёжная система</label>
          <select-block id="payment_type"  :value="item_value" :options="items" />
        </div>
        <div class="input-group-card">
          <div class="group-input">
            <label for="number_card" class="text" :class="color_schema.text">Номер карты</label>
            <input
            id="number_card"
            type="text"
            class="text-input"
            required
            pattern="\d*"
            placeholder="Введите номер карты" />
          </div>
          <div class="group-input">
            <label for="cvv_card" class="text" :class="color_schema.text">CVV</label>
            <input
            id="cvv_card"
            type="text"
            class="text-input"
            required
            pattern="\d*"
            placeholder="CVV" />
          </div>
        </div>

      </div>
      <div class="submit-btn">
        <button class="default-button text" type="submit"">Создать</button>
      </div>
    </b-form>
  </template>

</b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'modal-block',
  compenents: {
  },
  props: {
    id: {
      type: String
    },
    title: {
      type: String
    },
    items: {
      type: Array
    }
  },
  data () {
    return {
      badge_value: 'Выберите вариант',
      badges: [
        { value: 'Первый' },
        { value: 'Второй' }
      ]
    }
  },
  methods: {
    hideModal () {
      this.$refs.modal.hide()
    },
    updateUserType (value) {
      this.$store.commit('set_user_type', value)
    }
  },
  computed: {
    ...mapGetters(['color_schema', 'user']),
    item_value () {
      return this.items[0].value
    }
  }
}
</script>

<style>
.login-modal-body {
  position: initial;
}
.title {
  /*color: white;*/
  font-size: 40px;
  line-height: 69px;
}

.description {
  color: #9197CE;
  font-size: 16px;
  color: #9197CE;
  line-height: 30px;
}

.login.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

a.social-button {
  width: 45px;
  height: 45px;
  padding: 14px;
  background-color: #635CDA;
  border-radius: 30px;
  margin: 60px 10px;
  display: flex;
  justify-content: center;
}
.login-form-check {
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin-top: 62px;
}

.modal-title {
  font-size: 20px;
  color: white;
  line-height: 24px;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #9D95C9 !important;
  border-color: #9D95C9 !important;
  border-width: 2px !important;
  background-color: transparent !important;
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
  border-color: #9D95C9;
  border-width: 2px;
  background-color: transparent;
}
img.icon {
  width: 30px;
  height: 30px;
  margin-left: 25px;
}

button.close {
  position: absolute;
  top: 30px;
  right: 30px;
}

img.icon-close {
  width: 15px;
  height: 15px;
}
.social-buttons {
  display: flex;
  justify-content: center;
}

.input-group-card {
  display: grid;
  grid-template-columns: 1fr 85px;
  grid-column-gap: 10px;
}

.modal-content.payments-modal-content{
  max-width: 360px;
}

.list-form-input-column {
  padding: 0 40px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
  margin: 20px 0;
}
</style>
