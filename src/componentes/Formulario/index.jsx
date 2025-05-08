import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo/Campo'
import ListaSuspensa from '../ListaSuspensa'
import { AiOutlineUsergroupAdd, AiFillCloseCircle } from "react-icons/ai";
import './Formulario.css'

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#000000')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({ nome, cargo, imagem, time })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoSalvarTime = (event) => {
        event.preventDefault()
        props.cadastrarTime({ nome: nomeTime, cor: corTime })
    }

    const [exibeTime, setExibeTime] = useState(false)
    const toggleTime = () => {
        setExibeTime(!exibeTime)
    }

    return (
        <section className='formulario-container'>
            <div className='formulario'>
                <form  onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Campo
                        label="Nome"
                        required={true}
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                        placeholder="Digite o seu nome" />
                    <Campo
                        label="Cargo"
                        required={true}
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                        placeholder="Digite o seu cargo" />
                    <Campo
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
                {exibeTime === false &&
                    <button className="botao" onClick={event => toggleTime()}>
                        <AiOutlineUsergroupAdd size={20} /> Adicionar Time
                    </button>
                }
            </div>
            {exibeTime === true && <form className='formulario' onSubmit={aoSalvarTime}>
                <div className="deletar">
                    <AiFillCloseCircle size={30} onClick={event => toggleTime()} />
                </div>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    label="Nome"
                    required
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                    placeholder="Digite o nome do time" />
                <Campo
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    type='color'
                    required
                    aoAlterado={valor => setCorTime(valor)} />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>}
        </section>
    )
}

export default Formulario