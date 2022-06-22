function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

(function(){
    //variable
     let demo = document.getElementById("demo");
    //events
    window.addEventListener('DOMContentLoaded', () => {
        //document.querySelector("#demo")
        console.log("connected");
        fetchData(); //start fetch data
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
    //create recipe component and update on dom
    function recipes(recipes) {
        let output = '';
        //map the output
        recipes.map(recipe => {
            output += `
                    
                    <div class  = "recipe">
                        <img src = ${recipe.img} alt="recipe" width="300px">
                        <h5> ${recipe.title} </h5>
                        <p> ${recipe.desc} </p>
                        <div class =ctrls>
                            <span class = "like" id = "like"> ${recipe.likes}:likes </span>
                            <i class="fal fa-heart"> ${recipe.likes} </i>
                            <i class="fal fa-comment"> ${recipe.comment} </i>
                            <input type="button" value ="read more" id="read-btn" />
                        </div>
                    </div>
                   
                `;

        });
        //update dom output
       return demo.innerHTML = output;
    }
    
})();