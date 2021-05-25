const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

const userList = document.querySelectorAll(".name-list li")

console.log(userList);

/* text.classList.add("change"); */

text.classList.remove("change");

/* changeColor.addEventListener('click', function () {
    text.classList.add("change")
})
 */
changeColor.addEventListener('click', function () {
    text.classList.toggle("change")
})