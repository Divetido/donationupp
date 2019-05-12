
<template>
  <div class="table-block text" :class="color_schema.item">
    <div class="top-table">
      <div class="top-title text">
        {{ title }}
      </div>
      <div class="per-page" :class="color_schema.text">
        <div >Показать:</div>
        <select-block
        id="show-page"
        :options="pageOptions"
        :value="perPage"
        :class="color_schema.title_text"
        />
      </div>
    </div>
    <div class="table-header" :class="color_schema.text">
      <div class="user">
        Пользователь
      </div>
      <div class="date" @click="sortedItems('date', 'desc')">
        Дата
      </div>
      <div class="amount" @click="sortedItems('amount', 'desc')">
        Сумма
      </div>
      <div class="message">
        Сообщение
      </div>
    </div>
    <div class="table-body">
      <div class="body-item" v-for="item in items" :key="item.id">
        <div class="user">
          <img :src="item.user.avatar" class="avatar">
          <div class="username">
            {{ item.user.user_name }}
          </div>
        </div>
        <div :class="['date', color_schema.text]">
          {{ item.date }}
        </div>
        <div class="amount">
          {{ item.amount }} EUR
        </div>
        <div v-tooltip.click.top.end="{ content: item.message, class: 'tooltip-custom' }":class="['message', color_schema.text]">
          {{ item.message | truncate(15, '...') }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SelectBlock from '@/components/SelectBlock.vue'

export default {
  name: 'table-block',
  components: {
    SelectBlock
  },
  data () {
    return {
      sortKey: 'date',
      sortSettings: [
        { 'date': true },
        { 'amount': true }
      ],
      desc: true,
      perPage: '5',
      pageOptions: [
        { value: '5' },
        { value: '10' }
      ],
      items: null
    }
  },
  props: {
    title: {
      type: String
    }
  },
  computed: {
    ...mapGetters(['color_schema', 'user', 'state_checkbox']),
    text_color () {
      return this.state_checkbox ? 'dark-blue' : 'grey'
    },
    itemsLimit () {
      this.$http.get('activity/').then((res) => {
        this.items = res.body
      })
      return items.splice(0, this.perPage)
    },
    orderItems () {
      return this.items = _.orderBy(this.items, 'date')
    }
  },
  created () {
    this.$http.get('activity/').then((res) => {
      this.items = res.body
    })
  },
  methods: {
    sortedItems (field) {
      this.sortKey = field
      this.sortSettings[field] = !this.sortSettings[field]
      this.desc = this.sortSettings[field]
      return _.orderBy(this.items, this.sortKey, this.desc ? 'desc' : 'asc')
    }
  },
  filters: {
    truncate: function (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    }
  }
}
</script>
<style scoped>
.custom-select {
  background-color: transparent;
  border: none;
  background: url("../assets/play-button.svg") no-repeat right 0.75rem center/8px 10px;
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

.top-table {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: 0 25px;
}
.per-page {
  position: relative;
  /*float: right;*/
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

img.avatar {
  width: 20px;
  height: 20px;
}
.custom-table {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr;
}
.table-header {
  display: grid;
  grid-template-columns: repeat(3, 1fr) 2fr;
  justify-items: center;
  align-items: center;
  height: 45px;
  background-color: rgba(242, 242, 246, .05);
  border-bottom: 1px solid #515171;
  border-top: 1px solid #515171;
  font-size: 12px;
}

.table-block {
  display: grid;
  grid-template-rows: 1fr 45px 4fr;
  grid-row-gap: 2px;
  position: relative;
}

.user {
  display: flex;
  justify-self: flex-start;
}
.table-header > .user {
  padding-left: 25px;
}
.table-body {
  overflow-x: auto;
}
.table-body {
  margin-left: calc( 10px );
  width: calc(100% - 20px);
  padding: 0 15px;
}
.body-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr) 2fr;
  grid-auto-rows: 3rem;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid #515171;
  font-size: 12px;
}

.table-header > .message {
  justify-self: flex-start;
}
.body-item > .message {
  margin-left: 25px;
  align-items: center;
  /* justify-self: flex-start; */
  /* grid-auto-rows: 1fr; */
  /* grid-auto-columns: 1fr; */
  grid-column: 1fr;
  width: 100%;
  height: 100%;
  /* align-self: center; */
  /* justify-self: auto; */
  /* vertical-align: middle; */
  display: flex;
  /* align-self: center; */
}

</style>
