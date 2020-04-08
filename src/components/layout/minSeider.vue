<!--
@name:
@description: 左侧菜单缩小
@author: byx
@time: 2020-04-02 15:44:20
-->
<template>
  <div class="min_sider_box">
    <ul class="min-seider">
      <template v-for="item in menus">
        <Dropdown
                @on-click="change"
                trigger="click"
                v-if="item.children && item.children.length>0"
                :class="$route.path.indexOf(item.key) !== -1?'selected':''">
          <li>
            <Icon :custom="'iconfont ' +  item.icon" size="14"></Icon>
          </li>
          <DropdownMenu slot="list">
            <template v-for="v in item.children">
              <DropdownItem :name="v.key" :class="$route.path.indexOf(v.key) !== -1 ?'isactive':''">{{v.title}}
              </DropdownItem>
            </template>
          </DropdownMenu>
        </Dropdown>

        <Tooltip :content="item.title" placement="right" v-else style="width: 100%;">
          <li
                  class="item"
                  :class="$route.path.indexOf(item.key) !== -1?'selected':''"
                  @click="handleChange(item.key, item.title)"
          >
            <Icon :custom="'iconfont ' +  item.icon" size="14"></Icon>
          </li>
        </Tooltip>
      </template>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {menuList} from "../../utils/menuConfig";

  export default {
    name: "minSider",
    data() {
      return {
        menus: menuList,
        arr: [],
      }
    },
    computed: {
      ...mapState(['tabs'])
    },
    mounted() {
      console.log(this.$route);
    },
    methods: {
      change(name) {
        console.log(this.$route, name);
        this.$router.push({name})
      },
      newPush(arr, key, title) {
        let result = this.arr.some((item) => {
          return item.key === key
        })
        if (!result) {
          arr.push({
            key: key,
            title: title
          })
        }
      },

      handleChange(name) {
        this.$router.push({name})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/min_sider";

  .min_sider_box {
    /*height: calc(100vh - 63px);*/
    /*overflow-y: auto;*/

    &::-webkit-scrollbar {
      /*display: none*/
    }
  }

  .isactive {
    background-color: #2d8cf0 !important;
    color: #fff !important;
  }

  .selected {
    background-color: #101117 !important;
  }

  .ivu-dropdown-active {
    background-color: #2d8cf0 !important;
  }
</style>
