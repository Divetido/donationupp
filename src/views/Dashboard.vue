<template>
  <div class="content-app1 dashboard">
    <template v-if="!user">
      <div class="info-blocks">
        <info-block title="Платежей" counter="199" amount="2150"/>
        <info-block title="Подписчиков" counter="325"/>
      </div>
      
      <info-round-chart title="Сбор средств" :amount="800" :sections="sections" :total="40"/>
      <chart-block />
      <div class="history-activity text" :class="color_schema.item">
        <div class="activity-block">
          <div class="title-activity">
            Последние операции
          </div>
          <activity route="activity-streamer/"/>
        </div>

      </div>
      <!-- <table-block class="history-activity" :items="items" title="Последние операции" /> -->
    </template>
    <template v-else>
      <div class="profile-block">
        <div class="user-info" :class="color_schema.item">
          <img src="../assets/profile-avatar.png" alt="profile-avatar">
          <div class="text">
            Alice_Lidell
          </div>
        </div>
        <div class="user-statistic text" :class="color_schema.item">
          <div class="subscribe-staistic">
            <div> 245</div>
            <div class="small-text" :class="color_schema.text"> подписок</div>
          </div>
          <div class="payment-statistic">
            <div>55 </div>
            <div  class="small-text" :class="color_schema.text"> платежей</div>
          </div>
          <div class="advancement-statistic">
            <div> 15</div>
            <div  class="small-text" :class="color_schema.text"> достижений</div>
          </div>
        </div>
      </div>
      <div class="stream-block text">
        <div class="title-block " :class="color_schema.item">
          Ближайшие стримы
        </div>
        <div class="stream-info" :class="color_schema.item">
          <div class="streamer">
            <img src="../assets/avatar.png" alt="avatar" class="avatar-streamer">
            <div class="text">Snoop019</div>
          </div>
          <div class="stream-date">
            <div class="time">
              20:00
            </div>
            <div class="date" :class="color_schema.text">
              10 апреля
            </div>
          </div>
        </div>
        <div class="indicator" :class="color_schema.item">
          ...
        </div>
      </div>
      <div class="user-history-activity text" :class="color_schema.item">
        <div class="activity-block">
          <div class="title-activity">
            Последние операции
          </div>
          <activity route="activity-user/"/>
        </div>

      </div>
    </template>
  </div>
</template>

<script>
  import InfoBlock from '@/components/InfoBlock.vue'
  import InfoRoundChart from '@/components/InfoRoundChart.vue'
  import ChartBlock from '@/components/ChartBlock.vue'
  import TableBlock from '@/components/TableBlock.vue'
  import SubscribersList from '@/components/SubscribersList.vue'
  import Activity from '@/components/Activity.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'dashboard',
    components: {
      InfoBlock,
      InfoRoundChart,
      TableBlock,
      ChartBlock,
      SubscribersList,
      Activity
    },
    data() {
      return {
        items: null,
        sections: [
        { label: 'amount', value: 16, color: '#8280FF'},
        ],
      }
    },
    created () {
      this.$http.get('activity/').then((res) => {
        this.items = res.body;
      });
    },
    computed: {
      ...mapGetters(['color_schema', 'user'])
    },
  }
</script>


<style scoped>
.history-payments, .chart {
  border-radius: 5px;
}
.chart, .period {
  position: relative;
  font-size: 12px;
  grid-column: 2 / 2;
  grid-row: 1 / 2;
  height: 100%;
}
.history-payments {
  padding: 15px 0;
  grid-column: 2/2;
  grid-row: 3/5;
  position: relative;
}
.table {
  color: white;
}

.table-hover tbody tr:hover {
  color: white;
  background-color: #434377;
}

.table-responsive {
  height: calc(100% - 60px);
}

thead.head-table {
  background-color: #f2f2f60d;
}
tr.thead-item > th {
  border-bottom: grey 1px solid;
  border-top: grey 1px solid;
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
}

.top-table {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: 0 25px;
}
.per-page {
  position: relative;
  float: right;
  width: 20%;
  color: #8585AA;
}
#show-page {
  color: white;
  border: none;
  width: 45%;
  margin-left: 10px;
}

.table th, .table td {
  border-bottom: 1px solid #515171;
}

.period {
  border: none;
  box-shadow: none;
}

img.avatar {
  width: 20px;
  height: 20px;
}

.history-activity {
  grid-row: 2/3;
  grid-column: 2/2;
  position: relative;
}

.activity-block {
  position: relative;
  height: calc(100% - 20px);
  width: calc(100% - 10px);
  overflow-x: auto;
  padding: 0 25px 0 25px;
  margin-top: 10px;
}

.activity-block > .title-activity {
  height: 50px;
  display: flex;
  align-items: center;
}
.user-history-activity {
    grid-column: 2/2;
    grid-row: 1/3;
}

</style>

<style module>
.canvas_height {
  height: calc(100% - 50px);
}

</style>

<style> 
.info-blocks {
  width: 100%;
  height: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
  display: grid;
  grid-template-rows: 140px 140px;
  grid-row-gap: 25px;
}
</style>