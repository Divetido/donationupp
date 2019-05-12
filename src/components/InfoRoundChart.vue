<template>
  <div class="round-chart" :class="color_schema.item">
    <div class="chart-title text" >
     {{ title }}
     <div class="amount-total text" v-if="amount != 0">
      {{ amount }} EUR
    </div>
  </div>

  <vc-donut
  :background="background_color" foreground="#636393"
  :size="80" unit="%" :thickness="20"
  :has-legend="legends" legend-placement="bottom"
  :sections="sections" :total="total" class="text" :class="color_schema.text"
  >
  <h1 class="total text" :class="color_schema.title_text">
    {{customTotal}}
  </h1>
</vc-donut>
<div v-if="!legends" class="cdc-legend text" :class="color_schema.text">
  <div class="result" v-if="amount != 0">
    <div class="amount-percent" :class="color_schema.title_text">
      {{ amountPercent }} EUR
      <p :class="color_schema.text">собрано</p>
    </div>
    <div class="amount-remainder" :class="color_schema.title_text">
      {{ amountRemainder }} EUR
      <p :class="color_schema.text">осталось</p>
    </div>
  </div>

  <span v-else>
    подписчиков, смотрящих стримы, донатят
  </span>
</div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'info-round-chart',
  props: {
    sections: {
      type: Array,
      default: {}
    },
    legends: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 100
    },
    title: {
      type: String
    },
    amount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters(['color_schema', 'user', 'state_checkbox']),
    background_color () {
      return this.state_checkbox ? 'white' : '#37376A'
    },
    amountPercent () {
      return (this.total / 100) * this.amount
    },
    amountRemainder () {
      return this.amount - this.amountPercent
    },
    customTotal () {
      if (this.title == 'Сбор средств' && this.amount == 0) {
        return 'нет активных сборов'
      }

      return this.total + '%'
    }
  }
}
</script>
<style >
.round-chart {
  border-radius: 5px;
  padding: 25px;
  font-size: 9px;
  grid-column: 1 / 2;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 1fr 3fr 2fr;
}
.chart-title {
  margin-bottom: 30px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
h1.total {
  font-size: 24px;
}

/*.cdc-legend {
  justify-content: space-between !important;
  }*/
  .cdc-legend-item > span {
    font-size: 9px;
  }
  .cdc-legend-item-color {
    height: 10px;
    width: 10px;
    border-radius: 1px;
    margin-right: 5px;
  }
  .legends {
    font-size: 10px;
    text-align: center;
    margin-top: 30px;
  }

  .result {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

</style>

<style>
  .cdc-legend {
    align-self: end;
  }
</style>
