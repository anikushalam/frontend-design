const line = document.querySelector(".hr-span");
const list = document.querySelector(".items");

line.addEventListener("click", function () {
  list.classList.toggle("items-list");
});
