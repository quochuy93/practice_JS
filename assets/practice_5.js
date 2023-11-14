// 1. Go vao o input va hien thi ket qua duoi the p ngay ben duoi (input)
// var input = prompt('Please enter a word for p:')
// document.getElementsByClassName("p1")[0].innerHTML = document.getElementById("myText").value
function getVal() {
    var val =document.getElementById("myText").value;
    document.getElementsByClassName("p1")[0].innerHTML = val;
}
// 2. Khi change gia tri duoc chon trong radio thi thay doi gia tri hien thi o the p ben duoi
// document.getElementsByClassName("p2")[0].innerHTML =  document.getElementsByName("value").value;

var value2 = document.getElementsByName('value');

for (var i = 0, length = value2.length; i < length; i++) {
  if (value2[i].checked) {
    document.getElementsByClassName("p2")[0].innerHTML = value2[i].value;
    break;
  }
}

// 3. Khi an nut hien thi thong tin: ten nut, ma nut,co an ctrl ko

    document.querySelector(".btn").onclick = function() {
        document.getElementsByClassName("p3")[0].innerHTML = document.querySelector(".btn").innerHTML;
        document.getElementsByClassName("p4")[0].innerHTML = document.querySelector(".btn").id;

    }

