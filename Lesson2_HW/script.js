class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 151 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    getTotalSum() {
        let totalSum = 0;
        this.goods.forEach(good => totalSum += good.price);
        document.querySelector('.total-sum').innerHTML = `Итоговая сумма товаров: ${totalSum}`;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.getTotalSum();

class BasketItem {
    // задает переменные айтема
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    // возвращает html айтема
    render() {
    }
}

class Basket {
    // Получает на вход список товаров для отрисовки
    constructor() {
        this.goods = [];
    }
    // возвращает html корзины и отображает ее
    render() {
    }
    // добавляет новый элемент в карзину
    addItem() {
    }
    // удаляет элемент из корзины
    deleteItem() {
    }
    // меняет количество одного элемента в корзине
    changeQuantity() {
    }
    // возвращает итоговую сумму всех элементов карзины
    getTotalSum() {
    }
    // возвращает итоговое количество элементов в карзине
    getTotalQuantity() {
    }
}