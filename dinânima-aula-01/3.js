const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
    })
    
    .then((data) => {
		return console.log([
			data.meals[0].strMeal,
			data.meals[1].strMeal,
			data.meals[2].strMeal,
			data.meals[3].strMeal,
			data.meals[4].strMeal,
			data.meals[5].strMeal,
			data.meals[6].strMeal,
			data.meals[7].strMeal,
			data.meals[8].strMeal,
			data.meals[9].strMeal,
		]);
	});