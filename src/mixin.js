import Vue from 'vue'

Vue.mixin({
  computed: {
    $state_checkbox() {
      return this.$store.state.state_checkbox;
    },
    $color_schema() {
      return this.$state_checkbox ? 'light' : 'dark';
    },
    $color_config() {
      return {
        dark: {
          color: {
            title: 'white',
            text: 'grey',
            description: 'dark-blue',
            extra: 'extra-dark',
            block: ''
          }
        },
        light: {
          color: {
            title: 'dark-blue',
            text: 'grey',
            description: 'white',
            extra: 'extra-light'
          }
        }
      }
    },

    $item_color_class() {
      return this.$state_checkbox ? 'light-item' : 'dark-item';
    },
    $link_color_class() {
      return this.$state_checkbox ? 'light-link' : 'dark-link';
    },
    $text_color_class() {
      return this.$state_checkbox ? 'dark-blue' : 'grey';
    }
  }
});
