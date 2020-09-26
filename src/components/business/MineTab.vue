<!--
 * @Date: 2020-09-25 09:58:10
 * @information: 我的通栏
-->
<template>
  <div id="mine-tab">
    <div class="tab-item">
      <el-avatar  icon="el-icon-user-solid" 
                  title="我的"
                  @click="onMineClick"></el-avatar>
    </div>
    <div class="tab-item">
      <i  :class="['el-icon-chat-dot-round', {'active-tab': activeTab===1}]" 
          title="消息"
          @click="onMsgClick"></i>
    </div>
    <div class="tab-item">
      <i  :class="['el-icon-user', {'active-tab': activeTab===2}]" 
          title="联系人"
          @click="onPersonClick"></i>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';

@Component
export default class MineTab extends Vue {
  // 当前tab
  @Prop()private activeTab?: number

  /**
   * @author: ypf
   * @Date: 2020-09-25 10:56:45
   * @information: 我的
   */
  onMineClick():void {}

  /**
   * @author: ypf
   * @Date: 2020-09-25 10:56:45
   * @information: 消息
   */
  @Emit("message")
  onMsgClick():void {}

  /**
   * @author: ypf
   * @Date: 2020-09-25 10:56:45
   * @information: 联系人
   */
  @Emit("person")
  onPersonClick():void {}

}
</script>

<style lang="scss">
#mine-tab {
  width: 80px;
  min-height: inherit;
  text-align: center;
  border-right: 1.5px solid #eee;
  .tab-item {
    padding: 15px 0;
    .el-icon-user-solid {
      cursor: pointer;
    }
    .el-icon-chat-dot-round,
    .el-icon-user {
      cursor: pointer;
      zoom: 1.5;
      &:hover {
        color: #FB7299;
      }
    }
    .active-tab {
      color: #FB7299;
    }
  }

}
</style>