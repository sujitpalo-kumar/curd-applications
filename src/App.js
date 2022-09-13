import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/home/Home';
import List from './component/products/ProductList';
import Admin from './component/products/ProductAdmin';
import Createproduct from './component/products/CreateProduct';
import Update from './component/products/UpdateProduct';
import Navbar from './component/navbar/Navbar';


class App extends React.Component {


    render() {
        return (
            <div className="App">

                <BrowserRouter>
                <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/products" element={<List/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/create-product" element={<Createproduct/>}/>
                        <Route path="/update-product/:id" element={<Update/>}/>
                        
                    </Routes>
                    
                </BrowserRouter>

            </div>
        );
    }

}
export default App;
