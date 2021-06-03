<template>
  <div class="container con col-6">
    <input type="text" class="form-control" v-model="item" />
    <button
      type="button"
      class="btn btn-primary btn-in"
      v-on:click="$emit('add-task', item)"
    >
      Add
    </button>
    <TasksList @deletetask="deletetask" @mark="mark" :todolist="todolist" />
  </div>
</template>

<script>
import TasksList from "./TasksList.vue";

export default {
  components: {
    TasksList,
  },

  props: {
    todolist: {
      type: Array,
      default: () => [],
    },
    deletetask: {
      type: Function,
    },
    mark: {
      type: Function,
    },
  },

  data: () => ({
    item: "",
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.con {
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-in {
  width: 100%;
  margin-top: 20px;
}
</style>
