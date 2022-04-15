import React, { useEffect, useState } from "react";
import Template from "./Template";
import Loading from "./Loading";

const Albuns = () => {

  const[isLoading, setIsLoaging] = useState(false)
  const[albuns, setAlbuns] = useState([])

  useEffect(() => {
    setIsLoaging(true)

    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(data => {
      // Guarda dentro da const albuns um array com os dados da API
        setAlbuns(data)
        setIsLoaging(false)
    })
  }, [])


  return (
    
    <Template title={'Albuns'}>

      {/* children */}
        {/* Mostra uma imagem de carregamento enquanto o useEffect() pega os dados da API*/}
        <Loading visible={isLoading}/>

        {/* Monta na tela através do map os dados do array albuns */}
        {
          albuns.map (item => {
            return (
              <div>
                <span>{item.title} - id: {item.id}</span>
              </div>
            )
          })
        }    
      {/* children */}
    </Template>  
    
  );
  
}

export default Albuns