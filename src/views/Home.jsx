import React from "react";
import { Popular, Vaggie } from './';

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
            <input type="text" />

            <Popular/>
            <Vaggie />
        </>
        
    )
}

export default Home;