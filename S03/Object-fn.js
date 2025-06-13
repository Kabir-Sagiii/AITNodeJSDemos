var obj = {
  id: 101,
  name: "aish",
  isPlaced: true,

  display: function f1(x) {
    console.log("f1 is called", x);
  },

  changeName: function (x, y) {
    console.log("Name Changed");
    return x + y;
  },

  changePlacementStatus: () => {
    console.log("status changed");
  },
};

obj.display(101010);

obj["changePlacementStatus"]();
