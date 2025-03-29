import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
        </div>
    )
}

export default App