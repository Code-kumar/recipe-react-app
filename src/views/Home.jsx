import React from "react";
import { Popular, Vaggie } from './';
import {motion} from 'framer-motion';

const Home = () =>{

    return(
        <motion.div 
            animate={{ opacity: 1 }}    
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        > 
            <Vaggie />
            <Popular/>
        </motion.div>
        
    )
}

export default Home;