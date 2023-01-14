import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Home} from "./Components/Home/Home";
import {MySkills} from "./Components/Skills/MySkills";
import {MyWork} from "./Components/MyWork/MyWork";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <MySkills/>
            <MyWork/>
        </div>
    );
}

export default App;
