import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Wrapper, Card, CardHeading, Gradient, SectionHdr } from '../styles/main.styled'
import { Link } from "react-router-dom";


const Vaggie = () =>{
    const [vaggie, setVaggie] = useState([]);

    useEffect(() =>{
        getVaggie();
    }, []);

    const getVaggie = async () => {

        // assigning Local Storage 
        const check = localStorage.getItem("vaggie");

        if(check){
            setVaggie(JSON.parse(check));
        }
        else{
            const res = await axios.get(`/api/recipes/v2?type=public&q=random&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KAY}&number=9&tag=vegetarian`)
            localStorage.setItem("vaggie", JSON.stringify(res.data.hits))
            setVaggie(res.data.hits);
        }

    }

    return(
        <>
        <SectionHdr>Our Vagetarian Picks</SectionHdr>
             <Wrapper>
                <Splide options={{ 
                    perPage: 3,
                    gap   : '4rem',
                    arrow: false,
                    pagination: false,
                    drag: "free",
                    breakpoints: {
                        640: {
                            gap   : '1rem',
                            perPage: 2,
                            //   destroy: true,
                        },
                        767: {
                            perPage: 2,
                        },
                        1092:{
                            perPage: 2,
                        }
                    }
                }}>
                {vaggie && vaggie.map((vaggie, index) =>{
                    return(
                        <SplideSlide key={index}>
                                <CardHeading>{vaggie.recipe.label}</CardHeading>
                            <Card>
                                <Link to={"/recipe/" + vaggie.recipe.label}>                                
                                    <img src={vaggie.recipe.image} alt="" />
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

export default Vaggie;