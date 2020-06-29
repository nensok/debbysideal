import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Meals from './Meals';

const Meal = () => {
   const [meals, setMeals] = useState([]);

      
                  
   
   useEffect(() => {
       const randomChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
       var char = randomChars[Math.floor(Math.random()*randomChars.length)]; //pluck a random char to genearate food
        
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`)
          .then(result => setMeals(result.data.meals))
          .catch((err)=>{
              console.log(err)
          })
      },[] );

      return(
          <React.Fragment>
             
             <h3 className="text-center mb-4">Featured Delicacies</h3>
             <div className="row">
                {meals.map((meal, i)=> <Meals key={i} meal={meal}/>)}
             </div>

          </React.Fragment>
        )
  }


export default Meal;
