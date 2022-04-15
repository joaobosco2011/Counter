import React from "react";
import imagem_carregamento from './img/loading.gif'

const Loading = ({visible}) => {
    return (
        <div>
            {
                visible === true
                    ? <img src={imagem_carregamento} />
                    : ''
            }
        </div>
    )
}

export default Loading