import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, SectionHdr, RightBlock, Tag, IngredientsList, DetailsWrapper, LeftBlock, DetailBox } from "../styles/main.styled";



const Recipe = () =>{

    let params = useParams();
    const [details, setDetails] = useState([]);

    const getRecipeDetail = async () =>{
        const data = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${params.name}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KAY}`)
        setDetails([data.data.hits[0].recipe]);
    }

    useEffect(() =>{
        getRecipeDetail();
    }, [params.name]);
    
    return(
        <>
            {details.map((recipe, index) =>{
                return(
                    <div key={index}>
                        <SectionHdr>{recipe.label}</SectionHdr>
                        <DetailsWrapper>

                            <LeftBlock>
                                <Card>
                                    <img src={recipe.image} alt="" />
                                </Card>
                            </LeftBlock>

                            <RightBlock>
                                <DetailBox>
                                    <div>
                                        <span>Dish Type:</span>
                                        <p>{recipe.dishType}</p>
                                    </div>
                                    <div>
                                        <span>cuisine:</span>
                                        <p>{recipe.cuisineType}</p>
                                    </div>
                                    <div>
                                        <span>calories:</span>
                                        <p>{recipe.calories.toFixed(2)}</p>
                                    </div>
                                </DetailBox>
                                
                                <div style={{ margin: '40px 0' }}>
                                    <SectionHdr>Ingredients</SectionHdr>
                                    {recipe.ingredientLines.map((items, index) =>{
                                    {console.log(recipe)}
                                        return(
                                            <div key={index}>
                                                <IngredientsList type="1">
                                                    <li>{items}</li>
                                                </IngredientsList>
                                            </div>
                                        )
                                    })}
                                </div>

                                {recipe.healthLabels.map((items, index) =>{
                                    return(
                                        <Tag>{items}</Tag>
                                    )
                                })}
                            </RightBlock>
                        </DetailsWrapper>
                    </div>
                )
            })}
        </>
    )
}

export default Recipe;