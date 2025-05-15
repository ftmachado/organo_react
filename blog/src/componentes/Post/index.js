import { useParams } from "react-router-dom"
import ReactMarkDown from "react-markdown"
import PostModelo from "../PostModelo"
import NaoEncontrada from '../../paginas/NaoEncontrada'
import posts from '../../json/posts.json'
import './Post.css'
import PaginaPadrao from "../../paginas/PaginaPadrao"

const Post = () => {
    const param = useParams();
    const post = posts.find((post) => {
        return post.id === Number(param.id)
    })
    if (!post) {
        return <NaoEncontrada />
    }
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
            </PostModelo>

        </PaginaPadrao>
    )
}

export default Post