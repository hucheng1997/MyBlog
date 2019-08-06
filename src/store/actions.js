import {SAVE_ARTICLE, GO_HOME, GO_INDEX} from './mutation-type'

import axios from 'axios'

export default {
  goHome ({commit}, router) {
    commit(GO_HOME, {router})
  },
  goIndex ({commit}, router) {
    commit(GO_INDEX, {router})
  },
  reqArticles ({commit}) {
    axios.get('http://47.106.166.70:8100/get/all/articles').then(response => {
      const articles = response.data
      commit(SAVE_ARTICLE, {articles})
      console.log("success")
    }).catch(error => {
      console.log(error.message)
    })
  }
}
