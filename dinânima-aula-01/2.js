const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"

fetch(url)
    .then((response) => {
        if (response.ok) 
        return response.json()
    })
    .then ((data) => {
        return console.log ({
            Nome: data.meals["0"].strMeal,
			ID: data.meals["0"].idMeal,
			Região: data.meals["0"].strArea,
			Ingredientes: `${data.meals["0"].strIngredient1}, 
                            ${data.meals["0"].strIngredient2}, 
                            ${data.meals["0"].strIngredient3}, 
                            ${data.meals["0"].strIngredient4}, 
                            ${data.meals["0"].strIngredient5}, 
                            ${data.meals["0"].strIngredient6}, 
                            ${data.meals["0"].strIngredient7}, 
                            ${data.meals["0"].strIngredient8}, 
                            ${data.meals["0"].strIngredient9}`,
			Instruções: data.meals["0"].strInstructions,

        })
    })