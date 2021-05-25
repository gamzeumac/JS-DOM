/* const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
 */
const userList = document.querySelector(".name-list ");

const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function () {
    //Create an li
const newLi = document.createElement('LI');
const liContent = document.createTextNode(listInput.value);

    //Add the Input Value
    newLi.appendChild(liContent);
    //Attaching the li to the user list
     userList.appendChild(newLi); 

});


/* for(user of userList){
    user.addEventListener('click', function() {
       console.log(this); 
    })
}

for(user of userList){
    user.addEventListener('click', function() {
      this.style.color = 'red'; 
    })
} */


/* console.log(userList); */

/* text.classList.add("change"); */
/* 
text.classList.remove("change"); */

/* changeColor.addEventListener('click', function () {
    text.classList.add("change")
})
 */
/* changeColor.addEventListener('click', function () {
    text.classList.toggle("change")
}) */