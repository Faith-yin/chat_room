<!--
 * @Date: 2020-09-24 15:23:03
 * @information: 基础标题
-->
<template>
  <div id="base-title">
    <div class="title-text">{{titleText}}</div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component
export default class  extends Vue {
  // 文案
  @Prop({default: 'Welcome to Chat_Room_On_Line !'}) private titleText!: string


}
</script>

<style lang="scss">
#base-title {
  .title-text {
    margin: 20px 0;
    color: #FB7299;
    font-size: 30px;
    text-align: center;
  }

}
</style>
