import React, { useEffect, useState } from "react";
import Template from "./Template";
import Loading from "./Loading";

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoaging] = useState(false);

  useEffect(() => {
    setIsLoaging(true)

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(data => {
        setUsuarios(data);
        setIsLoaging(false)
      })
  }, [])

  return (

    <Template title={'Usuários'}>

      {/* children */}
      <Loading visible={isLoading}/>

      {
        usuarios.map(item => {
          return (
            <div style={{margin: '10px' }}>
              <b>Nome: </b> {item.name}<br />
              <b>E-mail: </b> {item.email}<br />
              <b>Telefone: </b> {item.phone}<br />
              <b>Site: </b> {item.website}<br />
            </div>
          )
        })
      }
      {/* children */}
    </Template>

  )

}

export default Users;