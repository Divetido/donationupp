<template>
  <div class="info-block" :class="color_schema.item">
    <div class="title text">
      {{ title }}
    </div>
    <div class="counters">
      <div class="counter text" :class="color_schema.text">
        {{ counter }}
      </div>
      <template v-if="amount != null">
        <div class="amount text" :class="color_schema.extra">
          {{ amount }} EUR
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'info-block',
  props: {
    title: {
      type: String
    },
    counter: {
      type: String
    },
    amount: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapGetters(['color_schema'])
  }
}
</script>
<style scoped>
.info-block {
  border-radius: 5px;
  padding: 25px;
  display: grid;
}
.title {
  align-self: flex-start;
  font-size: 12px;
  line-height: 15px;
}
.counters {
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  font-size: 24px;
}

@media (max-width: 1366px) {
  .counters {
    font-size: 18px;
  }
}
</style>
