/*
直接更新state的多个方法的对象
 */
import {getRouteTitleHandled, routeHasExist, closePage, routeEqual} from '../../src/utils/utils'

export default {
  /***
   *
   * @param state
   * @param route
   * @param type
   */
  addTag(state, {route, type = 'unshift'}) {
    let router = getRouteTitleHandled(route)
    if (!routeHasExist(state.tagNavList, router)) {
      if (type === 'push') {
        state.tagNavList.push(router)
      } else {
        if (router.name === 'home') state.tagNavList.unshift(router)
        else state.tagNavList.splice(1, 0, router)
      }
    }
  },

  /***
   *
   * @param state
   * @param list
   */
  setTagNavList(state, list) {
    let tagList = []
    if (list) {
      tagList = [...list]
    } else {
      tagList = []
    }
    // if (tagList[0] && tagList[0].name !== 'home') {
    //   tagList.shift()
    // }
    let homeTagIndex = tagList.findIndex(item => item.name === 'home')
    if (homeTagIndex > 0) {
      let homeTag = tagList.splice(homeTagIndex, 1)[0]
      tagList.unshift(homeTag)
    }
    state.tagNavList = tagList
  },

  /***
   *
   * @param state
   * @param route
   */
  closeTag(state, route) {
    let tag = state.tagNavList.filter(item => routeEqual(item, route))
    route = tag[0] ? tag[0] : null
    if (!route) return
    closePage(state, route)
  },

  setUserRegistry(state, user_info) {
    state.user_details = user_info
  }

}
