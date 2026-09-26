function selectRestaurant(restaurantName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Selected restaurant: ${restaurantName}`);
      resolve({ name: restaurantName });
    }, 1000);
  });
}

function selectFood(restaurant, foodName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Selected ${foodName} from ${restaurant.name}`);
      resolve({ restaurant, food: foodName });
    }, 1000);
  });
}

function placeOrder(selection) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'Order placed successfully.',
        restaurant: selection.restaurant.name,
        food: selection.food
      });
    }, 1000);
  });
}

selectRestaurant('Spice Garden')
  .then((restaurant) => selectFood(restaurant, 'Paneer Tikka'))
  .then((selection) => placeOrder(selection))
  .then((order) => console.log(order))
  .catch((error) => console.error('Could not place the order:', error));