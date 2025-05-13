import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada} from '../../assets/marca_registrada.svg'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            Desenvolvido por Fhabiana Machado
            <MarcaRegistrada />
        </footer>
    )
}

export default Rodape