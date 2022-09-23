
import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"

const Nav = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    
`
const Logo = styled(Link)`
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-family: 'Lobster Two', cursive;
    color:#272D2D;
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: capitalize;
    display: flex;
    align-items: center;
`
const Header = styled.div`
    background: #f7fcff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0 50px 0;
    padding: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px #c3d2db;    
`
const SearchForm = styled.form`
    background: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 0 10px 0 15px;
    margin-bottom: 20px;
    border: 1px solid #a7bdca;

    svg{
        font-size: 1.2rem;
        color: #272D2D;
        margin-right:10px;
    }
`
const SearchBox = styled.input`
    padding: 15px 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    outline: none;
    font-size: 1;
    border:none;
    min-width: 450px;
    max-width: 450px;
    
`
const Wrapper = styled.div`
    /* margin: 2rem 0; */
`
const Gradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

const CardHeading = styled.h3`
    color: #fff;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;
    z-index: 2;
    position: absolute;
    bottom: 20px;
    width: 100%;
    padding: 0 15px;
    text-align: center;
`

const Card = styled.div`
    height: fit-content;
    overflow: hidden;
    border-radius: 2rem;
    position: relative;
    
    img{
        width: 100%;
        height: 100%;
        float: left;
    }
    `
const SectionHdr = styled.h2`
    color: #272D2D;
    margin: 20px 0;
    font-size: 1.2rem;
`
const Container = styled(motion.div)`
    max-width: 992px;
    margin: 40px auto auto auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
`
const CategoryList = styled.div`
    display: flex;
    justify-content: center;
`
const SLink = styled(NavLink)`
    margin: 0 20px;
    text-decoration: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    min-width: 100px;
    max-width: 100px;
    min-height: 100px;
    max-height: 100px;
    color: #272D2D;
    
    &:hover, &.active{
        background: #23CE6B;
        
        svg{
            color: #fff;
        }
    }
    svg{
        font-size: 1.5rem;
        color: #23CE6B;
    }
    h4{
        font-weight: normal;        
        font-size: 1rem;
    }
`
const LeftBlock = styled.div`
    padding-right: 15px;
    width: 50%;
    
    div{
        position: sticky;
        top: 10px;
    }
    `
const RightBlock = styled.div`
    background: #f7fcff;
    padding: 15px;
    width: 50%;
    border: 1px solid #c5d4dd;
    border-radius: 4px;
`
const DetailsWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 767.98px) {
        &{
            flex-direction: column;
        }
        ${LeftBlock}{
            margin-bottom: 15px;
            padding: 0;
        }
        ${LeftBlock}, ${RightBlock}{
            width: 100%;
        }
    }
`

const DetailBox = styled.div`
    font-family: 'Poppins', sans-serif;
    border: 1px solid #c5d4dd;
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-transform: capitalize;

    span{
        font-size: .9rem;
        color: #6e808a;
        font-weight: 400;
    }
    p{
        color: #272D2D;
        font-weight: 500;
        font-size: 1.1rem;
    }

`
const IngredientsList = styled.ul`
    line-height: 30px;
    padding: 0 20px;
    
    li{
        margin: 5px 0;
    }

`
const Tag = styled.button`
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-transform: capitalize;
    border: 1px solid #23CE6B;
    margin: 5px;
    background: none;
`


export { 
    Wrapper, 
    Gradient, 
    CardHeading, 
    Card, 
    SectionHdr, 
    Header, 
    CategoryList, 
    Container, 
    SLink,
    SearchBox,
    SearchForm,
    RightBlock,
    Tag,
    IngredientsList,
    DetailsWrapper,
    LeftBlock,
    DetailBox,
    Logo, 
    Nav
};