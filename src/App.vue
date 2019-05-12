<template>
  <div id="form-donation" v-if="$route.path.includes('/form-donation')">
    <router-view/>
  </div>

  <div id="app" v-else-if="$route.path != '/'"  :class="color_schema.global">
    <logo-box />
    <nav-bar />
    <side-bar />
    <div class="app-content">
      <router-view/>
      <div class="content-footer" :class="color_schema.item">
        <div class="partners">
          <img src="./assets/paykeeper.png" alt="paykeeper" class="payment-icon">
          <img src="./assets/visa.png" alt="visa" class="payment-icon">
          <img src="./assets/mastercard.png" alt="mastercard" class="payment-icon">
          <img src="./assets/mir.png" alt="mir" class="payment-icon">
        </div>
      </div>
      <modal-block id="payments" title="Новый способ вывода" :items="modalItems" v-if="$route.path.includes('/payments')"/>
    </div>

  </div>

  <div id="lending-app" v-else>
    <router-view/>
  </div>

</template>
<script>
import LogoBox from './components/LogoBox.vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import VueCharts from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    LogoBox,
    NavBar,
    SideBar,
    VueCharts
  },
  data () {
    return {
      paymentItems: [
        {
          name: 'Credit card',
          icon: require('./assets/Credit card.svg'),
          number: '4275 **** **** 4563'
        },
        {
          name: 'Web Money',
          icon: require('./assets/webmoney-paying-logo.svg'),
          number: '+79281248796'
        },
        {
          name: 'Yandex Money',
          icon: require('./assets/yandex-pay-logo.svg'),
          number: '410011435701035'
        },
        {
          name: 'Qiwi',
          icon: require('./assets/qiwi.svg'),
          number: '+79281248796'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['color_schema']),
    modalItems () {
      var arr = []
      this.paymentItems.forEach(function (el) { arr.push({ value: el.name }) })
      return arr
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'MontserratBold';
  src: url('./assets/fonts/Montserrat-Bold.ttf');
}

html {
  background-color: #252A5E;
}

body {
  overflow: -webkit-paged-x;
}

div#app {
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 100px 1fr;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
}

.body-app {
}

.logo-box {
}
.nav-bar {
}
.side-bar {
}

.text {
  font-family: MontserratBold;
}

.default-button:hover {
  color: white;
  background-position: right center; /* change the direction of the change here */
}

.default-button {
  width: 150px;
  height: 100%;
  background-size: 200% auto;
  transition: 0.5s;
  background-image: linear-gradient(to right, #9834D7 0%, #3D79DC 51%, #9834D7 100%);
  border-radius: 33px;
  color: white;
  letter-spacing: 0.05em;
  line-height: 19px;
  box-shadow: #060333 0px 3px 20px;
  border-color: transparent;
}

#lending-app {
  position: absolute;
  width: 100%;
  height: 100%;
}

.content-app {
  position: relative;
  /*top: 100px;*/
  /*left: 280px;*/
  display: grid;
  grid-template-columns: 1fr 3.45fr;
  grid-auto-rows: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  height: 100%;
  width:100%;
  padding: 33px;
  overflow: auto;
  font-size: 12px;
}

/*.content-app1 {
  position: fixed;
  top: 100px;
  left: 280px;
  display: grid;
  grid-template-columns: minmax(max-content, 230px) minmax(max-content, 795px);
  grid-template-rows: 305px 305px;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  max-height: calc(100vh - 100px);
  width: calc(100% - 280px);
  padding: 33px;
  overflow: auto;
  font-size: 12px;
  }*/

  .app-content {
    position: relative;
    /* height: 100vh; */
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 67px;
    overflow: auto;
  }

  .content-app1 {
    position: relative;
    /* top: 100px; */
    /* left: 280px; */
    display: grid;
    grid-template-columns: 22% 76%;
    grid-template-rows: 305px 305px;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    height: 100%;
    width: 100%;
    padding: 33px;
    /* overflow: auto; */
    font-size: 12px;
  }

  .content-footer {
    position: relative;
    height: 67px;
    /* bottom: 0; */
    width: 100%;
    /* left: 280px; */
    padding: 25px 35px;
  }

  .settings-app {
    position: relative;
/*    top: 100px;
left: 280px;*/
max-height: 100%;
width: 100%;
padding: 33px;
/*overflow: auto;*/
}

.dark {
  background-color: #282855;
}
.light {
  background-color: #F2F2F6;
}

.dark-item {
  background-color: #37376A ;
  color: white;
}

.light-item {
  background-color: white;
  color: #484D78;
}

.dark-text {
  color: #A1A1C3;
}

.light-text {
  color: #484D78;
}

.dark-blue {
  color: #484D78;
}

.grey {
  color: #A1A1C3;
}

.custom-select:focus,.custom-select:active {
 outline: none !important;
 box-shadow: none;
}

.white-text {
  color:  white;
  font-family: MontserratBold;

}

.tooltip .arrow {
  display: none;
}
.tooltip-inner {
  max-width: 280px;
  padding: 0.6rem;
  color: #484D78;
  text-align: center;
  background-color: #D6D6EA;
  border-radius: 0.25rem;
  font-size: 12px;
}
.bs-tooltip-bottom {
  padding: 0;
}
.tooltip.show {
  opacity: 1;
}

::-webkit-scrollbar
{
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track
{
  background: #4B4B7A;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb
{
  background: #8585AA;
  border-radius: 53px;
}

* {
  outline: none !important;
}

input.text-input {
  background: transparent;
  border-radius: 3px;
  border: 2px solid #595986;
  color: white;
  height: 45px;
  font-size: 12px;
  padding: 15px;
  width: 100%;
}
.dark-extra {
  color: #7A74F0;
}

img.search-icon {
  width: 13px;
  height: 13px;
  margin: 10px;
}

img.avatar-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.profile-block {
  grid-column: 1/2;
  grid-row: 1/2;
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-row-gap: 3px;
}
.stream-block {
  grid-column: 1/2;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-row-gap: 3px;
}
.user-statistic {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 14px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.user-statistic > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.small-text {
  font-size: 9px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.stream-block > .title-block {
  font-size: 12px;
  padding: 25px;
}

.streamer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.stream-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stream-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.stream-date > .time {
  font-size: 24px;
  margin-top: 15px;
}

img.avatar-streamer {
  width: 25px;
  height: 25px;
  margin-bottom: 10px;
}

img.play-btn {
  width: 45px;
  height: 45px;
  margin: 15px;
  cursor: pointer;
}
/*.content-footer {
  position: absolute;
  height: 67px;
  bottom: 0;
  width: calc(100% - 280px);
  left: 280px;
  padding: 25px 35px;
  }*/
</style>

<style>
@media (max-width: 990px) {
  div#app {
    grid-template-columns: 103px 1fr;
    font-size: 10px;
  }
  .content-app1 {
    padding: 15px;
  }
}

@media (min-width: 1300px) {
  div#app {
    grid-template-columns: 210px 1fr;
  }
  .content-app1 {
    padding: 20px;
  }
}

@media (min-width: 1366px) {
  div#app {
    grid-template-columns: 280px 1fr;
  }
  .content-app1 {
    padding: 33px;
  }
}

@media (max-width: 800px) {
  .content-app {
    padding: 23px;
  }
  .app-content {
    width: calc(100vh - 425px);
  }
}

</style>

<style>
.vue-tooltip.tooltip-custom {
  background-color: #D6D6EA;
  color: #282855;
  padding: 15px;
  border-radius: 5px;
  max-width: 380px;
}

.vue-tooltip.tooltip-custom > .tooltip-arrow {
  border-color: #D6D6EA !important;
}

.collapse-link{
  background: url(./assets/triangle-short-down.svg) no-repeat center;
  height: 20px;
  width: 20px;
  background-size: 10px 5px;
}

.collapse-link-up{
  background: url(./assets/triangle-short-up.svg) no-repeat center;
  height: 20px;
  width: 20px;
  background-size: 10px 5px;
}
</style>
