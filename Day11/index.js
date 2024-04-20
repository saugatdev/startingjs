let result = document.getElementById("recipe");

let searchbtn = document.getElementById("search-btn");

let url ="www.themealdb.com/api/json/v1/1/random.php"



const getRecipe=()=>{

    const url="www.themealdb.com/api/json/v1/1/random.php"
    const response =fetch(url);
    console.log(response);
}


function(event){
    getRecipe(search.value)
    event.preventDefault();
    }


