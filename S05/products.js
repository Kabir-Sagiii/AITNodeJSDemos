var obj = {
  pname: "Iphone 16",
  price: 80000,
  rating: 4.5,
  changePrice: function (newPrice) {
    this.price = newPrice;
    console.log(this);
  },
};

module.exports = obj;
