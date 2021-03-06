/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

    Global Array Object
*/

function updateInventory(inventory, deliveries) {
  deliveries.map(function(delivery) {
    var deliveryAmount = delivery[0];
    var deliveryName = delivery[1];

    for (var i = 0, len = inventory.length; i < len; i++) {
      var inventoryName = inventory[i][1];
      var isInventoried = deliveryName === inventoryName;
      var isAlphabeticalNext = inventoryName > deliveryName;

      if (isInventoried) {
        inventory[i][0] += deliveryAmount;
        return;
      }

      if (isAlphabeticalNext) {
        inventory.splice(i, 0, delivery);
        return;
      }
    }

    inventory.push(delivery);
  });

  return inventory;
}

/* TEST */
updateInventory(
  [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ]
);
// should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

updateInventory(
  [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
  []
); // should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

updateInventory(
  [],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ]
); // should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

updateInventory(
  [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
  [
    [1, "Hair Pin"],
    [1, "Half-Eaten Apple"],
    [1, "Bowling Ball"],
    [1, "Toothpaste"]
  ]
); // should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
