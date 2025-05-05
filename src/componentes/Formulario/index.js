import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({ nome, cargo, imagem, time })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    label="Nome"
                    required={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    placeholder="Digite o seu nome" />
                <CampoTexto
                    label="Cargo"
                    required={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    placeholder="Digite o seu cargo" />
                <CampoTexto
                    label="Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    placeholder="Digite o endereço da imagem" />
                <ListaSuspensa
                    label="Time"
                    required={true}
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario