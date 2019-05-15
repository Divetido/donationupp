<template>
  <div class="subscribers-list">
    <div class="list-header" :class="color_schema.item">
      <div class="title-header">
        Подписчики
      </div>
      <div class="list-actions">
        <div class="sort-action">
          <div class="text" :class="color_schema.text">
            Сортировать:
          </div>
          <div class="select-block">
            <b-dropdown :toggle-class="['drop-select-block', color_schema.title_text]" id="period" v-model="sortKey.value" :text="sortKey.text" dropbottom class="btn my-btn sort-select">
              <b-dropdown-item v-for="option in sortOptions"
              :value="option.value"
              :key="option.value"
              :class="[{ active: sortKey.value == option.value }, color_schema.title_text]"
              @click="sortKey.value = option.value; sortKey.text = option.text; sortable(option.value)"
              >
              {{ option.text }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
  <div class="list-body" id="list-body-subscriptions">
    <list-item
    :avatar_url="subscribe.user.avatar"
    :nickname="subscribe.user.nickname"
    :date="subscribe.date"
    :donate="subscribe.donate"
    :state="subscribe.state"
    v-for="subscribe in sortable(sortKey.value)"
    />
  </div>
</div>
</template>
<script>
  import ListItem from '@/components/ListItem.vue'
  import { mapGetters, mapState, mapActions } from 'vuex'

  export default {
    name: 'subscribers-list',
    components: {
      ListItem
    },
    data() {
      return {
        busy: false,
        sortKey: { value: 'id', text: 'По порядку' },
        sortOptions: [
        { value: 'id', text: 'По порядку' },
        { value: 'donate', text: 'Тап донат' },
        { value: 'date', text: 'Топ подписка' }
        ]
      }
    },
    mounted() {
      const listElm = document.querySelector('#list-body-subscriptions');
      listElm.addEventListener('scroll', e => {
        if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          this.loadMore();
        }
      });
      this.$store.dispatch('fetchSubscribers')
    },
    methods: {
      sortable (value) {
        if (value == 'donate') {
          return _.orderBy(this.subscribers, value).reverse()
        }
        return _.orderBy(this.subscribers, value)
      },
      loadMore() {
        this.busy = true;
        setTimeout(() => {
         this.$store.dispatch('updateSubscribers');
         this.busy = false;
       }, 200);
      }
    },
    computed: {
      ...mapGetters(['color_schema', 'user', 'state_checkbox']),
      ...mapState(['subscribers'])
    }
  }
</script>
<style scoped>
.subscribers-list {
  display: grid;
  grid-template-rows: 65px 1fr;
  grid-template-columns: 1fr;
  grid-row: 1/3;
  grid-row-gap: 3px;
}
.list-body {
  display: grid;
  grid-row-gap: 3px;
  font-size: 11px;
  overflow: auto;
  grid-row: 2/2;
}
.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-row: 1/2;
  padding: 25px;
  font-size: 12px;
  border-radius: 5px;
}

.list-header.dark-item{
  background-color: #434377;
}

.sort-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.custom-select {
  background-color: transparent;
  border: none;
  background: url("../assets/play-button.svg") no-repeat right 0.75rem center/8px 10px;
}
.list-actions {
  width: 40%;
}
</style>
