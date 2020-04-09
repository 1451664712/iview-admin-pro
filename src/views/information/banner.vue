<template>
  <div id="mountNode">

  </div>
</template>

<script>
  import G6 from '@antv/g6';
  import {Chart} from '@antv/g2';

  export default {
    name: "banner",
    data() {
      return {
        msg: '',
        chart: null, // 创建一个chart变量
        data: [
          {genre: 'Sports', sold: 275},
          {genre: 'Strategy', sold: 115},
          {genre: 'Action', sold: 120},
          {genre: 'Shooter', sold: 350},
          {genre: 'Other', sold: 150}
        ]
      }
    },
    mounted() {
      this.chart = new Chart({
        container: 'mountNode', // 指定图表容器 ID
        width: 600, // 指定图表宽度
        height: 300, // 指定图表高度
      })
      this.chart.data(this.data)
      this.chart.interval().position('genre*sold');
      this.chart.render();
    }
  }
</script>

<style scoped>

</style>
