class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.sizes = {
            big: { price: 50, calories: 20 },
            small: { price: 100, calories: 40 },
        }
        this.stuffings = {
            cheese: { price: 10, calories: 20 },
            sald: { price: 20, calories: 5 },
            potato: { price: 15, calories: 10 },
        }
        this.toppings = {
            seasoning: { price: 15, calories: 0 },
            mayonnaise: { price: 20, calories: 5 },
        }
        this.burger = {
            price: this.sizes[this.size].price + this.stuffings[this.stuffing].price,
            calories: this.sizes[this.size].calories + this.stuffings[this.stuffing].calories,
        }
    }
    addTopping(topping) {
        this.burger.price += this.toppings[topping].price
        this.burger.calories += this.toppings[topping].calories
    }    // Добавить добавку
    removeTopping(topping) {
        this.burger.price -= this.toppings[topping].price
        this.burger.calories -= this.toppings[topping].calories
    } // Убрать добавку
    getToppings() {
        console.log(Object.keys(this.toppings))
    }   // Получить список добавок
    getSize() {
        console.log(this.size)
    }               // Узнать размер гамбургера
    getStuffing() {
        console.log(this.stuffing)
    }           // Узнать начинку гамбургера
    calculatePrice() {
        console.log(this.burger.price)
    }       // Узнать цену
    calculateCalories() {
        console.log(this.burger.calories)
    }     // Узнать калорийность
    getBurger() {
        console.log(this.burger)
    }
}

const burger = new Hamburger('big', 'cheese');
burger.getToppings();
burger.getSize();
burger.getStuffing();
burger.calculatePrice();
burger.calculateCalories();
burger.getBurger()
burger.addTopping('seasoning')
burger.addTopping('mayonnaise')
burger.getBurger()
burger.removeTopping('seasoning')
burger.removeTopping('mayonnaise')
burger.getBurger()