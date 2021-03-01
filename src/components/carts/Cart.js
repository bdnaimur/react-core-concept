import React, { useState } from 'react';
import Details from '../carts/Details';

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    const [player, setPlayer] = useState([]);
    // const newPlayer = [...player, cart];
    let totalCost = 0;
    let selectedPlayers = "";
    for (let i = 0; i < cart.length; i++) {
        const cost = cart[i];
        <h2>{cost.name}</h2>
        totalCost += cost.salary;
        selectedPlayers += (i+1)+"."+" "+ cost.name +" ";       
    }
    const clickDetails = () =>{
        console.log();
        return (
            <div>
                {props.cart.map(player => <Details player = {player}></Details>)}
            </div>
        );
    }
    return (
        <div>
            <h4>Selected Players: {props.cart.length}</h4>
            <h6>Total Cost: {totalCost}</h6>
            <p>Players: {selectedPlayers}</p>
            <button onClick={clickDetails}>Details</button>
            <Details></Details>
            
        </div>
    );
};

export default Cart;