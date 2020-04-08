<template>
  <div id="ivu_home">
    <ul id="list">
      <template v-for="(item, index) in navList">
        <li :key="item.code" :style="{backgroundColor: item.color}" @click="z_index = index">{{item.name}}</li>
      </template>
    </ul>
    <ul id="drag-ul">
      <template v-for="item in navList[z_index].children">
        <li
                :key="item.code"
                :data-item="JSON.stringify(item)"
                :style="{color: item.color, border: `1px solid ${item.color}`}"
        >
          {{item.name}}
          <span v-if="item.count >0">{{item.count}}</span>
        </li>
      </template>
    </ul>
    <div id="drag-box">
      <div v-for="list in data.nodeList" :id="list.id"
           :class="'node status'+list.status+ ' '+[list.disabledDrag == 0 ? 'disabledDrag' : '']"
           :style="'left:'+list.left+'px;top:'+list.top+'px;border:1px solid '+ list.color" :key="list.id">
      <span v-if="list.disabledDrag == 0" class="node-txt"
            :style="'color:#fff;opacity:0.85;background:'+ list.color">{{list.name}}</span>
        <span v-if="list.disabledDrag == 1" class="node-txt"
              :style="'background:fff;color:'+ list.color">{{list.name}}</span>
        <div class="node-edit" :style="'background-color:'+ list.color"></div>
        <span class="node-close" @click="delNode(list.id)"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'jquery-ui/ui/widgets/draggable'
  import 'jquery-ui/ui/widgets/droppable'
  import 'jquery-ui/ui/widgets/resizable'
  import {getApplication, getTaskRe} from '@/api/index'

  export default {
    name: "index",
    data() {
      return {
        jsPlumb: null,
        navList: [
          {
            code: 1,
            name: '选取',
            color: '#4F8DFF',
            children: [
              {
                code: 1,
                applicationCode: '',
                color: '#4F8DFF',
                count: 1,
                name: '空值预处理',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 2,
                applicationCode: '',
                color: '#4F8DFF',
                count: 1,
                name: '数据去重',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 3,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '格式清洗',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 4,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '逻辑错误清洗',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 5,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '空值预处理',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 6,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '数据去重',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 7,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '格式清洗',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 8,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '逻辑错误清洗',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 9,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '空值预处理',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 10,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '数据去重',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 11,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '格式清洗',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              },
              {
                code: 12,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '逻辑错误清洗',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 1,
                endFlag: 0
              }
            ]
          },
          {code: 2, color: '#5AB8FA', name: '评价', children: []},
          {code: 3, color: '#4BBDBB', name: '补全', children: []},
          {code: 4, color: '#EF9D54', name: '建模', children: []},
          {code: 5, color: '#8F8BEA', name: '清洗加工', children: []},
          {code: 6, color: '#CE7EBC', name: '脱敏', children: []},
          {code: 7, color: '#77A1D5', name: '主数据', children: []},
          {code: 8, color: '#4380CC', name: '元数据', children: []},
          {
            code: 9,
            color: '#F77965',
            name: '储存',
            children: [
              {
                code: 111,
                applicationCode: '',
                color: '#4F8DFF',
                count: 0,
                name: '储存结果数据',
                upFunctionCode: '',
                downFunctionCode: '',
                startFlag: 0,
                endFlag: 1
              }
            ]
          }
        ],
        data: {
          id: '111',
          name: '测试',
          status: 1,
          nodeList: [
            {
              id: 'e72d40266ce311ea804d20040ff01250', // 前端生成的唯一ID
              applicationCode: 'appChoose', // 功能组件ID
              code: 'chooseData', // 应用组件ID
              name: '选取数据', // 功能组件名称
              status: '1', // 编辑状态
              disabledDrag: 0, // 禁止拖动,0不可拖动 1可以拖动
              functionParam: '{ID:1,NAME:2,age:3}', // 弹窗交互数据
              color: '#4F8DFF', // 按钮主题色
              top: 50, // drag 坐标Top
              left: 20, // drag 坐标Left
              upFunctionCode: '', // 上级连接
              downFunctionCode: '', // 下级连接
              isProcDefStart: 1, // 是否为起点
              isProcDefEnd: 0 // 是否为结点
            },
            {
              id: 'f6a567996ce311ea804d20040ff01250', // 前端生成的唯一ID
              applicationCode: 'appEvaluation', // 功能组件ID
              code: 'qualityEvaluation', // 应用组件ID
              name: '选取数据', // 功能组件名称
              status: '1', // 编辑状态
              disabledDrag: 1, // 禁止拖动,0不可拖动 1可以拖动
              functionParam: '{ID:1,NAME:2,age:3}', // 弹窗交互数据
              color: '#4F8DFF', // 按钮主题色
              top: 150, // drag 坐标Top
              left: 150, // drag 坐标Left
              upFunctionCode: '', // 上级连接
              downFunctionCode: '', // 下级连接
              isProcDefStart: 0, // 是否为起点
              isProcDefEnd: 0 // 是否为结点
            }
          ],
          // 计数列表
          countList: [{functionCode: 'chooseData', count: '1'}, {functionCode: 'qualityEvaluation', count: '1'}],
          // 关系列表
          connlist: [{
            sourceNodeId: 'e72d40266ce311ea804d20040ff01250',
            targetNodeId: 'f6a567996ce311ea804d20040ff01250'
          }]
        },
        dragItem: {},
        dragOffset: {},
        z_index: 0,
      }
    },
    created() {
      this.jsPlumb = this.$jsPlumb.getInstance({
        anchors: ["Continuous", {faces: ["top", "bottom"]}],
        Container: 'drag-box', // 选择器id
        EndpointStyle: {radius: 4, fill: '#acd'}, // 端点样式
        PaintStyle: {stroke: '#4D72E7', strokeWidth: 3}, // 绘画样式，默认8px线宽  #456
        HoverPaintStyle: {stroke: '#1E90FF'}, // 默认悬停样式  默认为null
        EndpointHoverStyle: {fill: '#acd', radius: 4}, // 端点悬停样式
        ConnectionOverlays: [ // 连线上的默认样式  这里是箭头
          ['Arrow', {
            location: 1,
            paintStyle: {
              stroke: '#4D72E7',
              fill: '#4D72E7'
            }
          }]
        ],
        Connector: ['Flowchart', {gap: 1}] // 要使用的默认连接器的类型：折线，流程等
      })
    },
    mounted() {
      this.getNavList()
      let that = this
      const ins = this.jsPlumb
      this.initAll()
      $("#drag-ul li").draggable({
        helper: 'clone',
        containment: "#ivu_home",
        scroll: false,
        // revert: true,
        drag: function (event, ui) {
          that.dragItem = JSON.parse(ui.helper[0].dataset.item) // 拖动传输的数据
          that.dragOffset.x = event.offsetX // 鼠标拖拽时距离按钮左侧边缘的距离
          that.dragOffset.y = event.offsetY // 鼠标拖拽时距离按钮上侧边缘的距离
        }
      })
      $("#drag-box").droppable({
        drop: function (event) {
          const id = that.guid().replace(/[-]/g, '')
          // 放下时鼠标的位置（相对于浏览器可视区域）
          const sLeft = event.clientX
          const sTop = event.clientY
          // drag-box 相对于浏览器可视区域的位置
          const boxLeft = $('#drag-box').offset().left
          const boxTop = $('#drag-box').offset().top
          // 按钮位置计算
          let left = sLeft - boxLeft - that.dragOffset.x
          let top = sTop - boxTop - that.dragOffset.y
          that.data.nodeList.push({
            id: id, // 应用组件ID
            applicationCode: that.dragItem.applicationCode,
            code: that.dragItem.code, // 功能组件ID
            name: that.dragItem.name, // 功能组件名称
            status: '1', // 编辑状态
            disabledDrag: 1, // 禁止拖动,0不可拖动 1可以拖动
            functionParam: '', // 弹窗交互数据
            color: that.dragItem.color, // 按钮主题色
            top: top, // drag 坐标Top
            left: left, // drag 坐标Left
            upFunctionCode: '',
            downFunctionCode: '',
            isProcDefStart: 1, // 是否为起点
            isProcDefEnd: 0 // 是否为结点
          })
          setTimeout(() => {
            that.initContainer(id)
          })
        }
      })
      // 删除单挑连接线
      ins.bind('click', function (conn, originalEvent) {
        if (confirm('确定删除所点击的链接吗？')) {
          ins.deleteConnection(conn)
        }
      })
    },
    methods: {
      async getNavList() {
        const result = await getApplication()
        if (result.code == '200') {
          this.navList = result.result
        }
      },
      delNode(id) {
        const ins = this.jsPlumb
        ins.remove(id)
      },
      initAll() {
        const rl = this.data.nodeList
        rl.map(item => {
          this.initContainer(item.id)
        })
      },
      initContainer(id) {
        const ins = this.jsPlumb
        const elem = document.getElementById(id)
        ins.draggable(id, {
          containment: 'parent',
          grid: [10, 10]
        })

        const common = {
          isSource: true,
          isTarget: true,
        }
        ins.ready(function () {
          ins.addEndpoint(elem, {
            anchor: 'Top',
            allowLoopback: false,

          }, common)
          ins.addEndpoint(elem, {
            anchors: ['Bottom'],
            allowLoopback: false,

          }, common)
        })
        ins.importDefaults({
          ConnectionsDetachable: false
        })
        // ins.makeSource(elem, {
        //   anchor: ['Perimeter', {
        //     anchorCount: 200,
        //     shape: 'Rectangle'
        //   }],
        //   allowLoopback: false,
        //   maxConnections: 1
        // })
        // ins.makeTarget(elem, {
        //   anchor: ['Perimeter', {
        //     anchorCount: 200,
        //     shape: 'Rectangle'
        //   }],
        //   allowLoopback: false,
        //   maxConnections: 1
        // })
      },
      guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0
          const v = c === 'x' ? r : (r & 0x3 | 0x8)
          return v.toString(16)
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "./ivu_home";
</style>
