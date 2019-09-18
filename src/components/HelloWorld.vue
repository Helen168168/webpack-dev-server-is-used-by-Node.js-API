<template>
  <div class="hello" v-initDirective="3">
    <span>this is my first project using webpack-dev-server and hot reload plugin!</span>
    <p>{{ testData }}</p>
  </div>
</template>

<script>

import testMinix from '@/mixins/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.getData()
  },
  mixins: [testMinix],
  methods: {
    getData() {
    
    }
  },
}
</script>

<style scoped>
  .red {
    color: red;
  }
</style>
