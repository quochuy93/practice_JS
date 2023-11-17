// 1. Go vao o input va hien thi ket qua duoi the p ngay ben duoi (input)
var input = document.getElementById("myText");
input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    var x = input.value;
    document.querySelector(".wrap .p1").innerHTML += x + "<br>";
  }
});

// 2. Khi change gia tri duoc chon trong radio thi thay doi gia tri hien thi o the p ben duoi
var choose = document.getElementById("register");
choose.addEventListener("change",(event2) =>{
  document.querySelector(".p2").innerHTML += event2.target.value + "<br>";
})


// 3. Khi an nut hien thi thong tin: ten nut, ma nut,co an ctrl ko
document.addEventListener("keydown", function(event3){
  document.querySelector(".keyInfor p:first-child span").innerHTML = event3.key;
  document.querySelector(".keyCode span").innerHTML = event3.keyCode;
  document.querySelector(".keyInfor p:last-child span").innerHTML = event3.ctrlKey;
})