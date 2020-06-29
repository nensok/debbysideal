import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";

 const Meals = (props) => {
    const [isOpen, setIsOpen] = useState(false);


  const showModal = (e) => {
      e.preventDefault();
      
    setIsOpen(true);
   
  };

  const hideModal = () => {
    setIsOpen(false);
  };
 


    return (
        <React.Fragment>
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h6><i className="fas fa-utensils"></i> {props.meal.strMeal}</h6>
                            <p className="card-text">
                                 <img src = { props.meal.strMealThumb} alt="mealImage"style={{height: '20rem', width:'100%'}}/>
                            </p>
                            <a href="/" className="btn btn-dark btn-block" onClick={showModal}>Details <i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>

                {/* model */}
                <Modal show={isOpen} onHide={hideModal} dialogClassName={"primaryModal"}  centered>
                    <Modal.Header>
                    <Modal.Title>{props.meal.strMeal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="card" style={{width: '100%'}}>
                            <h6 className="mx-auto">Basic Ingredients</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{props.meal.strIngredient1}</li>
                                <li className="list-group-item">{props.meal.strIngredient2}</li>
                                <li className="list-group-item">{props.meal.strIngredient3}</li>
                                <li className="list-group-item">{props.meal.strIngredient4}</li>
                                <li className="list-group-item">{props.meal.strIngredient5}</li>
                            </ul>
                            <div className="card-body">
                                <strong>Category:</strong><h5 className="card-title">{props.meal.strCategory}</h5>
                                <br/>
                                <strong className="mx-auto">How to prepare</strong>
                                <p className="card-text">{props.meal.strInstructions}</p>
                                <strong>Tags: {props.meal.strTags}</strong>
                            </div>
                            
                            <div className="card-body">
                                <a href={props.meal.strYoutube} className="card-link">Video Tutorial</a>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <button className="btn btn-dark btn-block" onClick={hideModal}>Close <i className="fas fa-window-close"></i> </button>
                    </Modal.Footer>
                </Modal>
        </React.Fragment>
    )
}

export default Meals;
