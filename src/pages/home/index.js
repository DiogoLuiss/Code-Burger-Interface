import React, { useRef, useState } from "react";
import ContaineButton from "../../containers/Button/index"
import DivMain from "../../containers/ContainerMain/index"
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  Global,
  ImgBurger,
  H1,
  Labels,
  Inputs
} from "./styled";


function App() {


  const [Oders, setOders] = useState([])

  const InputOders = useRef()
  const InpuName = useRef()
  const History = useHistory()

  const checkOut = (New) => {

    if (New.Name === "" || New.Order === "") {

      alert("Você precisa preencher todas as informações")

    }

  }

function Nav() {
  History.push("/Pedidos")
}

  async function CreateOders() {
    Nav()
    const { data: New } = await axios.post("http://localhost:3100/users", {

      Name: InpuName.current.value,
      Order: InputOders.current.value,
   
    })
   

    setOders(...Oders, New)
    checkOut(New)

  }

  return (
    <Global>

      <DivMain>

        <ImgBurger />

        <H1>Faça seu pedido!</H1>

        <Labels> Pedido  <Inputs ref={InputOders} placeholder="1 Coca-Cola,1-X Salada"></Inputs></Labels>

        <Labels> Nome do Cliente <Inputs Inputs ref={InpuName} placeholder="Diogo Luis"></Inputs></Labels>

        <ContaineButton to="/Pedidos"  onClick={CreateOders} >Novo Pedido</ContaineButton>

      </DivMain>

    </Global>


  );
}

export default App;
