console.log(document.getElementsByTagName("div"));
console.log(document.querySelectorAll(".buttons"));

var divList = Array.prototype.slice.call(document.getElementsByTagName("div"));
let unDiv = 0;
divList.forEach((element) => {
  if (element.classList == "buttons" && unDiv == 0) {
    console.log(element);
    unDiv++;
  }
});

divList.forEach((element) => {
  if (element.classList == "buttons") {
    console.log(element);
  }
});
