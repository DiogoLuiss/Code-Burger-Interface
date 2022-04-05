import React, { useState, useEffect } from "react";
import { FaTrash, FaCircle} from "react-icons/fa";
import ContaineButton from "../../containers/Button/index"
import DivMain from "../../containers/ContainerMain/index"

import { useHistory } from "react-router-dom";
import axios from "axios";

import {
  
  Global,
  ImgBurger,
  H1,
  P,
  Button,
  Button2,
  Li,
  H2,
  Ul,

} from "./styled";


function Users() {



  const [Orders, setOrders] = useState([])
  History = useHistory()

  function Nav() {
    History.push("/")
  }



  useEffect(() => {

    async function Effect() {
      const { data: orders } = await axios.get("http://localhost:3100/users")

      setOrders(orders)
    }

    Effect()

  }, [Orders])

  async function DeleteOders(Orderid) {

    await axios.delete(`http://localhost:3100/users/${Orderid}`)

    const DeleteOrders = Orders.filter(Order => Order.id !== Orderid)


    setOrders(DeleteOrders)

  }

  async function Check(IdPath) {

 await  axios.patch(`http://localhost:3100/users/${IdPath}`)

  }



  return (
    
    <Global>

      <DivMain IsBack={false}>

        <ImgBurger />

        <H1>Pedidos!</H1>

        <Ul>

          {Orders.map((Orders) =>
            <Li key={Orders.id}>
              <Button2  onClick={() => Check (Orders.id)} ><FaCircle/></Button2>

              <P>{Orders.Order}</P>
              <P>{Orders.Status}</P>

              <Button onClick={() => DeleteOders(Orders.id)} ><FaTrash /></Button>

              <H2>{Orders.Name}</H2>

            </Li>

          )}
        </Ul>

        <ContaineButton onClick={Nav} IsBack={true}>Voltar</ContaineButton>

      </DivMain>

    </Global>


  );
}

export default Users;
