<template>
  <div class="box">
    <span>2018年5月14日 - 哎,就在今天,我关注了多年的博客 ruanyifeng.com 无法访问了。 本文讲述了阮一峰在过去 7 年对我的影响,文章很长,看完需要耐心。 初识阮一峰我从大学的时候就</span>
    <button @click="hello">点击于都</button>
  </div>
</template>

<script>
  import {mixinTest} from "../../utils/mixins.js";

  export default {
    name: "customer_list",
    mixins: [mixinTest],
    created() {
      // this.hello()
    },
    methods: {
      init() {
        console.log(1);
      }
    }
  }
</script>

<style scoped>
 .box {
   width: 600px;
   height: 300px;
   background: #399;
 }
</style>
