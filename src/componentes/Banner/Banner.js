import { Fragment } from 'react'
import './Banner.css'

export const Banner = () => {
    return (
        <>
            <header className="banner">
                <img src="/imagens/banner.png" alt="O banner principal do organo"/>
            </header>
            <h5>Teste de elementos irmão na raiz: Fragment</h5>
        </>
    )
}