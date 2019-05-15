<template>
  <div class="content-app1 payments">
    <div class="info-blocks">
      <info-block title="Платежей" counter="199" amount="2150"/>
      <info-block title="В этом месяце" counter="140" amount="1550"/>
    </div>
    <info-round-chart title="Процент Доната" :sections="sections" :total="35" />
    <chart-block />
    <table-block class="history-payments" title="История платежей" type="payment" />
  </div>
</template>

<script>
import InfoBlock from '@/components/InfoBlock.vue'
import InfoRoundChart from '@/components/InfoRoundChart.vue'
import ChartBlock from '@/components/ChartBlock.vue'
import TableBlock from '@/components/TableBlock.vue'

export default {
  name: 'payments',
  components: {
    InfoBlock,
    InfoRoundChart,
    ChartBlock,
    TableBlock
  },
  data () {
    return {
      sections: [
        { label: 'Подписчики', value: 11, color: '#D6D6EA' }
      ]
    }
  }
}
</script>

<style >
.history-payments {
  border-radius: 5px;
}

.history-payments {
  padding: 10px 0;
  grid-column: 2/2;
  grid-row: 2/3;
  position: relative;
}
</style>
