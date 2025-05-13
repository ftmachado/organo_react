import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    return (
        (colaboradores.length > 0) &&
        <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6')}}>
            <input value={time.cor} onChange={event => mudarCor(event.target.value, time.id)} type='color' className='input-cor'/>
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( (colaborador) => {
                    return (
                        <Colaborador 
                            key={colaborador.id}
                            colaborador={colaborador}
                            corFundo={time.cor}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />)
                })}
            </div>
        </section>
    )
}

export default Time