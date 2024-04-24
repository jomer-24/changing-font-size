let body = document.querySelector("body");
let container = document.querySelector(".container");
let paraMsg = document.getElementById("demo");
let btn = document.getElementById("btn")
let isDarkMode = false;
let fontValue = 20;

// btn.addEventListener("click", function(){
//     if(isDarkMode){
//         // ligth mode
//         body.style.backgroundColor = "white";
//         container.style.borderColor = "black";
//         paraMsg.innerHTML = "Light mode";
//         paraMsg.style.color = "black";
//         btn.style.borderColor = "black";
//     }else{
//         // dark mode
//         body.style.backgroundColor = "black";
//         container.style.borderColor = "white";
//         paraMsg.innerHTML = "Dark mode";
//         paraMsg.style.color = "white";
//         btn.style.borderColor = "white";
//     }
//     isDarkMode = !isDarkMode
//     body.style.transition = "all .8s ease"
// });


btn.addEventListener("click", function(){
    paraMsg.style.fontSize = fontValue + "px"
    fontValue += 20;
    if(fontValue > 100){
        paraMsg.innerHTML = "Warning level";
        paraMsg.style.color = "orange";
    };

    if(fontValue >= 200){
        paraMsg.innerHTML = "Danger level";
        paraMsg.style.color = "red";
        fontValue -= 20;
        btn.innerHTML = "Danger";
        btn.style.color = "white";
        btn.style.backgroundColor = "red";
    };
    
});