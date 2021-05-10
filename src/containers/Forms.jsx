import React, { Component } from 'react';
import axios from 'axios'

class Forms extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
            drinkList: []
        }



    }

    handleDrinkRequest = async (event) => {
        event.preventDefault();
        console.log("Drink Request")

        const query = this.state.userInput;

        const urlBase = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        axios({
            url: urlBase,
            method:'GET'
        }).then( (response)=>{
            console.log(response.data)
        }).catch( ()=>{

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

    captureUserInput = (input) =>{
        this.setState({
            userInput: input
        }, ()=>{console.log(input)})
    }
    render() {
        return (
            <div>
                <form action="submit" onSubmit={this.handleDrinkRequest}>
                    <div class="input-group mb-3" />
                    <label htmlFor="query" className="label">Drink Search</label>
                    <input type="text" className="form-control" placeholder="Cocktail Search" value={this.state.userInput} onChange={(event) =>{this.captureUserInput(event.target.value)}}/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>


                </form>
            </div>
        );
    }
}

export default Forms;