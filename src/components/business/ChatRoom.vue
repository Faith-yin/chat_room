<!--
 * @Date: 2020-09-25 10:04:12
 * @information: 聊天界面
-->
<template>
  <div id="chat-room">
    <!-- 标题区域 -->
    <div class="title-box">
      <div class="title-text">{{activeChatInfo.username || '未知用户'}}</div>
    </div>
    <!-- 会话区域 -->
    <div class="chat-box">
      会话区域
    </div>
    <!-- 输入框区域 -->
    <div class="input-box">
      <el-input type="textarea"
                resize="none"
                :rows="6"
                autofocus
                v-model="inputValue"
                @keydown.enter.native="onSubmit($event)"></el-input>
      <el-button  type="primary" 
                  round
                  size="small"
                  :loading="false"
                  :disabled="disabledMark"
                  @click="onSubmit">发送</el-button>
    </div>


  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import components from '@/interface/components'

@Component
export default class ChatRoom extends Vue {
  // 选中的消息体
  @Prop() private activeChatInfo!:components.dataListInter

  // 输入框值
  inputValue:string = ''

  private get disabledMark():boolean {
    return !this.inputValue.replace( /\s/g, '')
  }

  onSubmit(event:any):void {
    if(event.keyCode === 13) {
      event.preventDefault()
    }
    if(this.disabledMark) return;
    console.log(this.inputValue)
  }

}
</script>

<style lang="scss">
#chat-room {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title-box {
    padding: 20px 0 20px 10px;
    background-color: #F6F6F6;
    border-bottom: 1px solid #EDEDED;
  }

  .chat-box {
    padding: 10px;
    background-color: #F2F4F5;
    flex-grow: 4;
  }

  .input-box {
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    text-align: right;
    flex-grow: 0;
    position: relative;
    .el-textarea {
      min-height: inherit;
    }
    .el-textarea__inner {
      padding: 0;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-size: 16px;
      color: #333;
      border: none;
      &:focus {
        border-color: #fff;
      }
    }
    .el-button {
      margin: 10px 0;
    }
  }


}
</style>