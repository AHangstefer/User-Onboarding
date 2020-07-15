import React, {useState} from "react";
import * as yup from "yup";

export default function Form(){

    const [formState, setFormState] = useState ({

        name: "",
        email:"",
        password:"",
        notes:"",
        positions:"",
        terms:"" 

    });

    {/* the keys in useState(formState) must match the "names" in 
     inputs. When setFormState uses {name: e.target.value} it's looking at
     the "name" key for each input. These are all connected */}

    const [errors, setErrors] = useState({

        name: "",
        email:"",
        password:"",
        notes:"",
        positions:"",
        terms:"" 

    });
    
    {/* error useState is the same as formState because we won't have
     errors initially */}

     const formSchema = yup.object().shape({
         name: yup.string().required("Name is a required field"),
         email: yup.string().email("Must be a valid email address").required(),
         password: yup.string().required("Password is a required field"),
         notes: yup.string(),
         positions: yup.required(),
         terms: yup.boolean().oneOf([true], "please agree to our Terms & Conditions to continue")
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

            <label htmlFor="terms" className="terms">
                <input type="checkbox" name="terms" checked={true}/>
                Terms & Conditions
            </label>
                

        

            <button type="submit">Submit</button>
            
        </form>
    )
}