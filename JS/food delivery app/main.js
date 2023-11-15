// Sample data structure
let restaurants = [
  {
    name: "Trattoria del Gusto",
    id: "res1",
    cusine: "Italian",
    menu: [
      {
        name: "Pizza Margherita",
        price: 12.99,
        url: "./images/Pizza Margarita.jpg",
      },
      {
        name: "Pasta Carbonara",
        price: 14.99,
        url: "./images/Pasta Carbonara.jpg",
      },
    ],
  },
  {
    name: "Sakura Sushi",
    id: "res2",
    cusine: "Japanese",
    menu: [
      { name: "Sushi Combo", price: 19.99, url: "./images/Sushi Combo.jpg" },
      { name: "Tempura Udon", price: 15.99, url: "./images/Tempura Udon.jpg" },
    ],
  },

  {
    name: "Rasoi Ki Shaan",
    id: "res3",
    cusine: "North-Indian",
    menu: [
      {
        name: "Butter Chicken",
        price: 14.99,
        url: "./images/Butter Chicken.jpg",
      },
      {
        name: "Paneer Tikka Masala",
        price: 13.99,
        url: "./images/Paneer Tikka Masala.jpg",
      },
      { name: "Tandoori Roti", price: 2.99, url: "./images/Tandoori Roti.jpg" },
      { name: "Biryani", price: 16.99, url: "./images/Biryani.jpg" },
    ],
  },

  {
    name: "Dragon Wok",
    id: "res4",
    cusine: "Chinese",
    menu: [
      {
        name: "General Tso Chicken",
        price: 12.99,
        url: "./images/General Tso's Chicken.jpg",
      },
      {
        name: "Kung Pao Shrimp",
        price: 14.99,
        url: "./images/Kung Pao Shrimp.jpg",
      },
      {
        name: "Vegetable Lo Mein",
        price: 10.99,
        url: "./images/Vegetable Lo Mein.jpg",
      },
      { name: "Peking Duck", price: 19.99, url: "./images/Peking Duck.jpg" },
    ],
  },

  {
    name: "Aruvi Rusi",
    id: "res5",
    cusine: "South-Indian",
    menu: [
      { name: "Dosa", price: 9.99, url: "./images/Dosa.jpg" },
      { name: "Idli", price: 7.99, url: "./images/Idli.jpg" },
      { name: "Poori", price: 12.99, url: "./images/Poori.jpg" },
      { name: "Pongal", price: 2.99, url: "./images/Pongal.jpg" },
    ],
  },

  {
    name: "GreenLeaf Eats",
    id: "res6",
    cusine: "Vegan",
    menu: [
      { name: "Vegan Burger", price: 11.99, url: "./images/Vegan Burger.jpg" },
      { name: "Quinoa Salad", price: 9.99, url: "./images/Quinoa Salad.jpg" },
      {
        name: "Roasted Vegetable Wraps",
        price: 10.99,
        url: "./images/Roasted Vegetable Wraps.jpg",
      },
      {
        name: "Vegan Chocolate Cake",
        price: 7.99,
        url: "./images/Vegan Chocolate Cake.jpg",
      },
    ],
  },
  // Add more restaurant objects here
];
let restaurantList = [];
displayAllRestaurants();
function displayAllRestaurants() {
  for (let i = 0; i < restaurants.length; i++) {
    console.log(restaurants[i].name);
    restaurantList.push(restaurants[i].name);
    let data = {
      imageUrl: restaurants[i].menu[0].url,
      name: restaurants[i].name,
      cuisine: restaurants[i].cusine,
      id: restaurants[i].id,
    };
    createDynamicCard(data);
  }
}

function createDynamicCard(data) {
  const cardContainer = document.getElementById("card-container");

  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("my-5");
  card.style.width = "18rem";
  card.style.height = "32rem";

  card.innerHTML = `
    <img src="${data.imageUrl}" class="card-img-top card-img-top" alt="..." style="height:18rem">
    <div class="card-body d-flex flex-column mb-3 justify-content-around align-items-center">
      <h5 class="card-title h3">${data.name}</h5>
      <p class="card-text h4">${data.cuisine}</p>
      <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-primary btn-lg" id=${data.id} onclick="openRestaurant(this.id)" >Order</a>
    </div>
  `;

  cardContainer.appendChild(card);
}

function createDynamicMenuAtModal(food, restaurantName) {
  let modalbodycardcontainer = document.getElementById(
    "modal-body-card-container"
  );

  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "24rem";
  card.style.height = "34rem";

  card.innerHTML = `
    <img src="${food.url}" class="card-img-top card-img-top" alt="..." style="height:24rem">
    <div class="card-body d-flex flex-column mb-3 justify-content-around align-items-center">
      <h5 class="card-title h3">${food.name}</h5>
      <p class="card-text h3">$${food.price}</p>
      <div class="btn-group" role="group" aria-label="Add or Subtract">
            <button type="button"  class="btn btn-primary" id="subtract" restaurantName="${restaurantName}" foodName="${food.name}"  onclick="orderTakerMinus('${restaurantName}','${food.name}')">-</button>
            <button type="button" class="btn btn-primary" id="value${restaurantName}${food.name}" restaurantName="${restaurantName}" foodName="${food.name}">0</button>
            <button type="button" class="btn btn-primary" id="add" restaurantName="${restaurantName}" foodName="${food.name}" onclick="orderTakerPlus('${restaurantName}','${food.name}')">+</button>
        </div>
    </div>
  `;

  modalbodycardcontainer.appendChild(card);
}

function createDynamicMenu(data) {
  let modalbodycardcontainer = document.getElementById(
    "modal-body-card-container"
  );
  let modalheading = document.getElementById("staticBackdropLabel");

  modalbodycardcontainer.innerHTML = "";
  modalheading.innerHTML = data.name;

  let menu = data.menu;
  let restaurantName = data.name;
  console.log(menu);

  for (let i = 0; i < menu.length; i++) {
    let food = {
      name: menu[i].name,
      url: menu[i].url,
      price: menu[i].price,
    };

    createDynamicMenuAtModal(food, restaurantName);
  }
}

function getRestaurantbyId(id) {
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].id == id) {
      return restaurants[i];
    }
  }
}

function openRestaurant(id) {
  let restaurantSelected = getRestaurantbyId(id);

  let data = {
    name: restaurantSelected.name,
    menu: restaurantSelected.menu,
  };

  createDynamicMenu(data);
}

function filterRestaurants(id) {
  let cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].cusine == id) {
      let data = {
        imageUrl: restaurants[i].menu[0].url,
        name: restaurants[i].name,
        cuisine: restaurants[i].cusine,
        id: restaurants[i].id,
      };

      createDynamicCard(data);
    } else if (id == "remove-filters") {
      let cardContainer = document.getElementById("card-container");
      cardContainer.innerHTML = "";

      for (let i = 0; i < restaurants.length; i++) {
        let data = {
          imageUrl: restaurants[i].menu[0].url,
          name: restaurants[i].name,
          cuisine: restaurants[i].cusine,
          id: restaurants[i].id,
        };

        createDynamicCard(data);
      }
    }
  }
}

let restaurantOrder = [
  {
    name: "Trattoria del Gusto",
    id: "res1",
    menu: [
      {
        count: 0,
        name: "Pizza Margherita",
        price: 12.99,
        url: "./images/Pizza Margarita.jpg",
      },
      {
        count: 0,
        name: "Pasta Carbonara",
        price: 14.99,
        url: "./images/Pasta Carbonara.jpg",
      },
    ],
  },
  {
    name: "Sakura Sushi",
    id: "res2",
    menu: [
      {
        count: 0,
        name: "Sushi Combo",
        price: 19.99,
        url: "./images/Sushi Combo.jpg",
      },
      {
        count: 0,
        name: "Tempura Udon",
        price: 15.99,
        url: "./images/Tempura Udon.jpg",
      },
    ],
  },

  {
    name: "Rasoi Ki Shaan",
    id: "res3",
    menu: [
      {
        count: 0,
        name: "Butter Chicken",
        price: 14.99,
        url: "./images/Butter Chicken.jpg",
      },
      {
        count: 0,
        name: "Paneer Tikka Masala",
        price: 13.99,
        url: "./images/Paneer Tikka Masala.jpg",
      },
      {
        count: 0,
        name: "Tandoori Roti",
        price: 2.99,
        url: "./images/Tandoori Roti.jpg",
      },
      { count: 0, name: "Biryani", price: 16.99, url: "./images/Biryani.jpg" },
    ],
  },

  {
    name: "Dragon Wok",
    id: "res4",
    menu: [
      {
        count: 0,
        name: "General Tso Chicken",
        price: 12.99,
        url: "./images/General Tso's Chicken.jpg",
      },
      {
        count: 0,
        name: "Kung Pao Shrimp",
        price: 14.99,
        url: "./images/Kung Pao Shrimp.jpg",
      },
      {
        count: 0,
        name: "Vegetable Lo Mein",
        price: 10.99,
        url: "./images/Vegetable Lo Mein.jpg",
      },
      {
        count: 0,
        name: "Peking Duck",
        price: 19.99,
        url: "./images/Peking Duck.jpg",
      },
    ],
  },

  {
    name: "Aruvi Rusi",
    id: "res5",
    menu: [
      {
        count: 0,
        name: "Dosa",
        price: 9.99,
        url: "./images/Dosa.jpg",
      },
      {
        count: 0,
        name: "Idli",
        price: 7.99,
        url: "./images/Idli.jpg",
      },
      {
        count: 0,
        name: "Poori",
        price: 12.99,
        url: "./images/Poori.jpg",
      },
      {
        count: 0,
        name: "Pongal",
        price: 2.99,
        url: "./images/Pongal.jpg",
      },
    ],
  },

  {
    name: "GreenLeaf Eats",
    id: "res6",
    menu: [
      {
        count: 0,
        name: "Vegan Burger",
        price: 11.99,
        url: "./images/Vegan Burger.jpg",
      },
      {
        count: 0,
        name: "Quinoa Salad",
        price: 9.99,
        url: "./images/Quinoa Salad.jpg",
      },
      {
        count: 0,
        name: "Roasted Vegetable Wraps",
        price: 10.99,
        url: "./images/Roasted Vegetable Wraps.jpg",
      },
      {
        count: 0,
        name: "Vegan Chocolate Cake",
        price: 7.99,
        url: "./images/Vegan Chocolate Cake.jpg",
      },
    ],
  },
  // Add more restaurant objects here
];

function orderTakerPlus(restaurantName, foodName) {
  // console.log("plus" + restaurantName + " " + foodName);

  for (let i = 0; i < restaurantOrder.length; i++) {
    // console.log("entering first loop");
    if (restaurantOrder[i].name == restaurantName) {
      let menu = restaurantOrder[i].menu;
      // console.log("entering first if");

      for (let j = 0; j < menu.length; j++) {
        // console.log("entering second loop");

        if (menu[j].name == foodName) {
          // console.log("entering fsecond if");

          menu[j].count += 1;
          // console.log("valuing count : " + menu[j].count);
          let str = "value" + restaurantName + foodName;
          // console.log(str);
          let buttonElement = document.getElementById(str);
          buttonElement.innerHTML = menu[j].count;
          // console.log(buttonElement);
        }
      }
    }
  }
}

function orderTakerMinus(restaurantName, foodName) {
  // console.log("minus" + restaurantName + " " + foodName);
  for (let i = 0; i < restaurantOrder.length; i++) {
    // console.log("m entering first loop");

    if (restaurantOrder[i].name == restaurantName) {
      // console.log("m entering first if");

      let menu = restaurantOrder[i].menu;

      for (let j = 0; j < menu.length; j++) {
        // console.log("m entering second loop");

        if (menu[j].name == foodName && menu[j].count > 0) {
          // console.log("m entering second if");

          menu[j].count -= 1;
          let str = "value" + restaurantName + foodName;
          // console.log(str);
          let buttonElement = document.getElementById(str);
          buttonElement.innerHTML = menu[j].count;
          // console.log(buttonElement);
        }
      }
    }
  }
}

function checkout() {
  console.log("------------------");
  console.log("Check Out");
  console.log("------------------");
  console.log(
    "Restaurant Name =" +
      document.getElementById("staticBackdropLabel").innerHTML
  );
  console.log("food items ");

  function addRow(serialNo, item, quantity, rate, price) {
    let tableBody = document.getElementById("table-body");

    // Create a new row and cells
    let newRow = document.createElement("tr");
    let numberCell = document.createElement("th");
    let itemCell = document.createElement("td");
    let quantityCell = document.createElement("td");
    let rateCell = document.createElement("td");
    let priceCell = document.createElement("td");

    // Set the content of the cells (you can set your own values)
    numberCell.textContent = serialNo;
    itemCell.textContent = item;
    quantityCell.textContent = quantity;
    rateCell.textContent = rate;
    priceCell.textContent = price;

    // Append cells to the new row
    newRow.appendChild(numberCell);
    newRow.appendChild(itemCell);
    newRow.appendChild(quantityCell);
    newRow.appendChild(rateCell);
    newRow.appendChild(priceCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
  }

  for (let i = 0; i < restaurantOrder.length; i++) {
    let resName = document.getElementById("staticBackdropLabel").innerHTML;
    if (resName == restaurantOrder[i].name) {
      let menu = restaurantOrder[i].menu;
      let num = 0;
      let serialNo = 0;
      let totalBill = 0;
      for (let j = 0; j < menu.length; j++) {
        if (menu[j].count > 0) {
          serialNo++;
          num++;
          totalBill += menu[j].price * menu[j].count;
          console.log(
            num +
              "." +
              menu[j].name +
              " - " +
              " price - " +
              menu[j].price +
              " - " +
              menu[j].count +
              " Nos"
          );

          addRow(
            serialNo,
            menu[j].name,
            menu[j].count,
            menu[j].price,
            menu[j].price * menu[j].count
          );
        }
      }

      let tableBody = document.getElementById("table-body");
      let newRow = document.createElement("tr");
      let numberCell = document.createElement("th");
      let itemCell = document.createElement("td");
      let quantityCell = document.createElement("td");
      let rateCell = document.createElement("td");
      let priceCell = document.createElement("td");

      let boldText = document.createElement("strong");
      boldText.textContent = totalBill + " $";
      boldText.classList.add("font-weight-bold");

      numberCell.textContent = "";
      itemCell.textContent = "";
      quantityCell.textContent = "";
      rateCell.textContent = "Total";
      priceCell.appendChild(boldText);
      newRow.appendChild(numberCell);
      newRow.appendChild(itemCell);
      newRow.appendChild(quantityCell);
      newRow.appendChild(rateCell);
      newRow.appendChild(priceCell);
      tableBody.appendChild(newRow);
    }
  }
}

// // Filter restaurants by cusine
// function filterRestaurantsBycusine(restaurants, cuisineType) {
//   return restaurants.filter((restaurant) => restaurant.cusine === cuisineType);
// }

// // Filter menu items by name
// function filterMenuItemsByName(restaurant, itemName) {
//   return restaurant.menu.filter((item) => item.name.includes(itemName));
// }

// // Example usage:
// const italianRestaurants = filterRestaurantsBycusine(restaurants, "Italian");
// console.log("Italian Restaurants:", italianRestaurants);

// const pizzaItems = filterMenuItemsByName(italianRestaurants[0], "Pizza");
// console.log("Pizza Items:", pizzaItems);

// let menuNames = [];

// for (let i = 0; i < restaurants.length; i++) {
//   const restaurant = restaurants[i];
//   const menu = restaurant.menu;

//   for (let j = 0; j < menu.length; j++) {
//     menuNames.push(menu[j].name);
//   }
// }

// let list = document.getElementById("listofmenu");

// for (let i = 0; i < menuNames.length; i++) {
//   var newElement = document.createElement("p");
//   newElement.textContent = menuNames[i];
//   list.appendChild(newElement);
// }

// const menuNames2 = [
//   "Pizza Margherita",
//   "Pasta Carbonara",
//   "Sushi Combo",
//   "Tempura Udon",
//   "Butter Chicken",
//   "Paneer Tikka Masala",
//   "Tandoori Roti",
//   "Biryani",
//   "General Tso's Chicken",
//   "Kung Pao Shrimp",
//   "Vegetable Lo Mein",
//   "Peking Duck",
//   "Dosa",
//   "Idli Sambar",
//   "Poori",
//   "Pongal",
//   "Vegan Burger",
//   "Quinoa Salad",
//   "Roasted Vegetable Wraps",
//   "Vegan Chocolate Cake",
// ];

// // Create URLs in the specified format
// const imageUrls = menuNames2.map((name) => `./images/${name}.jpg`);

// console.log(imageUrls);

// let urls = document.getElementById("listofurls");

// for (let i = 0; i < imageUrls.length; i++) {
//   var newElement = document.createElement("p");
//   newElement.textContent = imageUrls[i];
//   urls.appendChild(newElement);
// }
