import React, { useEffect, useState } from "react";
import {Category, Search, Views} from "./views";
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Header, Logo, Nav } from "./styles/main.styled";
import { GiKnifeFork } from 'react-icons/gi';

const App = () => {
    return(
        <div className="App">
            <BrowserRouter>
                <GlobalStyle />
                <Nav>
                    <Logo to={"/"}>
                        <GiKnifeFork style={{ marginRight: '10px', fontSize: '1.5rem', color: '#23CE6B' }}/>
                        delicious                    
                    </Logo>
                </Nav>
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