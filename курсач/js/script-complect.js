let min_price = 0;
let max_price = 66500;

$(document).ready(function () {
  showAllItems(); 
});

$("#min-price").on("change mousemove", function () {
  min_price = parseInt($("#min-price").val());
  $("#min-price-txt").text(min_price + " ₽");
  showItemsFiltered();
});

$("#max-price").on("change mousemove", function () {
  max_price = parseInt($("#max-price").val());
  $("#max-price-txt").text(max_price + " ₽");
  showItemsFiltered();
});

let category_items = [
  {
    id: 1,
    category_id: 8,
    price: 66500,
    title: "AMD RADEON™ RX 6600 XT",
    thumbnail:
      "img/rx6600xt 1.png",
    description: "• Модель GPU	AMD Radeon RX 6600 XT <br> • Объем памяти	8 ГБ <br>• Тип памяти	GDDR6 <br>• Разрядность шины	128 бит <br>• Частота работы GPU	2589 МГц <br>• Частота работы памяти	16000 МГц"
  },
  {
    id: 2,
    category_id: 8,
    price: 5500,
    title: "ТВЕРДОТЕЛЬНЫЙ НАКОПИТЕЛЬ SSD KINGSPEC M.2 512GB",
    thumbnail:
      "img/ssd.png",
      description: "• Объем: 512 ГБ <br> • Форм-фактор: M.2 / 2280 / <br>• Интерфейс: M.2 PCI-E 3.0 4x <br>• Внешняя скорость записи: 1000 МБ/с  <br>• Внешняя скорость считывания: 1500 МБ/с<br>• РАЗРЕШЕНИЕ: FULL HD [1920X1080]    <br>• Гарантия производителя: 5 лет",
  }
];

function showAllItems() {
  $("#display-items-div").empty();
  for (let i = 0; i < category_items.length; i++) {
    let item_content =
    '<div class="col-12 col-md-4 text-center product-card" data-available-sizes="' +
    '"><b class="product-name">' +
    category_items[i]["title"] +
    '</b><br><img src="' +
    category_items[i]["thumbnail"] +
    '" height="257" width="357" alt="shoe thumbnail"> <div class="desc">' +
    category_items[i]["description"] + '</div><p class="price">' +
    category_items[i]["price"] +
    " ₽</p></div>";
  $("#display-items-div").append(item_content);
}
}

function showItemsFiltered() {
  $("#display-items-div").empty();
  for (let i = 0; i < category_items.length; i++) {
    if (
      category_items[i]["price"] <= max_price &&
      category_items[i]["price"] >= min_price
    ) {
      let item_content =
        '<div class="col-12 col-md-4 text-center product-card" data-available-sizes="' +
        '"><b class="product-name">' +
        category_items[i]["title"] +
        '</b><br><img src="' +
        category_items[i]["thumbnail"] +
        '" height="257" width="357" alt="shoe thumbnail"> <div class="desc">' +
        category_items[i]["description"] + '</div><p class="price">' +
        category_items[i]["price"] +
        " ₽</p></div>";
      $("#display-items-div").append(item_content); //Display in grid
    }
  }
}
