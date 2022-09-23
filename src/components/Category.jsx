import React from "react";
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiDoubleFish, GiChopsticks } from 'react-icons/gi';
import { CategoryList, SLink } from "../styles/main.styled";

const Category = () =>{
    return(
        <CategoryList>
            <SLink to={'/tasty/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink> 

            <SLink to={'/tasty/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>

            <SLink to={'/tasty/Caribbean'}>
                <GiDoubleFish />
                <h4>Caribbean</h4>
            </SLink>

            <SLink to={'/tasty/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </CategoryList>
    )
}

export default Category;