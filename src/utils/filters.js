/**
 * 全局过滤器
 */
import {
  parseTime
} from '@/utils'

const filters = {
  // 时间戳转换为 yyyy-MM-dd mm:hh:ss
  DateTime: function (time, cFormat = '{y}-{m}-{d}') {
    return parseTime(time,cFormat)
  },
  myStatus(val) {
    //isAud: 审核状态 0 未审批 1 审批通过 2 审批未通过
    if(val == 1) {
      return '审批通过';
    } else if (val == 2) {
      return '审批未通过';
    } else {
      return '未审批';
    }
  },
  myOpen(val) {
    //isOpen: 公开 0 否 1 是
    if(val == 1) {
      return '公开';
    } else {
      return '未公开';
    }
  },


}

export default filters
