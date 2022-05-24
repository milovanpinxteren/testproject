<template>
  <div>

    <h1>{{ message }} </h1>
    <br>
    En nou andersom en rood:
    <br>
    <h1 :id="colorId">{{ message.split('').reverse().join('') }}</h1>
    <br>
    <button @click="increment">count is: {{ count }}</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'Ciao bella, come va?',
      colorId: 'colors',
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }



}
</script>

<style scoped>
/*#colors {*/
/*  color: red;*/
/*}*/

</style>