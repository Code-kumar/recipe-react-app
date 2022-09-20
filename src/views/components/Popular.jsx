import React from "react";
import { useEffect, useState } from "react";
import FetchRecipe from "../../utlls/FetchRecipe";
import styled from 'styled-components';

const Popular = () =>{
    const [recipe, setRecipe] = useState();

    useEffect(() =>{
        FetchRecipe()
        .then((data) => setRecipe(data));
    }, []);
    
    console.log(recipe);
    return(
        <>
        <h2>Hello recipes</h2>
            {recipe && recipe.map((recipe) =>{
                return(
                    <Wrapper key={recipe.recipe.label}>
                        <p>{recipe.recipe.label}</p>
                        <img src={recipe.recipe.image} alt="" />
                    </Wrapper>
                )
            })}
        </>
    )
}


const Wrapper = styled.div`
    margin 4rem: 0rem;
`

export default Popular;