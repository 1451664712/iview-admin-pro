import feach from '../utils/axios'

// 组件信息
export function getApplication () {
  return feach({
    url: '/application/queryApplicationListAllInfo',
    method: 'post'
  })
}

// 查询任务资源配置
export function getTaskRe (data) {
  return feach({
    url: '/taskre/initTaskRe',
    method: 'post',
    data: data
  })
}

// 任务资源配置-新增/修改
export function updateTaskRe (data) {
  return feach({
    url: '/taskre/updateTaskRe',
    method: 'post',
    data: data
  })
}
