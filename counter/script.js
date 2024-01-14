

// const mainTitle = document.querySelector('#label');
// let curV = 0;
// //alert("hello")
// const btnDecrement = document.querySelector('#decrement');
// const btnIncrement = document.querySelector('#increment');
// const btnReset = document.querySelector('#reset');
// //alert("hello")

// btnIncrement.addEventListener('click', () => {
//     //alert("hello")
//     curV ++;
//     //alert(curV)
//     mainTitle.textContent = curV;
// });

// btnDecrement.addEventListener('click', () => {
//     curV --;
//     //alert(curV)
//     mainTitle.textContent = curV;
// });

// btnReset.addEventListener('click', () => {
//     curV = 0;
//     alert(curV)
//     mainTitle.textContent = curV;
// });

let count = 0;

document.getElementById("increment").onclick = function(){
    count +=1;
    document.getElementById("label").innerHTML = count;
}

document.getElementById("decrement").onclick = function(){
    count -=1;
    document.getElementById("label").innerHTML = count;
}
document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("label").innerHTML = count;
}