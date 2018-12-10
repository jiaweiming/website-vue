<template>
  <div>
    <label for="ipt">数量</label>
    <input id="ipt" type="text" v-model="input_two">
  </div>
</template>

<script>
  export default {
    name: "componentTwo",
    data() {
      return {
        input_one: 'Hello from ComponentTwo',
        input_two: ''
      }
    },
    watch: {
      input_two: function (val) {
        this.$emit('update:secondValue', val)
      }
    }
  }
</script>
