import restaurants from './restaurant';

const dollarSigns = '$$';
const deliveryTimeMax = '90';
const maxDistance = 10;
let result;
const hours: Number = new Date().getHours();


const priceBracket: Number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
  }

  if (restaurant.deliveryTimeMinutes > Number(deliveryTimeMax)) {
    return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
    return false;
  }

  if (hours >= Number(restaurant.openHour)) {
    return true;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
