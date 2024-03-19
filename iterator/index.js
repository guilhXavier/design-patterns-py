class RestaurantCollection {
  restaurants = [];

  constructor() {
    super();
  }

  getRestaurants() {
    return this.restaurants;
  }

  addRestaurant(restaurant) {
    this.restaurants.push(restaurant);
  }
}
