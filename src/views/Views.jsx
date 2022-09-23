import React from 'react';
import {Home , Tasty, Searched, Recipe} from '.';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

const Views = () =>{
    const location = useLocation();
    return(
        <>  
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/tasty/:type" element={<Tasty />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/recipe/:name" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
        </>
    )
}

export default Views;