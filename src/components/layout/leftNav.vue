<!--
@name:
@description: 左侧菜单
@author: byx
@time: 2020-04-02 15:44:07
-->
<template>
  <Menu
          ref="menu"
          theme="dark"
          accordion
          :active-name="$route.name"
          :open-names="openedNames"
          @on-select="change">
    <template v-for="item in menus">
      <Submenu
              :name="item.name"
              v-if="item.children && item.children.length > 0">
        <template slot="title">
          <Icon :custom="'iconfont ' +  item.icon" size="12"/>
          {{item.title}}
        </template>
        <MenuItem
                v-for="(item2, index) in item.children"
                :key="index"
                :name="item2.key">
          {{item2.title}}
        </MenuItem>
      </Submenu>
      <MenuItem :name="item.key" v-else class="no_children">
        <Icon :custom="'iconfont ' +  item.icon" size="12"/>
        {{item.title}}
      </MenuItem>
    </template>
  </Menu>
</template>

<script>
  import {mapState} from 'vuex'
  import {menuList} from "../../utils/menuConfig";
  import {getUnion} from '../../utils/utils'

  export default {
    name: "leftNav",
    props: ["list"],
    data() {
      return {
        menus: menuList,
        openedNames: []
      }
    },
    watch: {
      openNames(newNames) {
        this.openedNames = newNames
      },
      openedNames() {
        this.$nextTick(() => {
          this.$refs.menu.updateOpened()
        })
      }
    },
    mounted() {
      this.openedNames = this.getOpenedNamesByActiveName(name)
      console.log(this.openedNames);
    },
    methods: {
      change(route) {
        console.log(route);
        let {name} = {}
        if (typeof route === 'string') name = route
        this.$router.push({name})
      },
      getOpenedNamesByActiveName(name) {
        return this.$route.matched.map(item => item.name).filter(item => item !== name)
      },
      updateOpenName(name) {
        console.log(name)
        if (name === 'home') this.openedNames = []
        else this.openedNames = this.getOpenedNamesByActiveName(name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/left_nav";
</style>
