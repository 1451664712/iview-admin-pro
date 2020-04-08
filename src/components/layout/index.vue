<!--
@name:
@description: 布局结构
@author: byx
@time: 2020-04-02 15:43:50
-->
<template>
  <section class="page-home">
    <div class="page-layout-sider" :class="{'isActive': collapsible }">
      <div class="page-sider-children">
        <div>
          <h1 class="page-sider-logo">
            <a href="/">
              <img src="../../assets/images/logo.png" alt="" v-if="collapsible" style="margin-left: 16px;">
              <img src="../../assets/images/logo_text.png" alt="" v-else>
            </a>
          </h1>
          <min-sider v-if="collapsible"/>
          <left-nav ref="sideMenu" v-else/>
        </div>
      </div>
    </div>
    <div class="page-layout-inside" :class="{'isWidth': collapsible}">
      <header class="page-layout-header" :class="{'isBox': collapsible}">
        <Icon type="android-menu" @click="collapsible =!collapsible" class="menu"/>
        <Breadcrumb>
          <BreadcrumbItem to="/home">系统首页</BreadcrumbItem>
          <template v-for="item in list">
            <BreadcrumbItem v-if="item.meta.title && item.meta.title !== '系统首页'" :to="item.path">{{item.meta.title}}
            </BreadcrumbItem>
          </template>
        </Breadcrumb>
      </header>
      <section class="page-content">
        <div class="page-tabs" :class="{'isTabs': collapsible}">
          <div class="page-tabs-main">
            <ivu-tabs/>
          </div>
        </div>
        <div class="page-layout-main">
          <router-view/>
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped>
  .isActive {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
    flex: 0 0 80px;
  }

  .isWidth {
    padding-left: 80px;
  }
</style>
<script>
  import leftNav from './leftNav'
  import minSider from './minSeider'
  import ivuTabs from './ivu-tabs'
  import {getNewTagList} from '../../utils/utils'
  import {mapMutations} from 'vuex'

  export default {
    name: "index",
    components: {
      leftNav,
      minSider,
      ivuTabs
    },
    data() {
      return {
        collapsible: false,
        list: [],
        tagBodyLeft: 0,
        rightOffset: 40,
      }
    },

    computed: {
      tagNavList() {
        return this.$store.state.tagNavList
      },
    },

    mounted() {
      this.getBreadcrumb()
      // this.setTagNavList()
      const {name, params, query, meta} = this.$route
      this.addTag({
        route: {name, params, query, meta}
      })
    },
    methods: {
      getBreadcrumb() {
        this.list = this.$route.matched.filter(item => item.meta.title);
      },
      ...mapMutations([
        'addTag',
        'setTagNavList',
      ]),
      handlescroll(e) {
        var type = e.type
        let delta = 0
        if (type === 'DOMMouseScroll' || type === 'mousewheel') {
          delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
        }
        this.handleScroll(delta)
      },
      handleScroll(offset) {
        const outerWidth = this.$refs.scrollOuter.offsetWidth
        const bodyWidth = this.$refs.scrollBody.offsetWidth
        if (offset > 0) {
          this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
        } else {
          if (outerWidth < bodyWidth) {
            if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
              this.tagBodyLeft = this.tagBodyLeft
            } else {
              this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
            }
          } else {
            this.tagBodyLeft = 0
          }
        }
      },
    },
    watch: {
      '$route'(newRoute) {
        console.log(newRoute);
        let index = {}
        index.meta = newRoute.meta
        index.name = newRoute.name
        localStorage.setItem('routeData', JSON.stringify(index))
        this.getBreadcrumb()
        const {name, query, params, meta} = newRoute
        this.addTag({
          route: {name, query, params, meta},
          type: 'push'
        })
        this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
        if (!this.collapsible) {
          this.$refs.sideMenu.updateOpenName(newRoute.name)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/layout";
  // seider 宽度
  .isActive {
    width: 80px !important;
    min-width: 80px !important;
  }

  // 右侧padding
  .isWidth {
    padding-left: 80px !important;
  }

  .menu {
    display: inline-block;
    padding: 0 12px;
    width: auto;
    height: 64px;
    line-height: 64px;
    text-align: center;
    cursor: pointer;
    font-size: 25px;
    transition: all .2s ease-in-out;

    &:hover {
      background: #f8f8f9;
    }
  }

  .isBox, .isTabs {
    width: calc(100% - 80px);
  }
</style>
