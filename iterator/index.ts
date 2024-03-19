interface Iterator<T> {
  next: () => T;
  hasNext: boolean;
  count: number;
}

class Restaurant {
  private _name: string;
  private _rating: number;
  private _distance: number;

  constructor(name: string, rating: number, distance: number) {
    this._name = name;
    this._rating = rating;
    this._distance = distance;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(rating: number) {
    this._rating = rating;
  }

  get distance(): number {
    return this._distance;
  }

  set distance(distance: number) {
    this._distance = distance;
  }
}

class RestaurantCollection {
  private restaurants: Restaurant[] = [];

  constructor() {
    super();
  }

  getRestaurants() {
    return this.restaurants;
  }

  getCount() {
    return this.restaurants.length;
  }

  addRestaurant(restaurant) {
    this.restaurants.push(restaurant);
  }
}

class HighestRatingRestaurantIterator implements Iterator<Restaurant> {
  private _collection: RestaurantCollection;
  private _position: number = 0;

  constructor(collection: RestaurantCollection) {
    this._collection = collection.sort((a, b) => a.rating - b.rating);
  }

  next() {
    const item = this._collection[this._position + 1];
    this._position = this._positon + 1;
    return item;
  }

  hasNext() {
    return this._position <= this._collection.getCount();
  }

  count() {
    return this._collection.getCount();
  }
}
