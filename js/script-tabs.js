
let tabsHeaderAr = document.querySelectorAll(".tab-header");
let tabsTextAr = document.querySelectorAll(".tab-text");

console.log(tabsHeaderAr)

for (let i=0; i<tabsHeaderAr.length; i++) {
    // tabsHeaderAr[i].onclick= (event) =>{ console.log(event)}
    // let atrTabsHeader=tabsHeaderAr[i].getAttribute("data-tab")
    //  tabsHeaderAr[i].onclick= (event) =>{console.log(tabsHeaderAr[i].getAttribute("data-tab"))}
     tabsHeaderAr[i].onclick= (event) =>{
        tabsTextAr.forEach( value => value.style.display="none")
        tabsTextAr[i].style.display="block"}
}
