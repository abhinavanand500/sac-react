import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Navbar from "./features/components/Navbar";
import Home from "./features/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Home />
                <Counter />
            </Router>
        </>
    );
}

export default App;
