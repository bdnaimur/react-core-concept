import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './product.css';


const Product = (props) => {
    console.log(props);
    const { name, img, salary, email, website } = props.product;
    return (
        <div className="card-deck">
            <div className="card">
                <div className="">
                    <img style={{ width: 400, height: 250 }} src={img} alt="" />
                </div>
                <div className="card-body">
                    <h4 class="card-title">{name}</h4>
                    <br />
                    <div class="card-text">
                        <p>Email: {email}</p>
                        <p>Website: {website}</p>
                        <p><small>Salary: {salary}</small></p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-info w-100" onClick={() => props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />   Add to Team</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;