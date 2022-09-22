import React from 'react';
import {Home , Tasty, Searched} from '.';
import { Route, Routes } from 'react-router-dom';

const Views = () =>{
    return(
        <>  
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasty/:type" element={<Tasty />} />
                <Route path="/searched/:search" element={<Searched />} />
            </Routes>
        </>
    )
}

export default Views;