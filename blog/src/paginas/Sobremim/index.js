import PostModelo from "../../componentes/PostModelo"
import styles from './SobreMim.module.css'
import fotoCapa from '../../assets/sobre_mim_capa.png'
import fotoSobreMim from '../../assets/sobre_mim_foto.png'

const SobreMim = () => {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá,  eu sou a Fhabiana!</h3>
            <img className={styles.fotoSobreMim} src={fotoSobreMim} alt="Foto sobre mim" />
            <p className={styles.paragrafo}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className={styles.paragrafo}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className={styles.paragrafo}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className={styles.paragrafo}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </PostModelo>
    )
}

export default SobreMim