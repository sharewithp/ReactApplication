//import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

 //create a React component
const App = () => {
    const buttonText={text:'sign in'};
    const labelText='username name';
  
   return (
    <div>
    <label className="lable" htmlFor="name">
    {labelText}
    </label>
    <input id="name" type="text" />
    <button style={{backgroundColor:'blue',color:'white'}}>
    {buttonText.text}
    </button>
  </div>
    );
};
//Take the React component and show it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));
