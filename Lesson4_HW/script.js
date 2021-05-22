// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

const text = "Lorem ipsum 'dolor' sit amet consectetur adipisicing elit. Corporis culpa mollitia maxime, in illum\'s blanditiis 'provident' omni\'s eaque explicabo, ullam minima reiciendis enim praesentium 'soluta', ab dignissimos libero itaque doloremque."

const reg = /\B\'|\'\B/g;

console.log(text);
console.log(text.replace(reg, '"'));


// 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
// a. Имя содержит только буквы.
// b. Телефон имеет вид +7(000)000-0000.
// c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
// d. Текст произвольный.
// e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.

let button = document.querySelector('.validate');


button.addEventListener('click', (event) => {
    let name = document.querySelector('.name');
    let phone = document.querySelector('.phone');
    let mail = document.querySelector('.mail');
    let text_in = document.querySelector('.text_in');

    let regexp_name = /^[a-zA-Z]+$/gi;
    let regexp_phone = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
    let regexp_mail = /^[a-z]+[\.\-]{1}[a-z]+@mail.ru$/;
    let regexp_text_in = /.+/;

    chec(regexp_name, name);
    chec(regexp_phone, phone);
    chec(regexp_mail, mail);
    chec(regexp_text_in, text_in);

    function chec(reg, element) {
        if (reg.test(element.value)) {
            element.classList.remove("unsuccess");
            element.classList.add("success");
        } else {
            element.classList.remove("success");
            element.classList.add("unsuccess");
        }
    }
})

// console.log(button);
// console.log(name.value);