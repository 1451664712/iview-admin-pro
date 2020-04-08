<!--
@name:
@description: tab标签
@author: byx
@time: 2020-04-02 15:43:32
-->
<template>
  <!--<Tabs :value="$route.name" type="card" @on-tab-remove="handleTabRemove" @on-click="handleTabClick">-->
  <!--<template v-for="(item, index) in tagNavList">-->
  <!--<TabPane :label="item.name" :name="item.name" :closable="index !==0"></TabPane>-->
  <!--</template>-->
  <!--ref="scrollOuter"-->
  <!--ref="scrollBody"-->
  <!--</Tabs>-->
  <div class="ivu-tabs-box">
    <Icon type="ios-arrow-back left_btn" @click="handleScroll(240)"/>
    <div class="ivu-tabs" ref="scrollOuter" @DOMMouseScroll="handlescroll"
         @mousewheel="handlescroll">
      <div class="ivu-tabs_scoll" ref="scrollBody" :style="{left: tagBodyLeft + 'px'}" v-resize="resize">
        <Tag
                ref="tagsPageOpened"
                v-for="(item, index) in tagNavList"
                :key="index"
                type="dot"
                :closable="index !==0"
                :color="$route.name === item.name?'primary': 'default'"
                @on-close="handleClose(item)"
                @click.native="handleTabClick(item)"
        >
          {{item.meta.title}}
        </Tag>
      </div>
    </div>
    <Icon type="ios-arrow-forward right_btn" @click="handleScroll(-240)"/>
    <div class="btn">
      <Dropdown>
        <Icon type="ios-arrow-down"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem>
            <Icon type="close"></Icon>
            关闭其他
          </DropdownItem>
          <DropdownItem>
            <Icon type="close-circled"></Icon>
            关闭全部
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "ivu-tabs",
    data() {
      return {
        list: [],
        tagBodyLeft: 0,
        outerPadding: 4,
      }
    },

    mounted() {
        window.addEventListener('resize', () => {
          const outerWidth = this.$refs.scrollOuter.offsetWidth
          const bodyWidth = this.$refs.scrollBody.offsetWidth
          console.log(outerWidth, bodyWidth);
        })
    },
    methods: {
      ...mapMutations(["closeTag"]),
      handleClose(route) {
        this.closeTag(route)
      },
      handleTabClick(item) {
        const {name} = item
        this.$router.push({name})
      },
      handlescroll(e) {
        let type = e.type
        console.log(type);
        let delta = 0
        if (type === 'DOMMouseScroll' || type === 'mousewheel') {
          delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
        }
        this.handleScroll(delta)
      },
      handleScroll(offset) {
        // 轨道
        const outerWidth = this.$refs.scrollOuter.offsetWidth
        // 火车
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
      resize() {
        let index = this.$refs.tagsPageOpened.length - 1
        this.moveToView(this.$refs.tagsPageOpened[index].$el)
        // 轨道
        const outerWidth = this.$refs.scrollOuter.offsetWidth
        // 火车
        const bodyWidth = this.$refs.scrollBody.offsetWidth
        console.log(bodyWidth > outerWidth);
        this.show = bodyWidth > outerWidth
      },
      moveToView(tag) {
        const outerWidth = this.$refs.scrollOuter.offsetWidth
        const bodyWidth = this.$refs.scrollBody.offsetWidth
        console.log(outerWidth, bodyWidth);
        if (bodyWidth < outerWidth) {
          this.tagBodyLeft = 0
        } else if (tag.offsetLeft < -this.tagBodyLeft) {
          // 标签在可视区域左侧
          this.tagBodyLeft = -tag.offsetLeft + this.outerPadding
        } else if (tag.offsetLeft > -this.tagBodyLeft && tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth) {
          // 标签在可视区域
          this.tagBodyLeft = Math.min(0, outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding)
        } else {
          // 标签在可视区域右侧
          this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - this.outerPadding - tag.offsetWidth))
        }
      }
    },
    computed: {
      ...mapState(["tabs"]),
      tagNavList() {
        return this.$store.state.tagNavList
      },
    },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/ivu-tabs.scss";

  .scroll {
    margin-left: 36px;
    margin-right: 80px;
  }
</style>
