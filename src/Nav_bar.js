import React, { useState } from "react";
import Albuns from "./Albuns";
import Counter from "./Counter";
import Users from "./Users";

const defaultPage = 'albuns'

const pages = {

    albuns: {
        text: 'Álbuns',
        componente: Albuns,
    },

    counter: {
        text: 'Counter',
        componente: Counter,
    },

    users: {
        text: 'Usuário',
        componente: Users,
    },
}


const Nav_bar = () => {
    const[page, setPage] = useState(defaultPage)

    const handleChangePage = (page) => {
        setPage(page)
    }

    const Page = pages[page].componente

    const listaDePaginas = Object.keys(pages)

    return (
        <>
                {
                listaDePaginas.map(chave_pages => {
                    return (
                        <button onClick={() => handleChangePage(chave_pages)}>{pages[chave_pages].text}</button>
                    )
                })
            }

            {Page && <Page/>}
        </>
    )
}

export default Nav_bar