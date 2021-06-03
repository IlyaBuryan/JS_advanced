<template>
  <div id="app">
    <CreateTask
      @add-task="addtask"
      :mark="mark"
      :deletetask="deletetask"
      :todolist="todolist"
    />
  </div>
</template>

<script>
import CreateTask from "./components/CreateTask.vue";

export default {
  components: {
    CreateTask,
  },

  data: () => ({
    todolist: [],
  }),

  methods: {
    addtask(value) {
      let check = true;
      this.todolist.forEach((element) => {
        if (element.value == value) {
          check = false;
        }
      });

      if (check & /^\S/.test(value)) {
        this.todolist.push({ value: value, isactive: true });
      }
      console.log(value);
    },

    deletetask(value) {
      this.todolist.splice(this.todolist.indexOf(value), 1);
    },

    mark(value) {
      let a = this.todolist.indexOf(value);
      this.todolist[a].isactive = !this.todolist[a].isactive;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
