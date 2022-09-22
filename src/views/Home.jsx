import React from "react";
import { Popular, Vaggie, Category } from './';
import {Header} from '../styles/main.styled';

const Home = () =>{
    // const [recipe, setRecipe] = useState();
    // const [timeoutId, setTimeoutId] = useState();
    
    // useEffect(() =>{
    //     FetchRecipe()
    //     .then((data) => setRecipe(data));
    // }, []);
    
    // const onTextChange = (event) => {
    //     clearTimeout(timeoutId);
    //     // Debouncing
    //     const timeout = setTimeout(() => FetchRecipe(event.target.value), 800);
    //     setTimeoutId(timeout)
    // }

    return(
        <> 
            <Vaggie />
            <Popular/>
        </>
        
    )
}

export default Home;