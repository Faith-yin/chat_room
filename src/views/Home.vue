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
      
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import BaseTitle from '@/components/base/BaseTitle.vue'

@Component({
  components: {
    BaseTitle
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss">
@import '@/style/home.scss';
</style>