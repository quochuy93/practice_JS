// BTVN: Array + Function

// // =============================================

function save(foods) {
    localStorage.setItem("foods", JSON.stringify(foods));
  }
  
  function get() {
    return JSON.parse(localStorage.getItem("foods"));
  }
  // 1. Sap xep tang dan va giam dan theo so luong ky tu
  function sortAZ(foods) {
    var food1 = foods.sort((a, b) => {
      var x = a.length;
      var y = b.length;
      if (x < y) {
        return -1;
      } else if (x > y) {
        return 1;
      } else {
        if (a < b) {
          return -1;
        } else {
          return 1;
        }
      }
    });
    alert(`The list with food from short to long is: ${food1}`);
    return foods;
  }
  
  function sortZA(foods) {
    var food1 = foods.sort((a, b) => {
      var x = a.length;
      var y = b.length;
      if (x > y) {
        return -1;
      } else if (x < y) {
        return 1;
      } else {
        if (a > b) {
          return -1;
        } else {
          return 1;
        }
      }
    });
    alert(`The list with food from long to short is: ${food1}`);
    return foods;
  }
  
  // 2. Bien doi mang sang dang: "Pizza" => "Pizza - 5"
  function modify(foods) {
    for (var i in foods) {
      var idxDash = foods[i].indexOf("-");
      if (idxDash > -1) {
        continue;
      } else {
        var x = foods[i].length;
        foods[i] = `${foods[i]} - ${x}`;
      }
    }
  
    alert(`The list with new format is: ${foods}`);
    return foods;
  }
  
  // // 3. Nhap vao cac mon ban thich: "Mi Tom, Keo bong"
  // // => Them cac mon tu format tren vao mang
  function add(foods) {
    var list = [];
    var num = prompt("Enter number of food to add: ");
    while (num > 0) {
      list.push(prompt(`Enter the name of food ${num}: `));
      num--;
    }
    for (var idx in list) {
      var x = list[idx].length;
      list[idx] = `${list[idx]} - ${x}`;
    }
  
    var finalFood = foods.concat(list);
    alert(`The new list of food is: ${finalFood}`);
    return finalFood;
  }
  
  // var finalFood = foods;
  
  // 4. Tao mot mang moi gom cac mon chua chu "a"
  function createAfood(foods) {
    var foodA = [];
    for (var i in foods) {
      var index1 = foods[i].indexOf("a");
      var index2 = foods[i].indexOf("A");
      if (index1 > -1 || index2 > -1) {
        foodA.push(foods[i]);
      }
    }
    if (foodA.length>0) {
      alert(`The list with food including letter A is: ${foodA}`);
    } else {
      alert('There is no food including letter A!');
    }
    return foods;
  }
  
  // 5. Tim nhung mon chua 5 ky tu
  function find5Food(foods) {
    var food5 = [];
    for (var i in foods) {
      var idxDash = foods[i].indexOf("-");
      if (idxDash > -1) {
        var index1 = foods[i].indexOf("5");
        if (index1 > -1) {
          food5.push(foods[i]);
        }
      } else {
        if (foods[i].length == 5) {
          food5.push(foods[i]);
        }
      }
    }
    if (food5.length>0) {
      alert(`The list of food with 5 letters is: ${food5}`);
    } else {
      alert('There is no food with 5 letters!');
    }
    return foods;
  }
  
  // Print the list of current foods:
  function currentFood(foods) {
    alert(`The list of current food is: ${foods}`);
    return foods;
  }
  
  // Pick the action to run
  function action(foods) {
    var check = false;
    do {
      const x = prompt(
        "Choose the action to run:.\n1 for sorting from short to long.\n2 for sorting from long to short.\n3 for modifying the list.\n4 for adding more food.\n5 for find food with letter A.\n6 for find food with 5 letters.\n7 for printing the current food.\n0 for end the action "
      );
      if (x == 1) {
        foods = sortAZ(foods);
      } else if (x == 2) {
        foods = sortZA(foods);
      } else if (x == 3) {
        foods = modify(foods);
      } else if (x == 4) {
        foods = add(foods);
      } else if (x == 5) {
        foods = createAfood(foods);
      } else if (x == 6) {
        foods = find5Food(foods);
      } else if (x == 6) {
        foods = find5Food(foods);
      } else if (x == 7) {
        foods = currentFood(foods);
      } else if (x == 0) {
        check = true;
      }
    } while (!check);
    return foods;
  }
  
  var foods = ["Pizza", "Pho Bo", "Ramen", "Sushi", "Banh My"];
  save(foods);
  var list1 = get();
  alert(`The original list with food is: ${list1}`);
  list1 = action(list1);
  save(list1);
  console.log(list1);
  