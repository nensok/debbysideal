import React, {useState} from 'react';
import {Link } from "react-router-dom";
import Toast from 'react-bootstrap/Toast'
import Meals from './Meals'
import axios from 'axios';


const Search = () => {
    let [search, setSearch] = useState('');
    const [searchmeals, setSearchmeals] = useState([]);
    const [show, setShow] = useState(false);

    
   

       const getFood = (e) =>{
        e.preventDefault();
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          .then(result => setSearchmeals(result.data.meals), setTimeout(function(){  setShow(true) }, 3000))
          .catch((err)=>{
              console.log(err)
          }) 
        
    }
        
        
        return (
            <React.Fragment>
                <div aria-live="polite"
                    aria-atomic="true"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}>
                    <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide>
                        <Toast.Header>
                            <i className="fas fa-utensils mr-2" style={{color: 'black'}}></i>
                            <strong className="mr-auto">click below to see our featured meals</strong>
                        </Toast.Header>
                        <Toast.Body><Link to="/meal" className="btn btn-dark btn-sm">Featured Meals  <i className="fas fa-cheveron-right"></i></Link></Toast.Body>
                    </Toast>
                </div>
                
                <div className="card card-body mb-4 p-4 mt-5">
                    <h2 className="display-4 text-center">
                        <i className="fas fa-utensils" style={{color: 'teal'}}></i> Search for food 
                    </h2>
                    <p className="lead text-center"> Paradise on your Plate...</p>
                    <form onSubmit={getFood}>
                        <div className="form=group">
                            <input type="text" className="form-control mb-3" placeholder="Enter Food Name" onChange={(e)=>setSearch(e.target.value)}/>
                        </div>
                        <button className="btn btn-dark btn-block mb-5" type="submit">Search <i className="fas fa-search"></i></button>
                    </form>
                 
                </div>
                <div className="row">
                    {searchmeals.map((meal, i)=> <Meals key={i} meal={meal}/>)}
                 </div>
            </React.Fragment>
        );
     
}

export default Search;
