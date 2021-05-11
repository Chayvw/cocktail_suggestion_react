import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div>
                <h2>Drink Name: {this.props.name}</h2>
                <p> Instructions: {this.props.instructions}</p>
                <div>
                    <ul>
                        <li>Ingredient1: {this.props.ingredient}</li>
                        <li>Ingredient2: {this.props.ingredientTwo}</li>
                        <li>Ingredient3:  {this.props.ingredientThree}</li>
                        <li>Ingredient4:  {this.props.ingredientFour}</li>
                        <li>Ingredient5:  {this.props.ingredientFive}</li>
                    </ul>
                </div>
                <div>
                    <li>Measurement1:  {this.props.measurement}</li>
                    <li>Measurement2: {this.props.measurementTwo}</li>
                    <li>Measurement3: {this.props.measurementThree}</li>
                    <li>Measurement4: {this.props.measurementFour}</li>
                    <li>Measurement5: {this.props.measurementFive}</li>
                </div>

            </div>
        );
    }
}

export default Card;