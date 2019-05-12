<template>
  <div id="lending-page">
    <div class="lending-header">
      <div class="navbar">
        <div class="image-logo">
          <img src="../assets/Image 21@2x.png" class="logo">
        </div>
        <div class="buttons">
          <b-button v-b-modal.login-modal variant="outline-light" class="sign-in text">ВОЙТИ</b-button>
        </div>
      </div>
      <div class="main-content">
        <div class="main title text">
          Главный сервис для приема <br>
          и отправки донатов.
        </div>
        <div class="main-button">
          <button v-b-modal.login-modal variant="btn" class="default-button text">ПРИСОЕДИНИТЬСЯ</button>
        </div>
      </div>
    </div>
    <div class="lending-content">
      <div class="content-item container">
        <div class="item-video left">
          <a href="#">
            <img class="play" src="../assets/play video.svg">
          </a>
        </div>
        <div class="content">
          <div class="item title title text">
            Прием донатов
          </div>
          <div class="item description text">
            Минимальная комиссия, максимум платежных систем.
          </div>
          <div class="item-button">
            <button v-b-modal.login-modal variant="btn" class="default-button text">ПОПРОБОВАТЬ</button>
          </div>
        </div>
      </div>
      <div class="content-item container">
        <div class="content">
          <div class="item title title text">
            Виджеты
          </div>
          <div class="item description text">
            Последнее сообщение, самые крупные донатеры, последние донатеры/подписчики, количество подписчиков и многое другое!
          </div>
          <div class="item-button">
            <button v-b-modal.login-modal variant="btn" class="default-button text">ПОПРОБОВАТЬ</button>
          </div>
        </div>
        <div class="item-video right">
          <a href="#">
            <img class="play" src="../assets/play video.svg">
          </a>
        </div>
      </div>
      <div class="content-item container">
        <div class="item-video left">
          <a href="#">
            <img class="play" src="../assets/play video.svg">
          </a>
        </div>
        <div class="content">
          <div class="item title title text">
            Алерты
          </div>
          <div class="item description text">
            Самая гибкая настройка позиционирования элементов уведомлений. Сообщения/медиа при донате и подписке.
          </div>
          <div class="item-button">
            <button v-b-modal.login-modal variant="btn" class="default-button text">ПОПРОБОВАТЬ</button>
          </div>
        </div>
      </div>
      <div class="content-item container">
        <div class="content">
          <div class="item title title text">
            Премиальная подписка
          </div>
          <div class="item description text">
            Для особенных донатеров вы можете создавать крутые условия! Персональные иконки, бейджики, мелодии и анимацию ника.
          </div>
          <div class="item-button">
            <button v-b-modal.login-modal variant="btn" class="default-button text">ПОПРОБОВАТЬ</button>
          </div>
        </div>
        <div class="item-video right">
          <a href="#">
            <img class="play" src="../assets/play video.svg">
          </a>
        </div>
      </div>
    </div>
    <div class="lending-support">
      <img class="buble a" src="../assets/1.png"></img>
      <img class="buble b" src="../assets/2.png"></img>
      <img class="buble c" src="../assets/3.png"></img>
      <div class="support-images">
        <img class="coins" src="../assets/coins@2x.png"></img>
      </div>
      <div class="support title title text">
        Хочешь поддержать своего стримера?
      </div>
      <div class="support description text">
        Покупая премиум подписку на любимого стримера ты получаешь лучшие элементы кастомизации! <br>
        Чем больше донат - тем больше фишек.
      </div>
      <div class="support-lending-button">
        <button v-b-modal.login-modal variant="btn" class="default-button text">ПОДДЕРЖАТЬ</button>
      </div>
    </div>

    <div class="lending counter-comments">
      <img class="buble d" src="../assets/4.png"></img>
      <img class="buble e" src="../assets/5.png"></img>
      <img class="buble f" src="../assets/6.png"></img>
      <img class="buble g" src="../assets/7.png"></img>
      <img class="buble h" src="../assets/8.png"></img>
      <div class="counter">
        <div class="count text">
          999999
        </div>
        <div class="count-text text">
          человек стримят с нами
        </div>
      </div>

      <div class="title text">
        Отзывы о нас
      </div>
      <div class="custom-carousel">
        <b-carousel id="carousel-comments" indicators  img-width="900" img-height="400">
            <b-carousel-slide img-blank img-alt="Blank image" v-for="(comment, index) in comments">
              <div class="comment">
                <img :src="comment.user.avatar" class="author content-icon">
                <div class="author-name text">{{comment.user.user_name}}</div>
                <div class="description text">
                  {{ comment.message }}
                </div>
              </div>
            </b-carousel-slide>
        </b-carousel>
      </div>
    </div>

    <div class="footer">
      <img class="footer" src="../assets/footer@2x.png">
      <div class="footer-content">
        <div class="title text">
          Присоединяйся к нам!
        </div>
        <div class="footer-button">
          <b-button v-b-modal.login-modal variant="btn" class="default-button text">ВОЙТИ В СИСТЕМУ</b-button>
        </div>
      </div>
      <footer>
        <div class="logo">
          <img src="../assets/Image 21@2x.png" class="logo">
        </div>
        <div class="social-buttons">
          <a href="#" ><img src="../assets/twitch.svg" class="icon"></a>
          <a href="#" ><img src="../assets/vk.svg" class="icon"></a>
          <a href="#" ><img src="../assets/youtube-logo.svg" class="icon"></a>
        </div>
      </footer>
    </div>
    <login-modal />
  </div>
</template>

<script>
import LoginModal from '@/components/modals/LoginModal.vue'

export default {
  name: 'home',
  components: {
    LoginModal
  },
  data () {
    return {
      comments: null
    }
  },
  created () {
    this.$http.get('comments/').then((res) => {
      this.comments = res.body
    })
  }
}

</script>

<style scoped>

@font-face {
  font-family: 'MontserratSemiBold';
  src: url('../assets/fonts/Montserrat-SemiBold.ttf');
}
@font-face {
  font-family: 'MontserratBold';
  src: url('../assets/fonts/Montserrat-Bold.ttf');
}

.text {
  font-family: 'MontserratBold', sans-serif;
}

#lending-page {
  height: 100%;
  width: 100%;
}

.title {
  color: white;
  font-size: 40px;
  line-height: 69px;
}

.description {
  color: #9197CE;
  font-size: 16px;
  color: #9197CE;
  line-height: 30px;
}

dl, ol, ul {
  margin-top: 0;
  margin-bottom: 0;
}

/* Header */

.lending-header {
  height: 100%;
  width: 100%;
  background: url(../assets/Background@2x.png) no-repeat center top;
  background-size: 100% 100%;
}

.navbar {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px 115px;
}

.logo {
  height: 40px;
}

.buttons {
  height: 45px;
}
button.btn.sign-in {
  width: 130px;
  height: 100%;
  border: 2px solid white;
  border-radius: 23px;
  color: white;
  font-size: 14px;
  line-height: 18px;
  padding: 13px 38px;
}
button.btn.sign-in:hover {
  color: #4727B7;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 115px;
}

.main.title {
  font-size: 47px;
  line-height: 69px;
}

.main-button {
  height: 65px;
  margin-top: 62px;
}

.default-button:hover {
  color: white;
  background-position: right center; /* change the direction of the change here */
}

.default-button {
  width: 250px;
  height: 100%;
  background-size: 200% auto;
  transition: 0.5s;
  background-image: linear-gradient(to right, #9834D7 0%, #3D79DC 51%, #9834D7 100%);
  border-radius: 33px;
  color: white;
  padding: 23px 37px;
  letter-spacing: 0.05em;
  line-height: 19px;
  box-shadow: #06033380 0px 3px 50px;
}

/* Content */

.lending-content {
  width: 100%;
  height: auto;
  position: relative;
  /*background: #252A5E;*/
  display: flex;
  flex-direction: column;
}

.content-item {
  display: flex;
  margin-bottom: 150px;
  width: 100%;
  /*padding: 0 120px;*/
  justify-content: space-between;
}

.content-item:first-child {
  padding-top: 41px;
}

.content-item:last-child {
  padding-bottom: 70px;
}

.item-video {
  height: 300px;
  width: 500px;
  background-image: linear-gradient(to bottom right, #38326F, #3F4276);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-video.right {
  margin-left: 60px;
}

.item-video.left {
  margin-right: 60px;
}

.content {
  display: flex;
  flex-direction: column;
  width: 600px;
}

.item.title {
  font-size: 27px;
  line-height: 69px;
}

.item.description {
  margin: 50px 0;
}

.item-button {
  margin-top: 10px;
}

.item-button > button.btn.default-button {
  width: 240px;
  padding: 23px 52px;
}

/* Support */

.lending-support {
  /*background: #252A5E;*/
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 145px;
}

img.coins {
  width: 100px;
  margin: 40px;
}

img.buble {
  position: absolute;
}

img.buble.a {
  top: 181px;
  left: 375px;
}

img.buble.b {
  top: 144px;
  right: 380px;
}

img.buble.c {
  bottom: 146px;
  right: 335px;
}

.support-images, .support.title, .support.description, .support-lending-button {
  align-self: center;
  text-align: center;
}

.support.title {
  font-size: 40px;
  margin: 40px;
}

.support.description {
  margin-bottom: 70px;
}

.support-lending-button > button.btn.default-button {
  padding: 23px 63px;
}

/* Counter-Comments */

img.buble.d {
  top: 105px;
  left: 390px;
}

img.buble.e {
  top: 279px;
  right: 320px;
}

img.buble.f {
  top: 434px;
  left: 560px;
}

img.buble.g {
  bottom: 236px;
  left: 394px;
}

img.buble.h {
  bottom: 63px;
  right: 280px;
}

.counter {
  padding-top: 216px;
  margin-bottom: 306px;
}

.count {
  color: #8B72FF;
  font-size: 80px;
  line-height: 97px;
}

.count-text.text {
  font-size: 21px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: white;
}

/* Footer */

div.footer {
  position: relative;
  width: 100%;
  height: 100%;
  /*background: #252A5E;*/
}

img.footer {
  width: 100%;
  height: 100%;
  position: absolute;
}

.footer-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  padding: 245px;
}

div.footer .title {
  margin-bottom: 50px;
}

.footer-button > button.btn.default-button {
  font-size: 15px;
  letter-spacing: 0.05em;
  line-height: 19px;
}

.footer-button {
  height: 65px;
}

footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 0 115px;
  bottom: 30px;
}

.social-buttons {
  display: flex;
  justify-content: center;
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

.modal-title {
  font-size: 20px;
  color: white;
  line-height: 24px;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #9D95C9;
  border-color: #9D95C9;
  border-width: 2px;
  background-color: transparent;
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
  border-color: #9D95C9;
  border-width: 2px;
  background-color: transparent;
}

.form-check {
  /* position: relative; */
  /* display: block; */
  /* padding-left: 1.25rem; */
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin-top: 62px;
}

a.social-button {
  width: 45px;
  height: 45px;
  padding: 14px;
  background-color: #635CDA;
  border-radius: 30px;
  margin: 60px 10px;
  /* text-align: center; */
  /* vertical-align: middle; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

img.play {
  width: 100px;
  height: 100px;
}

</style>

<style>

.counter-comments {
  width: 100%;
  height: auto;
  position: relative;
  /* padding: 45px; */
  /*background: #252A5E;*/
  text-align: center;
}

.carousel-indicators li {
  width: 10px !important;
  height: 10px !important;
  border-radius: 100% !important;
  margin: 0 10px !important;
  background-color: #646CB4 !important;
}
.carousel-indicators .active {
  background-color: #FFFFFF !important;
}

.carousel {
  padding-bottom: 34px !important;
}

.carousel-item div.content-description {
  max-width: 758px !important;
  text-align: center !important;
  margin: 0 !important;
}
ol.carousel-indicators {
  bottom: -47px !important;
}

.comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.comment .description {
  max-width: 576px;
}

img.author {
  width: 115px;
  height: 115px;
  border-radius: 100%;
  margin-top: 82px;
}

.author-name {
  color: white;
  font-size: 21px;
  letter-spacing: 0.01em;
  line-height: 25px;
  margin: 40px;
}

.custom-carousel {
    position: relative;
    width: 100%;
    height: 100%;
}

@media (max-width: 800px) {
  #lending-app {
    width: 100vh;
  }
  .carousel-item {
    margin-top: 145px !important;
  }
}

</style>
