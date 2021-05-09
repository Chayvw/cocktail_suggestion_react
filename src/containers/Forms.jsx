import React, { Component } from 'react';

class Forms extends Component { 
    constructor(){
        super()

        this.state = {
            userInput: "",
            drinkList: []
        }

       

        }

        handleDrinkRequest = (event)=>{
            event.preventDefault();
            console.log("Drink Request")
    }
    render() {
        return (
            <div>
                <form action="submit" onSubmit={this.handleDrinkRequest}>
                    <div class="input-group mb-3"/>
                    <label htmlFor="query" className="label">Drink Search</label>
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>

                   
                   </form> 
            </div>
        );
    }
}

export default Forms;