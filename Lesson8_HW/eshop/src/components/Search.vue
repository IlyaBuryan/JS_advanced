<template>
  <header>
    <input type="text" class="goods-search" v-model="searhLine" />
    <button
      class="cart-button"
      type="button"
      v-on:click="$emit('toggle_basket')"
    >
      Корзина
    </button>
  </header>
</template>

<script>
export default {
  data: () => ({
    searhLine: "",
  }),
  watch: {
    searhLine() {
      this.$emit("search", this.searhLine);
    },
  },
};
</script>
