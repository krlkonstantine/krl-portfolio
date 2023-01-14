import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Home} from "./Components/Home/Home";
import {MySkills} from "./Components/Skills/MySkills";
import {MyWork} from "./Components/MyWork/MyWork";
import {Freelance} from "./Components/Freelance/Freelance";
import {Contact} from "./Components/Contact/Contact";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <MySkills/>
            <MyWork/>
            <Freelance/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
