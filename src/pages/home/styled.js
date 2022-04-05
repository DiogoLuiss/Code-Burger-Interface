import styled from "styled-components";

import Burger from "../../assets/CodeBurger.png"

export const Global = styled.body`
display: flex;
justify-content: center;
align-items: center;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 50%, rgba(0,39,255,1) 100%);
height: 100%;
min-height: 100vh;

`


export const ImgBurger = styled.div`
background-image: url(${Burger});
width: 342px;
height: 354px;

`

export const H1 = styled.h1`

font-size: 28px;
font-weight: 700;
margin-top: 35px;
color: white;
text-align: center;
margin-bottom: 90px;
`

export const Labels = styled.label`

font-size: 20px;
color:white;
padding-left: 18px;
font-weight: 700;
`

export const Inputs = styled.input`
margin-top: 5px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
width: 100%;
height: 55px;
font-size: 23px;
padding-left: 15px;
font-weight: 300;
margin-bottom: 65px;
border: none;
outline: none;
color: white;
font-weight: 400;
`
