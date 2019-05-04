<template>
  <div class="list-item text" :class="color_schema.item">
    <router-link to="/profile" class="profile-link">
      <div class="user d-flex">
        <div class="avatar">
          <img :src="avatar_url">
        </div>
        <div :class="['nickname', color_schema.title_text]" >
          {{ nickname }}
        </div>
      </div>
    </router-link>
    <div class="donate d-flex">
      <div :class="color_schema.text">
        Общий донат
      </div>
      <div class="money">
       {{ donate }} EUR
     </div>
   </div>
   <div class="sibscribe-date d-flex">
    <div :class="color_schema.text">
      Подписан на вас
    </div>
    <div class="date">
      {{ date }}
    </div>
  </div>
  <div class="state-sibscribe" :class="state">
    <img :src="update_icon" class="icon subscriber-icon">
    <span class="d-none d-xl-inline">{{ update_state }}</span>
  </div>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'list-item',
    props: ['avatar_url', 'nickname', 'date', 'donate', 'state'],
    data() {
      return {
        icon_path: {
          "simple": require("../assets/simple.svg"),
          "paid": {
            dark: require("../assets/platn.svg"),
            light: require("../assets/platn_dark.svg")},
            "premium": require("../assets/prem-dark.svg")
          },
          text_state: {
            "simple": "Простая подписка",
            "paid": "Платная подписка",
            "premium": "Премиум подписка"
          }
        }
      },
      computed: {
        ...mapGetters(['color_schema']),
        update_state(){
          return this.text_state[this.state]
        },
        update_icon(){
          if (this.state == 'paid') {
            return (this.$state_checkbox) ? this.icon_path[this.state]['light'] : this.icon_path[this.state]['dark']
          } else {
            return this.icon_path[this.state]
          }
        }
      }
    }
  </script>

  <style scoped>
  .premium {
    color: #8280ff;
  }

  .list-item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 60px;
    align-items: center;
    justify-items: start;
  }

  .money, .date {
    margin-left: 10px;
  }
  .subscriber-icon {
    margin-right: 12px;
  }
  .avatar {
    margin-right: 10px;
  }
  .avatar > img {
    width: 20px;
    height: 20px;
  }

  .list-item:hover {
    /*background-color: #434377;*/
    cursor: pointer;
  }
  .subscriber-icon {
    width: 17px;
  }

  @media (max-width: 1200px) {
    .list-item {
      grid-template-columns: 1fr 1fr 1fr auto;
    }

    .subscriber-icon {
      margin-right: 25px;
    }
  }

  a.profile-link > .user {
    display: flex;
    align-items: center;
}

</style>
