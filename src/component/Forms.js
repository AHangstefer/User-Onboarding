import React, {useState} from "react";

export default function Form(){

    const defaultState = {
        name: "",
        email:"",
        password:"",
        terms:""

    };

    const [formState, setFormState]= useState(defaultState);




    return (
        <form>
            
        </form>
    )
}