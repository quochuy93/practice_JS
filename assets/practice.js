function getList() {
  var num = prompt("Enter number of fruit: ");
  var list = [];
  while (num > 0) {
    list.push(prompt(`Enter the name of fruit ${num}: `));
    num--;
  }
  return list;
}

function save(fruit) {
  localStorage.setItem("fruit", JSON.stringify(fruit));
}

function get() {
  return JSON.parse(localStorage.getItem("fruit"));
}

// + Thêm 1 quả

function add(fruit) {
  fruit.push(prompt("Please enter the name of fruit: "));
  console.log(`New list after adding: ${fruit}`);
  return fruit;
}

// + Xóa 1 quả bất kỳ
function remove(fruit) {
  var check = false;
  do {
    var name = prompt("Enter name of fruit to remove: ");
    var x = fruit.indexOf(name);
    if (x > -1) {
      fruit.splice(fruit.indexOf(name), 1);
      console.log(`New list after removing: ${fruit}`);
      check = true;
    } else {
      console.log(`There is no ${name} in the list!`);
      alert("Please enter the correct fruit to delete!");
    }
  } while (!check);
  return fruit;
}
// + Thay thế 1 quả bất kỳ
function replace(fruit) {
  var originalFruit = prompt("Enter name of fruit to replace: ");
  var toReplace = prompt("Enter name of replace fruit: ");
  fruit[fruit.indexOf(originalFruit)] = toReplace;
  console.log(`New list after replacing: ${fruit}`);
  return fruit;
}
// + Tìm quả ở vị trí đầu và cuổi
function findStartEnd(fruit) {
  var start = fruit[0];
  const x = fruit.length;
  var end = fruit[x - 1];
  console.log(`Name the first fruit: ${start}`);
  console.log(`Name of the last fruit: ${end}`);
  return fruit;
}
// + Tìm quả ở vị trí giữa
function findMiddle(fruit) {
  const x = fruit.length;
  if (x % 2 == 0) {
    console.log("There is no middle fruit!");
  } else {
    var middle = fruit[(x - (x % 2)) / 2];
    console.log(`The middle fruit is: ${middle}`);
  }
  return fruit;
}
// + Tìm các loại quả chứa chữ "a"
function findFruitA(fruit) {
  var newList = [];
  for (var i in fruit) {
    var index = fruit[i].indexOf("a");
    if (index > -1) {
      newList.push(fruit[i]);
    }
  }
  var isExist = newList.length;
  if (isExist > 0) {
    console.log(`Fruit have letter a is: ${newList}`);
  } else {
    console.log("There is no fruit having letter a");
  }
  return fruit;
}
// + Kiểm tra xem trong mảng có Apple k0
function isApple(fruit) {
  var x = fruit.indexOf("apple");
  var y = fruit.indexOf("Apple");
  if (x > -1 || y > -1) {
    console.log("The list has apple!");
  } else {
    console.log("List does not have apple!");
  }
  return fruit;
}
// + Gộp thêm 2 loại quả bất kỳ ở mảng khác vào mảng fruits
function combineLists(fruit) {
  var secondFruit = getList();
  var finalFruit = fruit.concat(secondFruit);
  console.log(`New list after combining: ${finalFruit}`);
  return finalFruit;
}
// + Sắp xếp theo A-Z
function sortAZ(fruit) {
  var sortedAZ = fruit.sort();
  console.log(`The order from small to big: ${sortedAZ}`);
  return sortedAZ;
}
// + Sắp xếp theo Z-A
function sortZA(fruit) {
  fruit.sort((a, b) => (a > b ? -1 : 1));
  console.log(`The order from big to small: ${fruit}`);
  return fruit;
}
// Pick the action to run
function action(fruit) {
  var check = false;
  // alert("Choose the action to run:");
  // alert(
  //   "Choose the action to run:.\n1 for add.\n2 for remove.\n3 for replace.\n4 for find start and ending fruit.\n5 for find middle fruit.\n6 for find fruit with letter A.\n7 for checking whether Apple is exist.\n8 for combine a new list.\n9 for sort from small to big.\n10 for sort from big to small.\n0 for end the action"
  // );
  do {
    const x = prompt("Choose the action to run:.\n1 for add.\n2 for remove.\n3 for replace.\n4 for find start and ending fruit.\n5 for find middle fruit.\n6 for find fruit with letter A.\n7 for checking whether Apple is exist.\n8 for combine a new list.\n9 for sort from small to big.\n10 for sort from big to small.\n0 for end the action ");
    if (x == 1) {
      fruit = add(fruit);
    } else if (x == 2) {
      fruit = remove(fruit);
    } else if (x == 3) {
      fruit = replace(fruit);
    } else if (x == 4) {
      fruit = findStartEnd(fruit);
    } else if (x == 5) {
      fruit = findMiddle(fruit);
    } else if (x == 6) {
      fruit = findFruitA(fruit);
    } else if (x == 7) {
      fruit = isApple(fruit);
    } else if (x == 8) {
      fruit = combineLists(fruit);
    } else if (x == 9) {
      fruit = sortAZ(fruit);
    } else if (x == 10) {
      fruit = sortZA(fruit);
    } else if (x == 0) {
      check = true;
    }
  } while (!check);
  return fruit;
}

const fruit = getList();
console.log(fruit);
save(fruit);

var arr = get();
arr = action(arr);
console.log(arr);
