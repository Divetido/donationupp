<template>
  <div class="milestone-box">
    <div class="top-box" :class="color_schema.item">
      <div class="cash-box text">
        ${{ money }}
      </div>
      <div class="inscription text">
        Суммарный донат
      </div>
      <button style="border: none" class="milestone-delete"></button>
    </div>
    <div class="middle-box" :class="color_schema.item">
      <div class="milestone-badge">
        <div class="count text">
          {{badge_count}}
        </div>
        <div class="inscription text">
          Бейдж
        </div>
      </div>
      <div class="animation">
       <div class="count text ">
         {{animation_count}}
       </div>
       <div class="inscription text ">
        Анимация
      </div>
    </div>
    <div class="sound">
      <div class="count text ">
        {{sound_count}}
      </div>
      <div class="inscription text ">
        Мелодия
      </div>
    </div>
  </div>
  <div class="bottom-box" :class="color_schema.item">
    <div class="users-avatar">
      <img src="../assets/avatar.png" alt="avatar-milestone" class="milestone-img block1">
      <img src="../assets/avatar.png" alt="avatar-milestone" class="milestone-img block2">
      <img src="../assets/avatar.png" alt="avatar-milestone" class="milestone-img block3">
      <img src="../assets/avatar.png" alt="avatar-milestone" class="milestone-img block4">
      <img src="../assets/avatar.png" alt="avatar-milestone" class="milestone-img block5">
    </div>
  </div>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'milestone-box',
    props: ['money', 'badge_count', 'animation_count', 'sound_count'],
    computed: {
      ...mapGetters(['color_schema'])
    }
  }
</script>

<style>
.milestone-box {
  /*width: 300px;*/
  /*height: 280px;*/
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-rows: repeat(3,1fr);
  grid-row-gap: 3px;
}
.middle-box {
  width: 100%;
  /*height: 79px;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.milestone-badge, .animation, .sound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 80px;
  text-align: center;
  padding: 8px;
}
.inscription {
  font-size: 10px;
}
.top-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
}
.bottom-box {
  /*height: 90px;*/
  /*width: 100%;*/
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.count {
  font-size: 18px;
  text-align: center;
  margin-bottom: 4px;
}

.milestone-delete {
  background: url(../assets/delete.svg) no-repeat center;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
}

.users-avatar > img {
  width: 40px;
  height: 40px;
}

.users-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}

img.block1.milestone-img {
  left: 26%;
}
img.block2.milestone-img {
  left: 33.7%;
}
img.block3.milestone-img {
  left: 43%;
}
img.block4.milestone-img {
  left: 53%;
}
img.block5.milestone-img {
  left: 63%;
}

img.milestone-img {
  position: absolute;
  border: 2px solid white;
  border-radius: 100%;
}
</style>
