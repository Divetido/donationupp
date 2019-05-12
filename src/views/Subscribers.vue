<template>
  <div class="content-app1 subescribers">
    <div class="info-blocks">
      <info-block title="Мои подписчики" counter="1000"/>
      <info-block title="В этом месяце" counter="500"/>
    </div>
    <info-round-chart title="Процент Подписок" :sections="sections" :legends="true" :total="70" />
    <subscribers-list />
  </div>
</template>
<script>
import InfoBlock from '@/components/InfoBlock.vue'
import InfoRoundChart from '@/components/InfoRoundChart.vue'
import SubscribersList from '@/components/SubscribersList.vue'

export default {
  name: 'subscribers',
  components: {
    InfoBlock,
    InfoRoundChart,
    SubscribersList
  },
  data () {
    return {
      sections: [
        { label: 'Простая', value: 25, color: '#D6D6EA' },
        { label: 'Премиум', value: 20, color: '#8280FF' },
        { label: 'Платная', value: 25, color: '#636393' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
