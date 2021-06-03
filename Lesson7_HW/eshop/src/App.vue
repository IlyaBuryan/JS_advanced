<template>
  <div id="app">
    <Search @search="filterGoods" @toggle_basket="toggleBasket" />
    <main>
      Элитные товары:
      <GoodsList @add-basket="addTobasket" :goods="filteredGoods" />
      <Basket
        :basketGoods="basketGoods"
        :isVisibleCart="isVisibleCart"
        @remove-basket="removeFrombasket"
      />
      <RequestError v-show="isVisibleError" />
    </main>
  </div>
</template>

<script>
import GoodsList from "./components/GoodsList";
import Search from "./components/Search";
import Basket from "./components/Basket";
import RequestError from "./components/RequestError";

const API_URL = "http://localhost:3000";

export default {
  components: {
    GoodsList,
    Search,
    Basket,
    RequestError,
  },
  data: () => ({
    goods: [],
    filteredGoods: [],
    basketGoods: [],
    isVisibleCart: false,
    isVisibleError: false,
  }),

  mounted() {
    this.getGoods();
    this.getCart();
  },

  methods: {
    addTobasket(item) {
      this.makePOSTRequest(`${API_URL}/addToCart`, item).then(() =>
        this.getCart()
      );
    },
    removeFrombasket(item) {
      this.makePOSTRequest(`${API_URL}/removeFromCart`, item).then(() =>
        this.getCart()
      );
    },
    makeGETRequest(url) {
      return fetch(url)
        .then((data) => data.json())
        .catch(() => {
          this.isVisibleError = !this.isVisibleError;
        });
    },
    makePOSTRequest(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          // добавили хэдер
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((data) => data.json());
    },
    getGoods() {
      this.makeGETRequest(`${API_URL}/catalogData`).then((data) => {
        this.goods = data;
        this.filteredGoods = data;
      });
    },
    getCart() {
      this.makeGETRequest(`${API_URL}/cartData`).then((data) => {
        this.basketGoods = data;
      });
    },
    filterGoods(value) {
      const regexp = new RegExp(value, "i");
      this.filteredGoods = this.goods.filter((good) =>
        regexp.test(good.product_name)
      );
    },
    toggleBasket() {
      this.isVisibleCart = !this.isVisibleCart;
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
.goods-search,
.search-button {
  height: 100%;
}
.goods-item-image-container {
  width: 100%;
  height: 200px;
}
</style>