const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

// Так как функция делает только return, то сокращены фигурные скобки и сам return
const renderGoodsItem = (title = 'Unknown', price = 0) => `<div class="goods-item"><h3>${title}</h3><p>${price} руб.</p></div>`;

// Здесь можно убрать скобки вокруг передаваемого аргумента, так как он только 1. Но, ради добавления дэфолтного параметра пришлось скобки оставить
const renderGoodsList = (list = []) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);

// Проблема с запятыми была решена использованием join(''). Проблема была в том, что содержимое листа рендерилось в HTML с запятыми