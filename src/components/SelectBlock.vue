<template>
  <div class="select-block">
    <b-dropdown toggle-class="drop-select-block" :id="id" v-model="value" :text="value" dropbottom class="btn my-btn">
      <b-dropdown-item v-for="option in options"
      :value="option.value"
      :key="option.value"
      :class="{ active: value == option.value }"
      @click="value = option.value"
      >
      {{ option.value }}
    </b-dropdown-item>
  </b-dropdown>
</div>
</template>
<script>
export default {
  name: 'select-block',
  props: ['id', 'value', 'options']
}
</script>
<style>
.dropdown-toggle {
  background: transparent !important;
  border: 2px solid #595986 !important;
}
.dropdown-toggle::after {
  margin-left: 2em !important;
}
.btn.btn-secondary.dropdown-toggle:hover, .show > .btn-secondary.dropdown-toggle {
  background-color: #4B4B7D !important;
  /*border-color: white;*/
}

.dropdown-menu {
  border-radius: 5px !important;
  background: rgb(214, 214, 234) !important;
  color: #282855 !important;
}
.dropdown-item {
  color: #282855ad !important;
}
.dropdown-item:hover, .dropdown-item.active, .dropdown-item:active {
  color: #282855 !important;
  text-decoration: none !important;
  background-color: transparent !important;
}

.drop-select-block:not(:disabled):not(.disabled):active,
.drop-select-block:not(:disabled):not(.disabled).active,
.show > .drop-select-block.dropdown-toggle,
.drop-select-block.dropdown-toggle:hover {
  color: white!important;
  text-decoration: none !important;
  background-color: #4B4B7D !important;
  border-color: #595986 !important;
}

.select-block {
    margin: -0.375rem -0.75rem;
}
/*.btn {
  font-size: 12px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
}*/
.drop-select-block {
  height: 45px;
  /*width: 300px;*/
}
</style>
