<template>
  <b-modal id="preview-modal" ref="preview_modal" hide-header hide-footer content-class="preview-modal-content" :body-class="['preview-modal-body', color_schema.item]" centered>
    <div class="custom-position-block" >
      <drr
      key="img"
      :x="200"
      :y="50"
      :w="100"
      :h="100"
      :angle="0"
      :hasActiveContent="true"
      :outerBound="{ w: 1000, h: 645 }"
      @update="update('el-img', $event);"
      >
      <img src="../../assets/dog.png" alt="Dog" :style="{ width: '100%', height: '100%' }">
    </drr>
    <drr
    v-for="element in elements"
    :key="element.id"
    :x="element.x"
    :y="element.y"
    :w="element.width"
    :h="element.height"
    :angle="element.angle"
    :hasActiveContent="true"
    :outerBound="{ w: 1000, h: 645 }"
    @update="update(element.id, $event);"
    >
    <div class="element" :style="getElementStyles(element)">
      {{ element.text }}
    </div>
  </drr>
</div>
<div class="preview-modal-footer text" :class="color_schema.item">
  <div class="preview-action-button text">
    <b-button class="preview-close" variant="outline-light" @click="hideModal">ОТМЕНА</b-button>
    <button class="default-button preview-save">СОХРАНИТЬ</button>
  </div>

</div>
</b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'preview-modal',
  data () {
    return {
      elements: [
        {
          id: 'el-1',
          x: 200,
          y: 200,
          scaleX: 1,
          scaleY: 1,
          width: 400,
          height: 100,
          angle: 0,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod incididunt tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute reprehenderit dolor in irure in voluptate velit cillum dolore pariatur.',
          classPrefix: 'tr',
          styles: {
            background: 'transparent',
            fontSize: '10px',
            width: '100%',
            height: '100%'
          }
        },
        {
          id: 'el-2',
          x: 200,
          y: 120,
          scaleX: 1,
          scaleY: 1,
          width: 400,
          height: 20,
          angle: 0,
          text: '{{user}} перевел вам {{amount}}',
          classPrefix: 'tr',
          styles: {
            background: 'transparent',
            fontSize: '14px',
            width: '100%',
            height: '100%'
          }
        }
      ],
      offsetX: 0,
      offsetY: 0
    }
  },
  methods: {
    hideModal () {
      this.$refs.preview_modal.hide()
    },
    update (id, payload) {
      this.elements = this.elements.map(item => {
        if (item.id === id) {
          return {
            ...item,
            ...payload
          }
        }
        return item
      })
    },
    getElementStyles (element) {
      const styles = element.styles ? element.styles : {}
      return {
        width: `${element.width}px`,
        height: `${element.height}px`,
        ...styles
      }
    }
  },
  computed: {
    ...mapGetters(['color_schema', 'user'])
  }
}
</script>

<style>
.preview-modal-content {
  width: 1000px !important;
  height: 645px !important;
  background-color: #2B2B59 !important;
  border-radius: 15px !important;
  text-align: center !important;
}

.custom-position-block {
  width: 100%;
  height: 550px;
  background: #2B2B59;
  position: absolute;
  top: 0;
  left: 0;
}

.preview-modal-footer {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 30px;
}

button.preview-close {
  border-radius: 33px;
  width: 130px;
  height: 45px;
  margin-right: 20px;
}

button.preview-save {
  height: 45px;
}

@media (min-width: 576px){
  #preview-modal > .modal-dialog {
    max-width: 1000px !important;
  }
}

</style>

<style scoped>

</style>
