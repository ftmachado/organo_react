import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({colaborador, corFundo, aoDeletar, aoFavoritar}) => {
    const favoritar = () => {
        aoFavoritar(colaborador.id)
    }
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={30}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='cabecalho'style={{backgroundColor: corFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito 
                        ? <AiFillHeart {...propsFavorito} color='#ff0000'/>
                        : <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador