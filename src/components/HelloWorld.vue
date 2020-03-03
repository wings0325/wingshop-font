<template>
  <div class="hello">
    <cube-button> cube-button</cube-button>
  </div>
</template>

<script>
  import {Style,Button} from 'cube-ui'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
