let getData = async (url) => {
    let response = await fetch(url);
    let result = await response.json();
    // console.log('result:', result)
    return result.meals;
}



let appendData = (data,place) => {
    
    place.innerHTML = '';
    for(let el of data) {
        let div = document.createElement('div')
            let mealId = document.createElement('p');
            let mealArea = document.createElement('p');
            let mealCategory = document.createElement('p');
            let mealImage = document.createElement('img');
            let mealName = document.createElement('p');
          
            mealId.innerHTML = `Recipe Id : ${el.idMeal}`;
            mealArea.innerHTML = `Country : ${el.strArea}`;
            mealCategory.innerHTML = `Recipe Category : ${el.strCategory}`;
            mealImage.src = el.strMealThumb;
            mealName = `Recipe Name : ${el.strMeal}`;
            div.append(mealImage,mealName,mealArea,mealCategory,mealId);
            place.append(div);

            // div.addEventListener('click',() => {
            //     console.log("clicked");
            //     console.log(el.strMeal);
            // })


    };
    // for(let mealData of data) {

    // }
}

export {getData,appendData}