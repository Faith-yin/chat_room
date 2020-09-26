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
      <!-- 列表 -->
      <list-tab v-show="activeTab===1"
                @on-item-click="onChatItemClick"></list-tab>
      <!-- 右侧区域 -->
      <div class="right-container" v-show="activeTab===1">
        <chat-room :activeChatInfo="activeChatInfo"></chat-room>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import BaseTitle from '@/components/base/BaseTitle.vue'
import MineTab from '@/components/business/MineTab.vue'
import ListTab from '@/components/business/ListTab.vue'
import ChatRoom from '@/components/business/ChatRoom.vue'
import components from '@/interface/components'

@Component({
  components: {
    BaseTitle,
    MineTab,
    ListTab,
    ChatRoom,
  },
})
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