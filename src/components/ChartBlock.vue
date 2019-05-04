<template>
  <div class="chart" :class="color_schema.item">
    <div class="chart-box">
      <div class="chart-box-title text">Динамика платежей, EUR</div>
      <div class="chart-select text" :class="color_schema.text">
        Период:
        <div class="select-block">
          <b-dropdown :toggle-class="['drop-select-block', color_schema.title_text]" id="period" v-model="chart_sections" :text="chart_sections" dropbottom class="btn my-btn period">
            <b-dropdown-item v-for="option in chart_options"
            :value="option.value"
            :key="option.value"
            :class="[{ active: chart_sections == option.value }, color_schema.title_text]"
            @click="chart_sections = option.value; onChange(chart_sections)"
            >
            {{ option.value }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
  <bar-chart
  :class="$style.canvas_height"
  :datasets="datasets"
  :options="dataset_options"
  />
</div>
</template>

<script>
  import BarChart from '@/components/BarChart.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'chart-block',
    components: {
      BarChart
    },
    computed: {
      ...mapGetters(['color_schema'])
    },
    data() {
      return {
        chart_sections: 'Январь',
        chart_options: [
        { value: 'Январь' },
        { value: 'Февраль' },
        { value: 'Март' },
        { value: 'Апрель' },
        { value: 'Май' },
        { value: 'Июнь' },
        { value: 'Июль' },
        { value: 'Август' },
        { value: 'Сентябрь' },
        { value: 'Октябрь' },
        { value: 'Ноябрь' },
        { value: 'Декабрь' }
        ],
        datasets: {
          labels: Array.from({length: 30}, (v, k) => (k+1 + ' Января')) ,
          datasets: [{
            data: Array(30).fill().map(() => Math.round(Math.random() * (1000 - 600) + 600)),
            backgroundColor: '#8585AA',
          }]
        },
        dataset_options: {
          layout: {
            padding: {
              left: 10,
              right: 10,
              bottom: 50
            }
          },
          tooltips: {
            mode: 'point',
            backgroundColor: '#D6D6EA',
            bodyFontColor: '#282855',
            bodyFontSize: 8,
            xPadding: 18,
            yPadding: 15,
            position: 'nearest',
            displayColors: false,
            titleFontColor: '#282855',
            titleFontSize: 12,
            callbacks: {
             title: function(tooltipItem, data) {
               return tooltipItem[0].yLabel + ' EUR';
             },
             label: function(tooltipItem, data) { 
              return tooltipItem.xLabel ;
            }
          }
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            ticks: {
                    display: false //this will remove only the label
                  }
                }],
                yAxes: [{
                  ticks: {
                    min: 0,
                    max: 1000,
                    beginAtZero:true,
                    stepSize: 200
                  }
                }]
              }
            }
          }
        },
        methods: {
          onChange(value) {
            this.datasets = {
              labels: Array.from({length: 30}, (v, k) => (k+1 + value)) ,
              datasets: [{
                data: Array(30).fill().map(() => Math.round(Math.random() * (1000 - 600) + 600)),
                backgroundColor: '#8585AA',
              }]
            }
          }
        }
      }
    </script>

    <style scoped>
    .chart, .period {
      position: relative;
      font-size: 12px;
      grid-column: 2/2;
      grid-row: 1/2;
      height: 100%;
      border-radius: 5px;
    }
    .chart-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px;
    }

    .chart-select {
      display: flex;
      align-items: center;
      width: 30%;
      justify-content: space-between;
    }

    .period {
      border: none;
      box-shadow: none;
    }

    .custom-select {
      background-color: transparent;
      border: none;
      background: url("../assets/play-button.svg") no-repeat right 0.75rem center/8px 10px;
      /*color: white;*/
    }
  </style>

  <style module>
  .canvas_height {
    height: calc(100% - 50px);
  }
</style>
