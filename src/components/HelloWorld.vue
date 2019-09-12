<template>
  <div class="hello" v-initDirective="3">
    <span>this is my first project using webpack-dev-server and hot reload plugin!</span>
    <p>{{ testData }}</p>
  </div>
</template>

<script>
import { $getData } from '@/api/getData'
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
      $getData({orgCode:'00003', period:'201902' }).then(res => {
        
      })
    }
  },
}
</script>

<style scoped>
  .red {
    color: red;
  }
</style>
