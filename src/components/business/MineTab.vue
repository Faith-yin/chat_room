<!--
 * @Date: 2020-09-25 09:58:10
 * @information: 我的通栏
-->
<template>
  <div id="mine-tab">
    <div class="tab-item tab-item--mine" @click="onMineClick">
      <el-dropdown placement="bottom-start" @command="onCommandClick">
        <el-avatar  icon="el-icon-user-solid" title="我的"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="onLoginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
import {components} from '@/interface'

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

  /**
   * @author: ypf
   * @Date: 2020-09-26 14:33:29
   * @information: 我的菜单被点击时
   */
  onCommandClick(val:string):void {
    val && this[val]()
  }

  onLoginOut():void {
    this.$router.push({name: 'login'})
  }

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

  .tab-item--mine span {
    cursor: pointer;
  }

}
</style>