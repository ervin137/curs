let min_price = 0;
let max_price = 111000;

$(document).ready(function () {
  showAllItems(); //Display all items with no filter applied
});

$("#min-price").on("change mousemove", function () {
  min_price = parseInt($("#min-price").val());
  $("#min-price-txt").text("$" + min_price);
  showItemsFiltered();
});

$("#max-price").on("change mousemove", function () {
  max_price = parseInt($("#max-price").val());
  $("#max-price-txt").text("$" + max_price);
  showItemsFiltered();
});

let category_items = [
  {
    id: 1,
    category_id: 8,
    price: 111000,
    title: "15.6' НОУТБУК DREAM MACHINES RG3050-15RU20",
    thumbnail:
      "img/dream-machine-laptop.png",
    description: "• ГАРАНТИЯ: 1 ГОД <br> • ТИП МАТРИЦЫ: IPS <br>• ПРОЦЕССОР: INTEL COTE I5 11400H <br>• ВИДЕОАДАПТЕР GEFORCE RTX 3050 4GB    <br>• ДИАГОНАЛЬ: 15,6' ДЮЙМОВ<br>• РАЗРЕШЕНИЕ: FULL HD [1920X1080]    <br>• RAM: 16GB SO-DIMM DDR4"
  },
  {
    id: 2,
    category_id: 8,
    price: 80000,
    title: "15.6' НОУТБУК ASUS TUF GAMING FX506LH-HN004",
    thumbnail:
      "img/tug-gaming.png",
      description: "• • ГАРАНТИЯ: 1 ГОД <br> • ТИП МАТРИЦЫ: IPS<br>• ПРОЦЕССОР: INTEL COTE I5 10300H<br>• ВИДЕОАДАПТЕР GEFORCE GTX 1650 4GB<br>• ДИАГОНАЛЬ: 15,6' ДЮЙМОВ<br>• РАЗРЕШЕНИЕ: FULL HD [1920X1080]<br>• RAM: 8GB SO-DIMM DDR4"
  },
  {
    id: 3,
    category_id: 8,
    price: 89000,
    title: "17.3' НОУТБУК MSI GF75 10UC-048XRU",
    thumbnail:
      "img/msi-laptop.png",
      description: "• ГАРАНТИЯ: 1 ГОД <br> • ТИП МАТРИЦЫ: IPS <br> • ПРОЦЕССОР: INTEL COTE I5 10500H <br> • ВИДЕОАДАПТЕР GEFORCE RTX a 4GB <br> • ДИАГОНАЛЬ: 17,3' ДЮЙМОВ<br> • РАЗРЕШЕНИЕ: FULL HD [1920X1080]<br> • RAM: 8GB SO-DIMM DDR4"
  }
];

function showAllItems() {
  //Default grid to show all items on page load in
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
  $("#display-items-div").append(item_content); //Display in grid
}
}

function showItemsFiltered() {
  //Default grid to show all items on page load in
  $("#display-items-div").empty();
  for (let i = 0; i < category_items.length; i++) {
    //Go through the items but only show items that have size from show_sizes_array
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
