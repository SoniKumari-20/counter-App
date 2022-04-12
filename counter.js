let input = document.querySelector("#value");
let btn = document.querySelector("#increment");
let btn1 = document.querySelector("#decrement");
let counter = 0;
btn.addEventListener("click", function(){
    counter++;
    input.innerHTML = counter;
})
btn1.addEventListener("click", function(){
    counter--;
    input.innerHTML = counter;
})