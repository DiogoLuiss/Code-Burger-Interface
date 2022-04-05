import styled from "styled-components";

export const Button = styled.button `

width: 100%;
height: 68px;
background-color:${rest => rest.IsBack ? "#2C2C31" : "red"};
font-size: 22px;
font-weight: bolder;
color: white;
border: none;
border-radius: 14px;
margin-bottom: 20px;

${rest => rest.IsBack ? "margin-top: 20px;" : ""}
&:hover{
    cursor: pointer;
    color: #A849FC;
}
&:active{
    font-size: 24px;
}
`