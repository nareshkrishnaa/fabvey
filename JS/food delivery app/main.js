// Sample data structure
let restaurants = [
  {
    name: "Trattoria del Gusto",
    cusine: "Italian",
    menu: [
      { name: "Pizza Margherita", price: 12.99 },
      { name: "Pasta Carbonara", price: 14.99 },
    ],
  },
  {
    name: "Sakura Sushi",
    cusine: "Japanese",
    menu: [
      { name: "Sushi Combo", price: 19.99 },
      { name: "Tempura Udon", price: 15.99 },
    ],
  },

  {
    name: "Rasoi Ki Shaan",
    cusine: "North Indian",
    menu: [
      { name: "Butter Chicken", price: 14.99 },
      { name: "Paneer Tikka Masala", price: 13.99 },
      { name: "Tandoori Roti", price: 2.99 },
      { name: "Biryani", price: 16.99 },
    ]
  },

  {
    name: "Dragon Wok",
    cusine: "Chinese",
    menu: [
      { name: "General Tso's Chicken", price: 12.99 },
      { name: "Kung Pao Shrimp", price: 14.99 },
      { name: "Vegetable Lo Mein", price: 10.99 },
      { name: "Peking Duck", price: 19.99 },
    ]
  },

  {
    name: "Aruvi Rusi",
    cusine: "South Indian",
    menu: [
      { name: "Dosa", price: 9.99 },
      { name: "Idli Sambar", price: 7.99 },
      { name: "Poori", price: 12.99 },
      { name: "Pongal", price: 2.99 },
    ]
  },

  {
    name: "GreenLeaf Eats",
    cusine: "Vegan",
    menu: [
      { name: "Vegan Burger", price: 11.99 },
      { name: "Quinoa Salad", price: 9.99 },
      { name: "Roasted Vegetable Wraps", price: 10.99 },
      { name: "Vegan Chocolate Cake", price: 7.99 },
    ]
  }
  // Add more restaurant objects here
];

// Filter restaurants by cusine
function filterRestaurantsBycusine(restaurants, cuisineType) {
  return restaurants.filter((restaurant) => restaurant.cusine === cuisineType);
}

// Filter menu items by name
function filterMenuItemsByName(restaurant, itemName) {
  return restaurant.menu.filter((item) => item.name.includes(itemName));
}

// Example usage:
const italianRestaurants = filterRestaurantsBycusine(restaurants, "Italian");
console.log("Italian Restaurants:", italianRestaurants);

const pizzaItems = filterMenuItemsByName(italianRestaurants[0], "Pizza");
console.log("Pizza Items:", pizzaItems);

let menuNames = [];

for (let i = 0; i < restaurants.length; i++) {
  const restaurant = restaurants[i];
  const menu = restaurant.menu;

  for (let j = 0; j < menu.length; j++) {
    menuNames.push(menu[j].name);
  }
}

console.log(menuNames);
