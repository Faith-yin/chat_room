<!--
 * @Date: 2020-09-24 15:55:26
 * @information: 404
-->
<template>
  <div id="not-found">
    <div>
      <img src="@/assets/img/not_found.png" alt="页面不见啦">
    </div>
    <router-link to="/login">
      <el-button class="back-btn" type="primary">返回</el-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component
export default class  extends Vue {

}
</script>

<style lang="scss">
@import '@/style/not_found.scss';
</style>