

class Order {
  constructor(user, totalPrice, products) {
    this.id = 0;
    this.TotalPrice = totalPrice;
    this.User = user;
    this.OrderItems = products;
  }
}