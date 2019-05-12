<template>
  <div class="logo-box" :class="color_schema.item">
    <router-link to="/" class="logo-link" exact>
      <img src="../assets/logo1.png" class="logo-icon d-lg-none d-block" height="60px">
      <img :src="logo_path" class="logo d-none d-lg-block">
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'logo-box',
  data () {
    return {
      dark: require('../assets/logo/logo-dark.png'),
      light: require('../assets/logo.png')
    }
  },
  computed: {
    ...mapGetters(['color_schema', 'user', 'state_checkbox']),
    logo_path () {
      return this.state_checkbox ? this.dark : this.light
    }
  }
}
</script>

<style scoped>
.logo-box {
    position: relative;
    padding: 0 20px;
    max-width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo {
  width: 136.79px;
  height: 45px;
}
.logo-icon{
  height: 60px;
}
</style>
