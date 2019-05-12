<script >
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    datasets: {
      type: Object
    },
    options: {
      type: Object
    }
  },
  mounted () {
    this.renderChart(this.datasets, this.options)
  },
  watch: {
    datasets: {
      handler: function (newData, oldData) {
        this.renderChart(newData, this.options)
      },
      deep: true
    }
  }
}
</script>
