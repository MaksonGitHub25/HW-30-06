const btn = document.querySelector('.btn');

var jsonProducts =
'[{"category":"TV","price":1500,"manufacturer":"Sony","createdAt":"2019-05-28T17:55:29.945Z"},{"category":"Laptop","price":1200,"manufacturer":"Acer","createdAt":"2019-05-28T19:55:29.946Z"},{"category":"Smartphone","price":750,"manufacturer":"Apple","createdAt":"2018-03-08T10:45:00.000Z"},{"category":"Fridge","price":1850,"manufacturer":"Vestfrost","createdAt":"2018-05-28T17:55:29.946Z"},{"category":"Boiler","price":500,"manufacturer":"Indesit","createdAt":"2014-12-25T08:30:00.000Z"},{"category":"Stove","price":700,"manufacturer":"Gorenje","createdAt":"2018-09-17T11:00:00.000Z"},{"category":"Washing Machine","price":850,"manufacturer":"Electrolux","createdAt":"2019-05-28T18:55:29.946Z"},{"category":"Vacuum Cleaner","price":450,"manufacturer":"Samsung","createdAt":"2019-05-13T17:55:29.946Z"},{"category":"Conditioner","price":1000,"manufacturer":"Toshiba","createdAt":"2017-07-01T00:00:00.000Z"},{"category":"Iron","price":320,"manufacturer":"Philips","createdAt":"2013-11-18T07:20:00.000Z"},{"category":"Teapot","price":400,"manufacturer":"Bosch","createdAt":"2016-10-03T09:45:00.000Z"},{"category":"Electric Shaver","price":440,"manufacturer":"Braun","createdAt":"2019-05-29T03:55:29.946Z"},{"category":"Toaster","price":620,"manufacturer":"Tefal","createdAt":"2015-05-29T03:55:29.946Z"},{"category":"Coffee Machine","price":1300,"manufacturer":"Delonghi","createdAt":"2019-05-28T02:55:29.946Z"}]';

const arrOfItem = JSON.parse(jsonProducts);

function askUserFunction(){
    userChoice = prompt(`Выбери функцию: \nа) Просмотр всех товаров \nб) Установить фильтры \nв) Сортировать товары \nг) Выйти`);
    if (userChoice == 'а') {
        showAllItems();
    } else if (userChoice == 'б') {
        alert('Coming soon 😜');
        askUserFunction();
    } else if (userChoice == 'в') {
        alert('Coming soon 😜');
        askUserFunction();
    } else if (userChoice == 'г') {
        alert('До скорого!');
    } else {
        alert('Ты ввел недопустимое значение!');
        askUserFunction();
    }
}

function isRepeatShow() {
    isRepeat = confirm('Вывести ещё раз?');
    if (isRepeat == true) {
        showAllItems();
    } else {
        askUserFunction();
    }
}

function showAllItems() {
    console.table(arrOfItem);
    
    const arrOfItemLen = arrOfItem.length;

    let sumPrice = 0;
    arrOfItem.forEach(function (elem) {
        for (let key in elem) {
            let value = elem[key];
            if (key == 'price') {
                sumPrice += value;
            }
        }
    });

    const middlePrice = Math.floor(sumPrice/arrOfItemLen);

    console.log(`Количество товаров: ${arrOfItemLen}`);
    console.log(`Сумма цен всех товаров: ${sumPrice}`);
    console.log(`Средняя стоимость товаров: ${middlePrice}`);
    // console.log(`Самый дорогой товар: ${}`);
    // console.log(`Самый дешевый товар: ${}`);

    isRepeatShow();
}

btn.addEventListener('click', askUserFunction);