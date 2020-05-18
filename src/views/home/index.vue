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
  // eslint-disable-next-line no-unused-vars
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
    }
  }
</script>

<style scoped lang="scss">
  @import "./ivu_home";
</style>
