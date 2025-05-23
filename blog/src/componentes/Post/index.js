import { useParams } from "react-router-dom"
import ReactMarkDown from "react-markdown"
import PostModelo from "../PostModelo"
import PostCard from "../PostCard"
import NaoEncontrada from '../../paginas/NaoEncontrada'
import posts from '../../json/posts.json'
import './Post.css'
import styles from './Post.module.css'
import PaginaPadrao from "../../paginas/PaginaPadrao"

const Post = () => {
    const param = useParams();
    const post = posts.find((post) => {
        return post.id === Number(param.id)
    })
    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomenados = posts
        .filter((post) => post.id !== Number(param.id))
        .sort((a, b) => b.id - a.id)
        .slice((0,3))

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkDown>
                        {post.texto}
                    </ReactMarkDown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                <ul className={styles.postRecomendados}>
                    {postsRecomenados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    ))}
                </ul>
            </PostModelo>

        </PaginaPadrao>
    )
}

export default Post