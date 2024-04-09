import {
  getCategoryItem,
  setCategoryItem,
  getIsGet,
  getMenuAndPermissions,
  setIsGet,
  setMenuAndPermissions,
  setTemporaryNav,
  getTemporaryNav,
  clearTemporaryNav
} from '@pangu/reorganize/utils/storage'
import { menuProcessing } from '@pangu/reorganize/utils/index'
import { defineStore } from 'pinia'

// 初始化菜单数据
const initVal = getMenuAndPermissions()

function init(type = 1) {
  if (type === 1) {
    return initVal.menus
  } else if (type === 2) {
    return initVal.permissions
  } else if (type === 3) {
    return initVal.categories
  } else if (type === 4) {
    return initVal.categoryConfig
  }
  setIsGet(false)
  return null
}

function getCategoryId() {
  const item = getCategoryItem()
  return item?.id || ''
}

export const useMenuStore = defineStore('menu', {
  // 默认取sessionstroe的数据
  state: () => ({
    active: '', // 当前选中
    isCollapse: false, // 是否折叠
    isGet: getIsGet(),
    menus: init(1),
    permissions: init(2),
    categories: init(3),
    categoryConfig: init(4),
    isHoverMenu: false, // 是否hover
    needUpdateMenu: true, // 是否需要更新菜单
    fromOtherPage: false, // 是否来自其他页面
    webrefresh: true, // 刷新
    temporaryNav: (getTemporaryNav() && JSON.parse(getTemporaryNav())) || {}, // 临时导航
    categoryId: getCategoryId(),
    categoryItem: getCategoryItem()
  }),
  getters: {
    isGet: state => {
      return state.isGet
    },
    menus: state => {
      return state.menus
    },
    permissions: state => {
      return state.permissions
    },
    categories: state => {
      return state.categories
    },
    processedMenu: state => {
      return menuProcessing(state.menus)
    },
    fromOtherPage: state => {
      return state.fromOtherPage
    },
    webrefresh: state => {
      return state.webrefresh
    },
    _temporaryNav: state => {
      return state.temporaryNav
    }
  },
  actions: {
    setWebRefresh(data) {
      this.webrefresh = data
    },
    clear() {
      this.isCollapse = false
      this.isGet = false
      this.menus = []
      this.permissions = []
      this.fromOtherPage = false
      this.needUpdateMenu = false
      this.temporaryNav = {}
      this.categoryId = ''
      this.categoryItem = {}
    },
    setIsGet(val = true) {
      setIsGet(val)
      this.isGet = val
    },
    setMenuAndPermission(data) {
      // 存入sessionstroe
      setMenuAndPermissions(data)
      // 修改属性
      this.menus = data.menus
      this.permissions = data.permissions
      this.categories = data.categories
      this.categoryConfig = data.categoryConfig
      this.setIsGet(true)
    },
    setActive(active) {
      this.active = active
    },
    setIsCollapse(isCollapse = false) {
      this.isCollapse = isCollapse
    },
    setisHoverMenu(isHoverMenu = false) {
      this.isHoverMenu = isHoverMenu
    },
    setFromOtherPage(data) {
      this.fromOtherPage = data
    },
    setNeedUpdateMenu(data) {
      this.needUpdateMenu = data
    },
    setTemporaryNav(data) {
      this.temporaryNav = data
      setTemporaryNav(JSON.stringify(data))
    },
    setCategoryItem(item) {
      if (item) {
        this.categoryItem = item
        this.categoryId = item.id
      }
      setCategoryItem(item)
    },
    clearTemporaryNav() {
      this.temporaryNav = {}
      clearTemporaryNav()
    }
  }
})
