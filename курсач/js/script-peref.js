let min_price = 0;
let max_price = 3990;

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
    price: 1499,
    title: "МЫШЬ A4TECH BLOODY Q82 ОПТИЧЕСКАЯ, ПРОВОДНАЯ, USB",
    thumbnail:
      "img/mouse.png",
    description: "• ГАРАНТИЯ: 12 МЕСЯЦЕВ <br> • ТИП: ПРОВОДНАЯ <br>• Общее количество кнопок: 8 <br>• Максимальное разрешение датчика: 3200dpi    <br>• Тип сенсора мыши: оптический<br>• Длина кабеля: 1.2м    <br>"
  },
  {
    id: 2,
    price: 3299,
    title: "ИГРОВАЯ СТЕРЕОГАРНИТУРА PANTEON GHP-280",
    thumbnail:
      "img/headphones.png",
      description: "• ГАРАНТИЯ: 12 МЕСЯЦЕВ <br> • ТИП: ПРОВОДНАЯ <br>• Формат звуковой схемы: 7.1 Virtual<br>• Основной цвет наушников: серый 4GB<br>• Подсветка: Разноцветная<br>• Микрофон : Есть <br>• Чувствительность микрофона: -38 дБ"
  },
  {
    id: 3,
    price: 3990,
    title: "КОВРИК GAMING MOUSE PAD RGB GMS-X3",
    thumbnail:
      "img/kovrik.png",
      description: "• ГАРАНТИЯ: 12 МЕСЯЦЕВ <br> • Материал поверхности: пластик <br> • Материал основания: резина <br> • Размеры (ДхШхТ): 359x299x5 мм <br> • Подсветка: Есть <br> "
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
