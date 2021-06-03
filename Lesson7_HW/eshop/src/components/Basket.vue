<template>
  <div class="cart cart-list" v-show="isVisibleCart">
    <div v-if="basketGoods.length > 0">
      <div
        v-for="item in basketGoods"
        :key="item.id_product"
        class="goods-item"
      >
        <h3>{{ item.product_name }}</h3>
        <p>{{ item.price }}</p>
        <button v-on:click="$emit('remove-basket', item)">Удалить</button>
      </div>
    </div>
    <h2 v-else>Корзина пуста</h2>
  </div>
</template>


<script>
export default {
  props: {
    basketGoods: {
      type: Array,
      default: () => [],
    },
    isVisibleCart: {
      type: Boolean,
    },
  },
};
</script>


<style>
.cart {
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  padding: 20px;
  width: 800px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  overflow: auto;
}
.cart-list {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>