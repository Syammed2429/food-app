let btn = document.querySelector('.btn')
let input = document.querySelector('input');
// console.log('input:', input)
import navbar from './component/navbar.js';
import {getData, appendData} from './food-app-scripts/showData.js';
let div = document.createElement("div");
let header = document.querySelector(".header");
div.innerHTML = navbar();
header.prepend(div)

let main = () => {
let input = document.querySelector('input').value;
let dataDiv = document.getElementById('data');
console.log('input:', input)
if(!input) {
    dataDiv.innerHTML = ''; 
} else {
    getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`).then((response) => {
        if(response == undefined) {
            alert("Recipe not found") 
            return false;
        }
    appendData(response,dataDiv);
    console.log('response:', response)
    // searchMeal(response);
});

}
}

let timerId;
input.addEventListener('input',() => {
let input = document.querySelector('input').value;
if(input.length < 3) {
    return false
}

if(timerId) {
    clearTimeout(timerId);
}
timerId = setTimeout(() => {
    main()
},1000)

});
btn.addEventListener('click',main)


input.addEventListener('keypress',(e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        console.log("jab");
        main();
    }
})


