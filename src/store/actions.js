import {RECEIVE_USER_INFO, RECEIVE_KEY, BREADCRUMB} from './mutation-types'

export default {
  // 更新用户信息
  setTabs({commit}, tabs) {
    console.log(tabs)
    commit(RECEIVE_USER_INFO, tabs)
  },
  setBreadcrumb({commit}, arr) {
    commit(BREADCRUMB, arr)
  },
}
