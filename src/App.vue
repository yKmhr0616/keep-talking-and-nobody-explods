<template>
  <div id="app">
    <b-tabs content-class="mt-3">
      <b-tab title="順番ワイヤ" active>
        <SequenceWire></SequenceWire>
      </b-tab>
      <b-tab title="複雑ワイヤ">
        <ComplicatedWire></ComplicatedWire>
      </b-tab>
      <b-tab title="ワイヤ">
        <Wire></Wire>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import SequenceWire from '@/views/SequenceWire';
import ComplicatedWire from '@/views/ComplicatedWire';
import Wire from '@/views/Wire';

export default {
  components:{
    SequenceWire,
    ComplicatedWire,
    Wire,
  },
}
</script>

<style lang="scss">
body{
  line-height: 1.7 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
