import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Container, Gradient, CardHeading } from '../styles/main.styled';


const Searched = () =>{

    const [searched, setSearched] = useState([]);
    const params = useParams();

    const getSearched = async (query) =>{
        const res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KAY}`)
        setSearched(res.data.hits);
    }
    
    useEffect(() =>{
        console.log(params.search);
        getSearched(params.search);
    }, [params.search])


    return(
        <>
        <h2 style={{ paddingLeft: '80px' }}>Results for: <span style={{ color: '#23CE6B' }}>{params.search}</span></h2>
        <Container
            animate={{ opacity: 1 }}    
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {searched && searched.map((item, index) =>{
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

export default Searched;