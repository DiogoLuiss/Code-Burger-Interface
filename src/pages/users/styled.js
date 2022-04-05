import styled from "styled-components";

import Burger from "../../assets/Bag.png"



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
width: 246px;
height: 354px;
margin-left: 43px;


`

export const H1 = styled.h1`

font-size: 28px;
font-weight: 700;
margin-top: 35px;
color: white;
text-align: center;
margin-bottom: 90px;
`



export const Ul = styled.ul`

height: 330px;
width: 370px;
overflow: overlay;

::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #555; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

::-webkit-scrollbar-thumb:active {
  background: #333; 
}


`
export const Li = styled.li`
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border-radius: 5px;
width: 342px;
height: 140px;
padding: 0px 15px 30px 25px;
margin-bottom: 30px;

`
export const P = styled.p`
color:white;
font-weight: 300;
font-size: 18px;
line-height: 21px;
font-size: 18px;
margin-bottom:10px ;
font-weight: 300;
text-align: left;


`


export const Button = styled.button`
background: none;
border: none;
position: relative;
left: 250px;

cursor: pointer;
font-size: 40px;

&:hover{
    color: red;
}

`


export const Button2 = styled.button`
background: none;
border: none;
position: relative;

top: 54px;
left: 130px;

cursor: pointer;
font-size: 15px;

&:hover{
    color: blue;
}

`

export const H2 = styled.h2`

color: white;
font-size: 20px;
position: relative;
bottom: 35px;
width: 200px;

`
