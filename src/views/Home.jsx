import { useState } from 'react';
import FetchRecipe from '../utlls/FetchRecipe';
import { Popular, Vaggie } from './';

const Home = () =>{
    const [timeoutId, setTimeoutId] = useState();

    const onTextChange = (e) => {
        e.preventDefault();
        clearTimeout(timeoutId);
        const timeout = setTimeout(() => FetchRecipe(e.target.value), 500);
        setTimeoutId(timeout);
    }

    return(
        <>
            <h2>Homepage</h2>
            <input type="text" onChange={onTextChange}/>

            <Popular />
            <Vaggie />
        </>
        
    )
}

export default Home;