<template>
  <div>
    <button @click="app">增加</button>
    <div class="noticeListBox" ref="box">
      <div class="noticeList" v-for="(item,index) in num">
        {{item}}
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "introduce",
    data() {
      return {
        num: 4
      }
    },
    methods: {
      app() {
        this.num++
        let div = this.$refs.box
        console.log(div);
        console.log(div.scrollLeft);
        setTimeout(() => {
          div.scrollLeft = div.scrollWidth;
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  .noticeListBox {
    width: 100%;
    box-sizing: border-box;
    overflow: scroll;
    white-space: nowrap;
    transition: all 1s;
  }

  .noticeListBox::-webkit-scrollbar {
    transition: all .5s;
    /*display: none;*/
  }

  .noticeList {
    display: inline-block;
    width: 200px;
    margin: 10px;
    background: #399;
  }
</style>
