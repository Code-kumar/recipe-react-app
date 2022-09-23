import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { Card, Container, Gradient, CardHeading } from '../styles/main.styled';

const Tasty = () =>{

    const [tasties, setTasties] = useState([]);
    const params = useParams();

    const getTasties = async (name) =>{
        const res = await axios.get(`/api/recipes/v2?type=public&q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KAY}&cuisineType=${name}`)
        setTasties(res.data.hits);
    }
    
    useEffect(() =>{
        getTasties(params.type);
    }, [params.type])


    return(
        <>
            <h2 style={{ paddingLeft: '80px' }}>{params.type}'s Cuisine</h2>
            <Container 
                animate={{ opacity: 1 }}    
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {tasties && tasties.map((item, index) =>{
                    return(
                        <Card key={index}>
                            <Link to={"/recipe/" + item.recipe.label}>
                                <img src={item.recipe.image} alt="" />
                                <CardHeading>{item.recipe.label}</CardHeading>
                                <Gradient />
                            </Link>
                        </Card>
                    )
                })}
            </Container>
        
        </>
    )
}

export default Tasty;