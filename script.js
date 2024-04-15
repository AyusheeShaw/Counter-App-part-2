const plus = document.querySelector(".add");
const sub = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const count = document.querySelector(".number");
const increment = document.querySelector("#increment");
let temp = 0;
plus.addEventListener("click", (e) => {
    temp += parseInt(increment.value);
    count.innerText = temp;
    // console.log(count);
});
sub.addEventListener("click", (e) => {
    // console.log(increment.value);
    temp -= parseInt(increment.value);
    count.innerText = temp;
    // console.log(count);
});
reset.addEventListener("click", (e) => {
    temp = 0;
    increment.value = 1;
    count.innerText = temp;
    // console.log(count);
});
