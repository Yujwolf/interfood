window.onload = function () {
  let button = document.getElementById("burger");
  console.log(button);
  button.onclick = () => {
    document.getElementById("menu").classList.toggle("opened");
  };
  let closeButton = document.getElementById("closeButton");
  closeButton.onclick = () => {
    menu.classList.remove("opened");
  };
};

function showSum() {
  var sumButton = document.getElementById("sum-button");
  sumButton.style.display = "flex";
}

function closeSum() {
  var closesum = document.querySelector(".sum-button");
  closesum.style.display = "none";
}

function productNum() {
  var productnum = 1;
}
