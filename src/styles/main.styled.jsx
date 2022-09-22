
import styled from "styled-components"
import { NavLink } from 'react-router-dom'

const Header = styled.div`
    background: #f7fcff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
    padding: 40px 0;
    /* padding: 50px 0; */
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
    font-family: Arial, Helvetica, sans-serif;
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
    }
    `
const SectionHdr = styled.h2`
    color: #004ca3;
    margin: 20px 0;
    font-size: 1.2rem;
`
const Container = styled.div`
    max-width: 992px;
    margin: 40px auto auto auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
`
const CategoryList = styled.div`
    display: flex;
    justify-content: center;
    /* margin: 50px 0; */
`
const SLink = styled(NavLink)`
    margin: 0 20px;
    text-decoration: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 15px; */
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
    SearchForm 
};