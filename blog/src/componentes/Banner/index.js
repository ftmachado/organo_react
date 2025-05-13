import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Bem vindo ao meu blog!</h1>
                <p className={styles.paragrafo}>
                    Este é meu espaço pessoal! <br/> Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="Um círculo colorido" aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt="Meu avatar" />
            </div>
        </div>
    )
}

export default Banner