<template>
  <div class="side-bar" :class="color_schema.item">
    <ul class="list-menu-links list-group list-group-flush">
      <li class="list-group-item">
        <router-link to="/dashboard" class="text menu-link" :class="color_schema.link">
          <img src="../assets/profile.svg" class="menu-icon">
          <span class="d-none d-lg-block">ПАНЕЛЬ УПРАВЛЕНИЯ</span>
        </router-link>
      </li>

      <li class="list-group-item">
        <router-link to="/subscribers" class="text menu-link" :class="color_schema.link">
          <img src="../assets/user.svg" class="menu-icon">
          <span class="d-none d-lg-block">{{ user ? "ПОДПИСКИ" : "ПОДПИСЧИКИ" }}</span>
        </router-link>
      </li>

      <li class="list-group-item" v-if="user">
        <router-link to="/advancement" class="text menu-link" :class="color_schema.link">
          <img src="../assets/gift.svg" class="menu-icon">
          <span class="d-none d-lg-block">ДОСТИЖЕНИЯ</span>
        </router-link>
      </li>

      <li class="list-group-item" v-if="!user">
        <router-link to="/payments" class="text menu-link" :class="color_schema.link">
          <img src="../assets/donut.svg" class="menu-icon">
          <span class="d-none d-lg-block">ПЛАТЕЖИ</span>
        </router-link>
      </li>

      <li class="list-group-item" v-if="!user">
        <router-link to="/milestone" class="text menu-link" :class="color_schema.link">
          <img src="../assets/milestone.svg" class="menu-icon">
          <span class="d-none d-lg-block">МАЙЛСТОУНЫ</span>
        </router-link>
      </li>

      <li class="list-group-item" v-if="!user">
        <router-link to="/widgets" class="text menu-link" :class="color_schema.link">
          <img src="../assets/wiget.svg" class="menu-icon">
          <span class="d-none d-lg-block">ВИДЖЕТЫ</span>
        </router-link>
      </li>

      <li class="list-group-item" v-if="!user">
        <router-link to="/player" class="text menu-link" :class="color_schema.link">
          <img src="../assets/player.svg" class="menu-icon">
          <span class="d-none d-lg-block">ПЛЕЕР</span>
        </router-link>
      </li>

      <li class="list-group-item">
        <a href="#" v-b-toggle.settings class="text menu-link" :class="[color_schema.link, activeLink ]">
          <img src="../assets/settings.svg" class="menu-icon">
          <span class="d-none d-lg-block">НАСТРОЙКИ</span>
          <span class="drop"></span>
        </a>
      </li>
      <b-collapse id="settings" class="collapse-content" >
        <router-link to="/settings/account" class="text settings-link" :class="color_schema.link">
          АККАУНТА
        </router-link>

        <router-link to="/settings/donat" class="text settings-link" :class="color_schema.link">
          ДОНАТОВ
        </router-link>

        <router-link to="/settings/alerts" class="text settings-link" :class="color_schema.link" v-if="!user">
          АЛЕРТОВ
        </router-link>
      </b-collapse>


      <li class="list-group-item">
        <router-link to="/help" class="text menu-link" :class="color_schema.link">
          <img src="../assets/help.svg" class="menu-icon">
          <span class="d-none d-lg-block">ПОМОЩЬ</span>
        </router-link>
      </li>

      <li class="list-group-item">
        <router-link to="/policy" class="text menu-link" :class="color_schema.link">
          <img src="../assets/policy.svg" class="menu-icon">
          <span class="d-none d-lg-block">ПРАВИЛА</span>
        </router-link>
      </li>
    </ul>
    <li class="list-group-item exit-link">
      <router-link to="/" class="text menu-link exit" exact :class="color_schema.link">
        <img src="../assets/exit.svg" class="menu-icon">
        <span class="d-none d-lg-block">ВЫХОД</span>
      </router-link>
    </li>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'side-bar',
    mounted() {
      if (this.$route.path.includes('/settings')) {
        this.$root.$emit('bv::toggle::collapse', 'settings').show
      }
    },
    computed: {
      ...mapGetters(['color_schema', 'user']),
      activeLink() {
        return {
          'router-link-active': this.$route.path.includes('/settings') ? true : false
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.collapsing {
  -webkit-transition: none;
  transition: none;
  display: none;
}
.side-bar {
  max-width: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  overflow: auto;
}
.list-group-item {
  background-color: transparent;
  border: none;
  padding: 0;
}
.list-menu-links {
  display: grid;
  grid-row-gap: 3px;
}

.dark-link, .light-link {
  color: #9B9BB5;
}

a.router-link-active.dark-link, .dark-link:hover  {
  background-color: #434377;
  color: white;
  text-decoration: none;
  border-radius: 10px;
}
a.router-link-active.light-link, .light-link:hover  {
  background-color: #F2F2F6;
  color: #484D78;
  text-decoration: none;
  border-radius: 10px;
}

.menu-icon {
  margin-right: 22.3px;
  height: 16px;
}
a.menu-link {
  display: flex;
  height: 60px;
  text-align: left;
  padding-left: 28.5px;
  align-items: center;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.03em;
}

.collapse {
  padding-top: 10px;
  padding-left: 25%;
  font-size: 13px;
  display: grid;
  grid-auto-rows: 1fr;
  grid-row-gap: 20px;
}

a.router-link-active.settings-link, .settings-link:hover {
  color: white;
  text-decoration: none;
  background-color: transparent;
}

span.drop {
  background: url('../assets/play-button.svg') no-repeat right 0.75rem center/8px 10px;
  width: 100%;
  height: 100%;
}


@media (max-width: 990px) {
  a.menu-link {
    font-size: 10px;
  }
}

@media (min-width: 1300px) {

}

@media (min-width: 1366px) {

}
</style>
