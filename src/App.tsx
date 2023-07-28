import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Home} from "./Components/Home/Home";
import {MySkills} from "./Components/Skills/MySkills";
import {MyWork} from "./Components/MyWork/MyWork";
import {Freelance} from "./Components/Freelance/Freelance";
import {Contact} from "./Components/Contact/Contact";
import {Footer} from "./Components/Footer/Footer";
import myImg from "../src/assets/img/aboutMe_pic.jpeg"
import {TsParticles} from "./Components/common/Particles/TsParticles"



let myPic = {
    photo: {
        backgroundImage: `url(${myImg})`
    }
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Home style={myPic.photo}/>
            <MySkills/>
            <MyWork/>
            <Freelance/>
            <Contact/>
            <Footer/>
            <TsParticles/>
        </div>
    );
}

export default App;
