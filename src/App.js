import React, { useEffect, useState } from "react";
import {Category, Search, Views} from "./views";
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Header } from "./styles/main.styled";
const App = () => {
    return(
        <div className="App">
            <BrowserRouter>
                <GlobalStyle />
                <Header>
                    <Search />
                    <Category />
                </Header>
                <Views />           
            </BrowserRouter>
        </div>
    )
}

export default App