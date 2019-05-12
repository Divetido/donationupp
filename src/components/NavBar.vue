<template>
  <div class="nav-bar" :class="color_schema.item" :style="{ 'justify-content': !user ? 'flex-end' : 'space-beetween'  }">
    <div class="streamer-search text" :class="color_schema.global" v-if="user">
     <router-link to="/search"><img src="../assets/search.svg" alt="search" class="search-icon"></router-link>
     <input type="text" name="streamer-search" placeholder="Введите ник стримера…" :class="color_schema.title_text">
   </div>
   <div class="user-actions">
    <div class="theme-btn">
      <label class="switch" for="switch_color">
        <input type="checkbox" id='switch_color' v-model="current_state_checkbox">
        <span class="slider-checkbox round"></span>
      </label>
    </div>
    <div class="avatar">
      <img src="../assets/avatar.png">
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'nav-bar',
  computed: {
    ...mapState(['state_checkbox']),
    ...mapGetters(['color_schema', 'user']),
    current_state_checkbox: {
      set (current_state_checkbox) {
        this.$store.commit('set_state_checkbox', current_state_checkbox)
      },
      get () {
        return this.state_checkbox
      }
    }
  }
}

</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 35px;
  align-items: center;
}
.user-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.avatar {
  margin-left: 25px;
}
.avatar > img {
  width: 45px;
  height: 45px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 45px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider-checkbox {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2C2C43;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-checkbox:before {
  position: absolute;
  content: "";
  height: 45px;
  width: 45px;
  left: 0px;
  bottom: 0px;
  background: url(../assets/moon-phase-outline.svg) no-repeat center, linear-gradient(to right, #9834D7, #3D79DC 91%);
  background-size: 50% auto, cover;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider-checkbox {
  background-color: #DEDEF5 ;
}

input:checked + .slider-checkbox:before {
  background: url(../assets/sun-sunny-day-weather-symbol.svg) no-repeat center, linear-gradient(to right, #9834D7, #3D79DC 91%);
  background-size: 50% auto, cover;
}

input:focus + .slider-checkbox {
  box-shadow: 0 0 1px #2C2C43;
}

input:checked + .slider-checkbox:before {
  -webkit-transform: translateX(37px);
  -ms-transform: translateX(37px);
  transform: translateX(37px);
}
.slider-checkbox.round {
  border-radius: 23px;
}

.slider-checkbox.round:before {
  border-radius: 50%;
}

label {
  margin-bottom: 0;
}

.streamer-search {
  border-radius: 25px;
  height: 45px;
  width: 400px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 13px;
}

.streamer-search > input {
  width: 100%;
  background: transparent;
  border: none;
}

</style>
