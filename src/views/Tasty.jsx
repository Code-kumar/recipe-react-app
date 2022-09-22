import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../components/Category";
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
        console.log(params.type);
        getTasties(params.type);
    }, [params.type])


    return(
        <>
            <h2 style={{ paddingLeft: '80px' }}>{params.type}'s Cuisine</h2>
            <Container>
                {tasties && tasties.map((item, index) =>{
                    return(
                        <Card key={index}>
                            <img src={item.recipe.image} alt="" />
                            <CardHeading>{item.recipe.label}</CardHeading>
                            <Gradient />
                        </Card>
                    )
                })}
            </Container>
        
        </>
    )
}

export default Tasty;