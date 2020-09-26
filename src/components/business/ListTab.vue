<!--
 * @Date: 2020-09-25 10:00:53
 * @information: 列表通栏
-->
<template>
  <div id="list-tab">
    <div  :class="['item-box', {'item-box--acitve': activeItem===index}]" 
          v-for="(item,index) in dataList" 
          :key="index" 
          @click="onItemClick(item, index)">
      <!-- 左侧头像区域 -->
      <el-avatar size="medium">{{item.username ? item.username.split('').reverse()[0] : ''}}</el-avatar>
      <!-- 右侧部分 -->
      <div class="right-box">
        <div class="right-cell">
          <div class="username">{{item.username}}</div> 
          <div class="time">{{item.time}}</div>
        </div>
        <div class="msg-cell font-hidden">{{item.message}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import components from '@/interface/components'

@Component
export default class ListTab extends Vue {
  // 列表
  dataList: Array<components.dataListInter> = [
    {img: '', username: '小明', message: '这是一条消息这是一条消息这是一条消息', time: '09/25'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
    {img: '', username: '小明', message: '这是一条消息', time: '11:49'},
  ]
  // 当前所在会话index
  activeItem: number = -1

  /**
   * @author: ypf
   * @Date: 2020-09-25 15:33:17
   * @information: 某一项被点击
   */
  @Emit("on-item-click")
  onItemClick(item: any, index: number): void {
    this.activeItem = index
  }



}
</script>

<style lang="scss">
#list-tab {
  min-width: 248px;
  padding: 10px 0;
  overflow: auto;
  border-right: 1px solid #eee;
  .item-box {
    padding: 10px 20px;
    display: flex;
    cursor: default;
    &:hover {
      background-color: #f3f3f3;
    }
    .el-avatar.el-avatar--medium {
      position: relative;
      top: 3px;
    }
    .right-box {
      margin-left: 10px;
      .right-cell {
        display: flex;
        justify-content: space-between;
        .time {
          position: relative;
          top: 3px;
          color: #999;
          font-size: 14px;
        }
      }
      .msg-cell {
        max-width: 150px;
        min-width: 150px;
        color: #999;
        font-size: 14px;
      }
    }
  }
  .item-box--acitve {
    background-color: #EBEDF0 !important;
  }


}


</style>