import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Home} from "./Components/Home/Home";
import {MySkills} from "./Components/Skills/MySkills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <MySkills/>
        </div>
    );
}

export default App;
