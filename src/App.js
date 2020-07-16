import React from 'react';
import './App.css';
import Forms from "./component/Forms";
import styled from "styled-components";

const DIV  = styled.div`
display: flex;
flex-direction: column;
margin-left: 10%;
margin-right: 10%;


`;

function App() {
  return (

    <DIV className = "App">
      <h2> New User </h2>
      <Forms />
    </DIV>
     
  
  );
};

export default App;
