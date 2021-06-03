<template>
  <div>
    <div class="task" v-for="i in todolist" :key="i">
      <input type="checkbox" v-on:change="$emit('mark', i)" />
      <p class="zero" v-if="i.isactive">
        {{ i.value }}
      </p>
      <s class="zero" v-else>
        {{ i.value }}
      </s>
      <button class="btn btn-warning" v-on:click="$emit('deletetask', i)">
        Delete
      </button>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    todolist: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.task {
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.zero {
  margin: 0 20px 0 20px;
}
</style>