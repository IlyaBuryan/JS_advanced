const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

// 1-вариант: Сделал через fetch. Вы говорили в видео, что он сделан на промисах, так что формально соблюдено условие первой задачи.
const makeGETRequest = (url, callback) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            callback(data)
        })
}

// 2-вариант: Сделал с использованием промиса. 
// Но с запросом гораздо сложнее и непонятнее, чем мы на уроке со строкой делали. Заработало только с 2 вложенными timeouts

// const makeGETRequest = (url, callback) => {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             let xhr;

//             if (window.XMLHttpRequest) {
//                 xhr = new XMLHttpRequest();
//             } else if (window.ActiveXObject) {
//                 xhr = new ActiveXObject("Microsoft.XMLHTTP");
//             }

//             xhr.open('GET', url, true);
//             xhr.send();

//             setTimeout(() => {
//                 res(xhr);
//             }, 100)
//         }, 100)
//     })

//     promise
//         .then((data) => {
//             callback(JSON.parse(data.responseText));
//         })
// }

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        // list.render(); добавлен в promise
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
                    this.goods = goods;
                })
                setTimeout(() => {
                    res();
                }, 100)
            }, 100)
        })

        promise
            .then(() => {
                list.render();
            })
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    getTotalSum() {
        const totalSum = this.goods.reduce((acc, item) => {
            if (!item.price) return acc;
            return acc + item.price;
        }, 0);
        console.log(totalSum);
    }
}

const list = new GoodsList();
list.fetchGoods();



class Basket extends GoodsList {
    constructor(...args) {
        super(...args);
    }

    clearAll() {
        this.goods = [];
    }

    addItem(i) {
        this.goods.push(i);
        this.render()
    }

    removeItem(i) {
        this.goods.pop(i);
        this.render()
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new BasketItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.basket-list').innerHTML = listHtml;
    }

}

class BasketItem extends GoodsItem {
    constructor(...args) {
        super(...args);
        this.count = 0;
    }

    addOne() {
        this.count += 1;
    }

    removeOne() {
        this.count -= 1;
    }

    render() {
        return `<div class="basket-item"><h3>${this.product_name}</h3><p>${this.price}</p><p>${this.count}</p></div>`;
    }
}


const basket = new Basket();

basket.addItem({ product_name: 'Shirt', price: 150 });
basket.addItem({ product_name: 'Socks', price: 50 });

