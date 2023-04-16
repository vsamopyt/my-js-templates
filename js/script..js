
//  to get value of variable in CSS --container-width
let varWidth= getComputedStyle(document.documentElement)
.getPropertyValue('--container-width')

//  to get array of buttons Back 
let arrayBack =document.querySelectorAll(".back")

// setting block read -rules on click
document.querySelector(".read-rules").onclick = function () {
    document.querySelector(".main").style.marginLeft= `-${parseInt(varWidth)}px`;
}

// going back to the form
for (let i =0; i<arrayBack.length; i++)  {
    arrayBack[i].onclick = function () {
        document.querySelector(".main").style.marginLeft= 0;
    }
}

// document.querySelector(".back").onclick = function () {
//     document.querySelector(".main").style.marginLeft= `-${parseInt(varWidth)}px`;
// }