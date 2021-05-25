<template>
  <div id="app">
    <header>
      <input type="text" class="goods-search" v-model="searhLine" />
      <!-- <button class="search-button" type="button">Искать</button> -->
      <button class="cart-button" type="button">Корзина</button>
    </header>
    <main>
      Элитные товары:
      <div class="goods-list">
        <div
          v-for="item in filteredGoods"
          :key="item.id_product"
          class="goods-item"
        >
          <h3>{{ item.product_name }}</h3>
          <p>{{ item.price }}</p>
          <button
            v-on:click="
              addTobasket({
                product_name: item.product_name,
                price: item.price,
              })
            "
          >
            Добавить
          </button>
        </div>
      </div>
      <br />
      Корзина:
      <h3>
        Скрыть/показать карзину
        <input type="checkbox" v-model="isVisibleCart" />
      </h3>
      <div v-show="isVisibleCart">
        <div class="cart-list" v-if="basketGoods.length > 0">
          <div
            v-for="item in basketGoods"
            :key="item.id_product"
            class="goods-item"
          >
            <h3>{{ item.product_name }}</h3>
            <p>{{ item.price }}</p>
            <button v-on:click="removeFromBasket(item.product_name)">
              Удалить
            </button>
          </div>
        </div>
        <h2 v-else>Корзина пуста</h2>
      </div>
    </main>
  </div>
</template>

<script>
const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
export default {
  data: () => ({
    goods: [],
    filteredGoods: [],
    searhLine: "",
    basketGoods: [],
    isVisibleCart: true,
  }),

  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`);
  },

  methods: {
    makeGETRequest(url) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
        });
    },
    filterGoods(value) {
      const regexp = new RegExp(value, "i");
      this.filteredGoods = this.goods.filter((good) =>
        regexp.test(good.product_name)
      );
    },
    addTobasket(product) {
      let check = true;
      this.basketGoods.forEach((good) => {
        if (good.product_name == product.product_name) {
          check = false;
        }
      });

      if (check) {
        this.basketGoods.push(product);
      }
    },
    removeFromBasket(value) {
      this.basketGoods = this.basketGoods.filter(
        (good) => good.product_name != value
      );
    },
  },
  watch: {
    searhLine() {
      this.filterGoods(this.searhLine);
    },
  },
};
</script>

<style>
* {
  outline: unset;
}
body {
  margin: unset;
}
header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
}
main {
  padding: 20px 5%;
}
.cart-button {
  font-size: 16px;
  padding: 10px 20px;
  border: unset;
  border-radius: 10px;
  background-color: white;
  transition: 0.3s;
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
}
.cart-button:hover {
  color: white;
  background-color: black;
}
.cart-list,
.goods-list {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-item {
  width: 200px;
  height: 300px;
  padding: 5px;
  margin: 10px;
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
}
.goods-search,
.search-button {
  height: 100%;
}
.goods-item-image-container {
  width: 100%;
  height: 200px;
}
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
</style>