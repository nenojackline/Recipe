(function(){
    //variable
    let section = document.getElementById("recipe");
    let search = document.querySelector("form");
    //events
    window.addEventListener('DOMContentLoaded', () => {
    //document.querySelector("#demo")
    console.log("connected");
   
    //switch pages when nav links are clicked
    [...document.querySelectorAll(".control")].forEach(link => {
    console.log(link)
    link.addEventListener('click', function(e) {
    e.preventDefault(); //prevent default behaviour of browser
   
    console.log("clicked")
    document.querySelector(".active-btn").classList.remove("active-btn");
    this.classList.add("active-btn");
   
    console.log(link.dataset.id)
    //check data id and change styles
    //display home page
    if (link.dataset.id === 'home'){
    document.querySelector(".home").style.display = "grid";
    document.querySelector(".recipes").style.display = "none";
    document.querySelector(".contact").style.display = "none";
    document.querySelector(".recipe-title").style.display = "none";
   
    }
   
    //display recipe page
    if (link.dataset.id === 'recipe'){
    document.querySelector(".recipes").style.display = "grid";
    document.querySelector(".recipe-title").style.display = "block";
    document.querySelector(".home").style.display = "none";
    document.querySelector(".contact").style.display = "none";
   
    fetchData(); //start fetch data
   
    //handle click for read more button
    document.getElementById('read-btn').addEventListener('click', () => {
    console.log("read more btn");
    });
   
    }
   
    //display contact page
    if (link.dataset.id === 'contact'){
    document.querySelector(".contact").style.display = "flex";
    document.querySelector(".recipes").style.display = "none";
    document.querySelector(".home").style.display = "none";
    document.querySelector(".recipe-title").style.display = "none";
    } 
   
    });
   
    //switch to page when explore button clicked
    /* document.getElementById("explore").addEventListener('click', () => {
    console.log('explore button')
    document.querySelector(".home").style.display = "none";
    document.querySelector(".recipes").style.display = "grid";
    document.querySelector(".contact").style.display = "none";
    })*/
    });
    })
    //method
    
    //fetch data --api
    function fetchData(){
    fetch (`https://api.json-generator.com/templates/dkGUFM9yecgO/data?access_token=8ziyqp1pbfk3vid625oroxgvsh5yzzb7m9lqcadk`)
    .then(response => response.json())
    .then(data => {
    //console.log(data);
    data.forEach( elem => {
    console.log(elem.recipes);
    recipes(elem.recipes)
    });
    
    })
    .catch(err => console.error(err));
    }
   
   
    //function to handle search
    const handleSearch = (e) => {
    e.preventDefault();
   
    search.addEventListener('submit', () => {
    e.preventDefault();
   
    //logic to search from api
    });
   
    }
   
    //function to load detailed recipe
    function detailed_recipe(recipes) {
    let output = ''
   
    //LOGIC
   
    return
    }
    //create recipe component and update on dom
    function recipes(recipes) {
    let output = '';
    //map the output
    recipes.map(recipe => {
    output += `
    
    <div class = "recipe">
    <img src = ${recipe.img} alt="recipe" width="300px">
    <h5> ${recipe.title} </h5>
    <p> ${recipe.desc} </p>
    <div class =ctrls>
    <i class="fal fa-heart"> ${recipe.likes} likes</i>
    <i class="fal fa-comment"> ${recipe.comment} comments </i>
    <input type="button" value ="read more" id="read-btn" />
    </div>
    </div>
    
    `;
   
    });
   
    //update dom output
    return section.innerHTML = output;
    }
    
   })();