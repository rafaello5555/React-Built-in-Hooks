import logo from './logo.svg';
import './App.css';
import {useState} from "react";2 random 



function App() {

  //Define local variablle to store values. it return variable and fucntion to store variable
  const [values, setValues] = useState({random1:0, random2:0});

  //Generate 2 random function
  const generateRandomNumbers = () => {
    const random1 = Math.floor(Math.random() * 50);
    const random2  =Math.floor(Math.random()* 50);
    setValues({random1,random2});
    

  };


  const guessTheNumber = () => {
    return (
      <div className="p-5" style={{width:"80%"}}>
        <fieldset>
          <legend className="text-bold"> Guess the Number</legend>
        </fieldset>

    )

  }

}
export default App;
