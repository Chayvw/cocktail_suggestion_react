import React, { Component } from 'react';
import axios from 'axios'
import Card from './Card'

class Forms extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
            drinkName: "",
            drinkInstructions:'',
            drinkGlass: " ",
            drinkResult: []

            
        }
    }

    handleDrinkRequest = async (event) => {
        event.preventDefault();
        console.log("Drink Request")

        const query = this.state.userInput;

        const urlBase = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        axios({
            url: urlBase,
            method: 'GET'
        }).then((response) => {
            this.setState({
                drinkResult: response.data.drinks
                // drinkName: response.data.drinks[0].strDrink,
                // drinkInstructions: response.data.drinks[0].strInstructions,
                // drinkGlass: response.data.drinks[0].strGlass,
                // drinkIngredient : response.data.drinks[0].strIngredient1,
                // drinkIngredientTwo : response.data.drinks[0].strIngredient2,
                // drinkIngredientThree : response.data.drinks[0].strIngredient3,
                // drinkIngredientFour : response.data.drinks[0].strIngredient4,
                // drinkIngredientFive : response.data.drinks[0].strIngredient5,
                // measurement:response.data.drinks[0].strMeasure1,
                // measurementTwo:response.data.drinks[0].strMeasure2,
                // measurementThree:response.data.drinks[0].strMeasure3,
                // measurementFour:response.data.drinks[0].strMeasure4,
                // measurementFive:response.data.drinks[0].strMeasure5,
                // drinkResult: response.data.drinks
                



            }, ()=>{console.log(this.drinkResult)})
            
           

        }).catch(() => {

            alert("Error")
        })

        // try {
        //     const res = await fetch(urlBase)
        //     const data = await res.json()
        //     console.log(data.results)
        // } catch(err){
        //     alert("Error")
        // }
    }

    captureUserInput = (input) => {
        this.setState({
            userInput: input
        }, () => { console.log(input) })
    }
    render() {
        return (
            <div>
                <form action="submit" onSubmit={this.handleDrinkRequest}>
                    <div className="input-group mb-3" />
                    <label htmlFor="query" className="label">Drink Search</label>
                    <input type="text" className="form-control" placeholder="Cocktail Search" value={this.state.userInput} onChange={(event) => { this.captureUserInput(event.target.value) }} />
                    {/* <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button> */}
                    {/* <div> */}
        <h3>Results:{this.state.drinkResult}</h3>
                        {/* <Card name={this.state.drinkName}
                        instructions={this.state.drinkInstructions}
                        ingredient={this.state.drinkIngredient}
                        ingredientTwo={this.state.drinkIngredientTwo}
                        ingredientThree={this.state.drinkIngredientThree}
                        ingredientFour={this.state.drinkIngredientFour}
                        ingredientFive={this.state.drinkIngredientFive}
                        measurement ={this.state.measurement}
                        measurementTwo={this.state.measurement}
                        measurementThree ={this.state.measurement}
                        measurementFour ={this.state.measurement}
                        measurementFive ={this.state.measurement}  /> */}
        

                </form>
            </div>
        );
    }
}

export default Forms;