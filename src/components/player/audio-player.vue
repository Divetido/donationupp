<script>
  import VueHowler from 'vue-howler'
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'audio-player',
    mixins: [VueHowler],
    computed: {
      ...mapGetters(['color_schema']),
      ...mapState(['playlist', 'sounds'])
    },
    playlistIndex: 0,
    methods: {
      next() {
        this.play([this.sources[1]])
      },
      prev() {
        
      }
    }
  }
</script>

<template>
  <div class="custom-player" :class="color_schema.item">
   <div class="player-actions">
    <button @click="togglePlayback" class="default-button player-button">
      <div class="arrow-right"></div>
    </button>
    <div class="back-step">
      <div @click="prev()" class="arrow-left">
      </div>
    </div>
    <div @click="next()" class="next-step">
      <div class="arrow-right">
      </div>
    </div>
  </div>
  <div class="player-details text">
    <div class="track-info">
      <div class="title">{{ playing }}</div>
      <div class="track-time" :class="color_schema.text">{{ duration | minutes }}</div>
    </div>

    <b-progress :value="progress" :max="1" class="progress-player"></b-progress>
  </div>
</div>
</div>
</template>
