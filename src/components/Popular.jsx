import React, { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Wrapper, Card, CardHeading, Gradient, SectionHdr } from '../styles/main.styled'
import { Link } from 'react-router-dom';

const Popular = () =>{
    const [recipes, setRecipes] = useState();

    useEffect(() =>{
        getPopular();
    }, []);

    const getPopular = async () => {

        // assigning Local Storage 
        const check = localStorage.getItem("getPopular");

        if(check){
            setRecipes(JSON.parse(check));
        }
        else{
            const res = await axios.get(`/api/recipes/v2?type=public&q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KAY}`)
            localStorage.setItem("getPopular", JSON.stringify(res.data.hits))
            // console.log(res.data.hits)
            setRecipes(res.data.hits);
        }

    }

    return(
        <>
        <SectionHdr style={{ marginTop: '100px' }}>Popular page</SectionHdr>
            <Wrapper>

                <Splide options={{ 
                    perPage: 4,
                    gap   : '3rem',
                    arrow: false,
                    pagination: false,
                    drag: "free",
                    breakpoints: {
                        640: {
                            perPage: 1,
                            //   destroy: true,
                        },
                        767: {
                            perPage: 2,
                        },
                        1092:{
                            perPage: 3,
                        }
                    }
                 }}>
                {recipes && recipes.map((recipe, index) =>{
                    return(
                        <SplideSlide key={index}>
                                <CardHeading>{recipe.recipe.label}</CardHeading>
                            <Card>
                                <Link to={"/recipe/" + recipe.recipe.label}>
                                    <img src={recipe.recipe.image} alt="" />

                                    <Gradient />
                                </Link>
                            </Card>

                        </SplideSlide>
                    )
                })}
                </Splide>
            </Wrapper>
        </>
    )
}

// const Wrapper = styled.div`
// margin: 4rem 0;
// `
// const Card = styled.div`
//     height: fit-content;
//     overflow: hidden;
//     border-radius: 2rem;
//     position: relative;

//     img{
//         width: 100%;
//     }
// `
// const Gradient = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
// `
// const CardHeading = styled.h3`
//     color: #fff;
//     font-weight: normal;
//     font-family: Arial, Helvetica, sans-serif;
//     z-index: 2;
//     position: absolute;
//     bottom: 20px;
//     width: 100%;
//     text-align: center;
// `


export default Popular;