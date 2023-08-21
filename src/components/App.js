// create your App component here
import React from "react";

import { useState, useEffect } from "react";

function App(){


    const[message, setMessage] = useState([])
    const [dogImage, setDogImage] = useState('');


    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((data) => setDogImage(data.message));
        
    },[])
    
    return (
        <div className="App">
          {dogImage ? (
            <img src={dogImage} alt="A Random Dog" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    };

       


export default App