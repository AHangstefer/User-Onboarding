import React, {useState} from "react";

export default function Form(){

    const [formState, setFormState] = useState ({

        name: "",
        email:"",
        password:"",
        notes:"",
        positions:"",
        terms:"" 

    });

    const formSubmit = e => {
        e.preventDefault();
        console.log ("form submitted!");
    };

    const inputChange = e => {
        console.log("input changed!", e.target.value);
        setFormState({name: e.target.value});
    };


   




    return (
        <form onSubmit = {formSubmit}>
            <label htmlFor= "name">
                Name
             <input id="name" type="text" name = "name"/>
             {/*<input id="password" type = "text" name="password"/>
             <input id="terms" type="checkbox" name="terms"/> */}

            </label>
            <label htmlFor = "email">
                Email
             <input id="email" type = "email" name="email"/>
            </label>
            <label htmlFor = "password">
                Password
              <input id="password" type = "text" name="pasword"/>
            </label>
            <label htmlFor = "notes">
                Is there anything you'd like to tell us?
                <textarea name = "notes" />
            </label>
            <label htmlFor = "positions">
                What would you like to help with?
                <select id= "positions" name = "positions">
                   <option value="teaching">Teaching</option>
                   <option value ="assisting">Assisting</option>
                   <option value="nightCrew">Night Crew</option>
                   <option value="cleaning">Cleaning</option>
                </select>

            </label>

            <button>Submit</button>
            
        </form>
    )
}