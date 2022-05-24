<template>
  <input v-model="text" placeholder="Typ hier">
  <p>{{ text }}</p>
  <br>
  <button @click="toggle">klik hier als u het niet eens bent met onderstaande stelling</button>
  <h1 v-if="awesome">Scholt is top!</h1>
  <h1 v-else>Ga zelf je stroom regelen dan</h1>
  <br>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add ToDo</button>
  </form>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">Remove</button>
    </li>
  </ul>
  <br>
  <p ref="p">hello</p>

</template>

<script>
let id = 0
export default {
  data() {
    return {
      text: '',
      awesome: true,
      newTodo: '',
      todos: [
        {id: id++, text: 'Learn HTML'},
        {id: id++, text: 'Learn JavaScript'},
        {id: id++, text: 'Learn Vue'}
      ]
    }
  },
  methods: {
    onInput(e) {
      this.text = e.target.value
    },
    toggle() {
      this.awesome = !this.awesome
    },
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })

    },
    removeTodo(todo) {
      this.todos = this.todos.filter(t => t !== todo)

    }
  },
  mounted() {
    this.$refs.p.textContent = 'mounted!'
  },

}
</script>

<style scoped>

</style>