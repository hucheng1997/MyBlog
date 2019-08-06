import {SAVE_ARTICLE,GO_HOME,GO_INDEX} from './mutation-type'

export default {
  [GO_HOME] (state, {router}) {
    router.push('/home')
  },
  [GO_INDEX] (state, {router}) {
    router.push('/')
  },
  [SAVE_ARTICLE](state,{articles}){
    state.articles=articles
  }
}
