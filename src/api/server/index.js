// import axios from 'axios'
import Vue from 'vue'

export default {
  fetchSibscribers () {
    return Vue.http
      .get('subscribers/')
      .then(response => response.body)
  }
}
