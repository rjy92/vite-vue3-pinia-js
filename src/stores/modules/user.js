import { defineStore } from 'pinia'
// import { clearJson } from '@pangu/reorganize/utils/index'
import { coreContext } from '@pangu/core'
import {
  getToken,
  setToken,
  getHasNav,
  setHasNav,
  getShowCategory,
  // setShowCategory,
  getShowCategoryTitle,
  // setShowCategoryTitle,
  getCustomHeader,
  // setCustomHeader,
  getUserSettingEnable,
  setUserSettingEnable,
  getSSOServerPage,
  // setSSOServerPage,
  getEnv,
  // setEnv,
  setUserId,
  getUserId,
  setUserName,
  getUserName,
  getTicket,
  // setTicket,
  getTenantId,
  setTenantId
} from '@pangu/reorganize/utils/storage'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      apiSecret: '',
      created: '',
      description: '',
      email: '',
      exts: '',
      lastLoginTime: '',
      lockedAt: '',
      mobile: '',
      modified: '',
      name: '',
      password: '',
      phone: '',
      realname: '',
      status: '',
      type: '',
      userId: getUserId(),
      userName: getUserName(),
      uuid: '',
      resourcePoolId: coreContext.application.universal.storage.getItem('resourcePoolId'),
      resourcePool:
        typeof coreContext.application.universal.storage.getItem('resourcePool') === 'string'
          ? JSON.parse(coreContext.application.universal.storage.getItem('resourcePool'))
          : coreContext.application.universal.storage.getItem('resourcePool'),
      resourcePoolIp: coreContext.application.universal.storage.getItem('resourcePoolIp')
    },
    token: {
      token: getToken()
    },
    hasNav: getHasNav(),
    userSettingEnable: getUserSettingEnable(),
    ssoServerPage: getSSOServerPage(),
    ticket: getTicket(),
    env: getEnv(),
    showCategory: getShowCategory(),
    showCategoryTitle: getShowCategoryTitle(),
    customHeader: getCustomHeader(),
    signature: '',
    tenantId: getTenantId(), // 租户ID
    resourcePoolId: coreContext.application.universal.storage.getItem('resourcePoolId'),
    resourcePool:
      typeof coreContext.application.universal.storage.getItem('resourcePool') === 'string'
        ? JSON.parse(coreContext.application.universal.storage.getItem('resourcePool'))
        : coreContext.application.universal.storage.getItem('resourcePool'),
    resourcePoolIp: coreContext.application.universal.storage.getItem('resourcePoolIp')
  }),
  getters: {
    user: state => {
      return state.user
    },
    tokenVal: state => {
      return state.token.token
    },
    ticket: state => {
      return state.ticket
    },
    tenantId: state => {
      return state.tenantId
    }
  },
  actions: {
    setSign(data) {
      this.signature = data
    },
    setName(name) {
      this.name = name
    },
    setUser(user) {
      setUserId(user.userId)
      setUserName(user.realname)
      this.user = user
    },
    setToken(token) {
      const tokenVal = typeof token === 'object' ? token.token : token
      const hasNav = typeof token === 'object' ? token['nav.customize.enable'] : true
      const userSettingEnable = typeof token === 'object' ? token['userSettingEnable'] : true
      const tenantId = typeof token === 'object' ? token.tenantId || this.tenantId : this.tenantId
      setToken(tokenVal)
      setHasNav(hasNav)
      setUserSettingEnable(userSettingEnable)
      setTenantId(tenantId)
      this.tenantId = tenantId
      this.token = {
        token: token
      }
      this.hasNav = hasNav
      this.userSettingEnable = userSettingEnable
    }
    // setCategory(showCategory) {
    //   setShowCategory(showCategory)
    //   commit('SET_SHOWCATEGORY', showCategory)
    // },
    // setCategoryTitle(showCategoryTitle) {
    //   setShowCategoryTitle(showCategoryTitle)
    //   commit('SET_SHOWCATEGORYTITLE', showCategoryTitle)
    // },
    // setCustomHeader(customHeader) {
    //   setCustomHeader(customHeader)
    //   commit('SET_CUSTOMHEADER', customHeader)
    // },
    // ssoServerPage(page) {
    //   setSSOServerPage(page)
    //   commit('SET_SSO_SERVER_PAGE', page)
    // },
    // settingEnable(data) {
    //   setUserSettingEnable(data)
    //   commit('SET_SETTINGENABLE', data)
    // },
    // setTicket(ticket) {
    //   setTicket(ticket)
    //   commit('SET_TICKET', ticket)
    // },
    // setEnv(env) {
    //   setEnv(env)
    //   commit('SET_ENV', env)
    // },
    // // 租户ID 保存到 local storage 中去掉之前保存在页面
    // setTenantId(tenantId) {
    //   setTenantId(tenantId)
    //   commit('SET_TENANT_ID', tenantId)
    // },
    // setResourcePool(resourcePool) {
    //   console.log(resourcePool, JSON.stringify(resourcePool))
    //   coreContext.application.universal.storage.setItem('resourcePool', JSON.stringify(resourcePool))
    //   commit('SET_RESOURCEPOOL', resourcePool)
    // },
    // setResourcePoolId(resourcePoolId) {
    //   coreContext.application.universal.storage.setItem('resourcePoolId', resourcePoolId)
    //   localStorage.setItem('resourcePoolId', resourcePoolId)
    //   commit('SET_RESOURCEPOOLID', resourcePoolId)
    // },
    // setResourcePoolIp(resourcePoolIp) {
    //   coreContext.application.universal.storage.setItem('resourcePoolIp', resourcePoolIp)
    //   localStorage.setItem('resourcePoolIp', resourcePoolIp)
    //   commit('SET_RESOURCEPOOLIP', resourcePoolIp)
    // },
    // clear(flag = false) {
    //   if (flag) {
    //     commit('CLEAR_TOKEN')
    //   }
    //   commit('CLEAR_USER')
    // }
  }
})
