import navbar from './component/navbar.js';
import {getData} from './food-app-scripts/showData.js';
let navBar = document.createElement('div');
navBar.innerHTML = navbar();    
document.body.prepend(navBar);
let data = getData(`https://www.themealdb.com/api/json/v1/1/random.php`)
let result = await data;
let dataDiv = document.getElementById('data');
let ingredientsDiv = document.querySelector('.ingredients');
let instructionsDiv = document.querySelector('.instructions')
console.log('from click:', result)


let displayData = () => {
    for(let data of result) {
        console.log('result:', result);
        
        let div = document.createElement('div');
        let prepare = document.createElement('div'); 
            let mealId = document.createElement('p');
            let mealArea = document.createElement('p');
            let mealCategory = document.createElement('p');
            let mealImage = document.createElement('img');
            let mealName = document.createElement('p');
          
            mealId.innerHTML = `Recipe Id : ${data.idMeal}`;
            mealArea.innerHTML = `Country : ${data.strArea}`;
            mealCategory.innerHTML = `Recipe Category : ${data.strCategory}`;
            mealImage.src = data.strMealThumb;
            mealName.innerHTML = `Recipe Name : <strong>${data.strMeal}<strong>`;
            div.append(mealImage,mealName,mealArea,mealCategory);
            div.classList.add('main')
            //Prepation data 

            let ingredients = document.createElement('div');
            let ingredients1 = document.createElement('p');
            ingredients1.classList.add('ingredients1')
            // let ingredients1 = document.createElement('p');
            ingredients1.innerHTML = `${data.strIngredient1 + ' - ' + data.strMeasure1} ,  
            ${data.strIngredient2 + ' - ' +  data.strMeasure2},
            ${data.strIngredient3 + ' - ' + data.strMeasure3},
            ${data.strIngredient4 + ' - ' + data.strMeasure4},
            ${data.strIngredient5 + ' - ' + data.strMeasure5},
            ${data.strIngredient6 + ' - ' + data.strMeasure6},
            ${data.strIngredient7 + ' - ' + data.strMeasure7},
            ${data.strIngredient8 + ' - ' + data.strMeasure8},
            ${data.strIngredient9 + ' - ' + data.strMeasure9},
            ${data.strIngredient10 + ' - ' + data.strMeasure10},
            ${data.strIngredient11 + ' - ' + data.strMeasure11},${data.strIngredient12 + ' - ' + data.strMeasure12},
            ${data.strIngredient13 + ' - ' + data.strMeasure13},
            ${data.strIngredient14 + ' - ' + data.strMeasure14},
            ${data.strIngredient15 + ' - ' + data.strMeasure15},
            ${data.strIngredient16 + ' - ' + data.strMeasure16},${data.strIngredient17 + ' - ' + data.strMeasure17},
            ${data.strIngredient18 + ' - ' + data.strMeasure18},
            ${data.strIngredient19 + ' - ' + data.strMeasure19},
            ${data.strIngredient20 + ' - ' + data.strMeasure20}
            
            `;

            ingredients.append(ingredients1);
            let instructions = document.createElement('div');
            let instructionsData = document.createElement('p');

            instructionsData.innerHTML = `${data.strInstructions}`

            instructionsDiv.append(instructionsData);

            

            dataDiv.append(div);
            ingredientsDiv.append(ingredients)






    }
}

displayData()

// let append = appendData(result,dataDiv);

