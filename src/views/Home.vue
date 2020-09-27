<!--
 * @Date: 2020-09-22 18:41:21
 * @information: home
-->
<template>
  <div id="home">
    <!-- 标题 -->
    <base-title></base-title>
    <!-- 主体内容 -->
    <div class="container">
      <!-- 我的通栏 -->
      <mine-tab :activeTab="activeTab"
                @message="activeTab=1"
                @person="activeTab=2"></mine-tab>
      <!-- 右侧区域 -->
      <div class="right-container" v-show="activeTab===1">
        <!-- 列表 -->
        <chat-list @on-item-click="onChatItemClick"></chat-list>
        <!-- 聊天区域 -->
        <chat-room  v-if="Object.keys(activeChatInfo).length"
                    :activeChatInfo="activeChatInfo"></chat-room>
        <!-- 未选择聊天对象时 -->
        <div  v-else
              class="empty-box">主动一点，世界更大~</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import components from '@/interface/components'

@Component
export default class Home extends Vue {
  // 当前tab(消息：1，联系人：2)
  activeTab: number = 1
  // 当前会话
  activeChatInfo:components.dataListInter = {}

  /**
   * @author: ypf
   * @Date: 2020-09-25 16:01:01
   * @information: 消息某一项被点击
   */
  onChatItemClick(item:components.dataListInter, index:number):void {
    this.activeChatInfo = {...item}
  }



}
</script>

<style lang="scss">
@import '@/style/home.scss';
</style>