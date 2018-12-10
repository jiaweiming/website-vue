<template>
  <div>
    <label for="ipt"></label>
    <input id="ipt" type="text" v-model="input_one">
    <component-two :secondValue.sync="input_two"></component-two>
  </div>
</template>

<script>
  import ComponentTwo from '../header/Footer.vue'

  export default {
    name: "component-one",
    components: {
      ComponentTwo
    },
    data() {
      return {
        input_one: 'Hello from ComponentOne',
        input_two: ''
      }
    }
  }
</script>
