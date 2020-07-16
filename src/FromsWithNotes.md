import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from  "axios";
import styled from "styled-components";



const P = styled.p`
display: flex;
flex-direction: column;
padding: 2%;
align-items: center;
justify-content: space-between;

`;


export default function Form(){

    const [post, setPost]= useState([])

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

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
         positions: yup.string(),
         terms: yup.boolean().oneOf([true], "Please agree to our Terms & Conditions to continue")
     });
     
     {/*formSchema is used to compare the values entered in the forms. We want
        a change of state to cause a function to run*/}

        const validateChange = e => {
            yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid =>{
                setErrors({...errors, [e.target.name]: ""});
            })
            .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}));
        
        };


        useEffect(() =>{
            formSchema.isValid(formState).then(valid =>{
                console.log("valid?", valid);
                setIsButtonDisabled(!valid);
            });
        }, [formState]);

     {/* useEffect (()=> {},[]) first variable is effect function, second
       is dependency array. We're listening for something to change with a 
       state so that, the code will do something else - like a trigger.
        Want array to update whenever there's an update for  formState.   */}



    const formSubmit = e => {
        e.preventDefault();
        console.log ("form submitted!");
        axios
        .post("https://reqres.in/api/users", formState)
         .then(response => {
             setPost(response.data);
             setFormState({

                name: "",
                email:"",
                password:"",
                notes:"",
                positions:"",
                terms:"" 

             });
         })
         .catch(err => console.log(err.response));
    };

    const inputChange = e => {
        console.log("input changed!", e.target.value);
        console.log(formState);
        e.persist()

        const newFormData = {
            ...formState,
            [e.target.name]:e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e)
        setFormState(newFormData);
        console.log(formState);
    };

      {/* newFromData is recieving all data from formState (key value pairs).
          onChange has been fired so we want to update input values by [e.target.name
        ] to find specific "name"s of inputs. This updates state(formState?)
    
        if e.target.type === "checkbox" then use target.check, if not use target.value*/}

   




    return (
        <form onSubmit = {formSubmit}>
            <P>
            <label htmlFor= "name">
                Name
             <input 
                id="name" 
                type="text" 
                name = "name" 
                onChange = {inputChange} 
                value= {formState.name}
             />
             {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}

             {/* line above renders error message on page for user */}

            </label>
            <label htmlFor = "email">
                Email
             <input id="email" type = "email" name="email" onChange = {inputChange} value={formState.email}/>
            </label>
            {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}

            <label htmlFor = "password">
                Password
              <input id="password" type = "text" name="password" onChange = {inputChange} value={formState.password}/>
            </label>
            {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
            

            <label htmlFor = "notes">
                Pass us a note 
                <textarea name = "notes" onChange = {inputChange} value={formState.notes} />
            </label>

            <label htmlFor = "positions">
                Preferred role
                <select id= "positions" name = "positions" onChange = {inputChange}>
                   <option value="teaching">Teaching</option>
                   <option value ="assisting">Assisting</option>
                   <option value="nightCrew">Night Crew</option>
                   <option value="cleaning">Cleaning</option>
                </select>
            </label>

            <label htmlFor="terms" className="terms">
                <input type="checkbox" name="terms" checked={formState.terms} onChange = {inputChange}/>
                Terms & Conditions
            </label>
            
            
                
           
        

            <button disabled={isButtonDisabled} type="submit">
                Submit
            </button>

            </P>

            <pre>{JSON.stringify(post,null,2)}</pre>
            
        </form>
    

    )
}

            {/* must add onChange to inputs. The onChange needs to be 
            handled by inputChange so that all of the "name"s of input
            will be updated with the new values   */}