
import styled from "styled-components"

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
    text-align: center;
`

const Card = styled.div`
    height: fit-content;
    overflow: hidden;
    border-radius: 2rem;
    position: relative;

    img{
        width: 100%;
    }
`

export { Wrapper, Gradient, CardHeading, Card };