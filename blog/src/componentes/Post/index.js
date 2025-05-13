import { useParams } from "react-router-dom"
import ReactMarkDown from "react-markdown"
import PostModelo from "../PostModelo"
import posts from '../../json/posts.json'
import './Post.css'

const Post = () => {
    const param = useParams();
    const post = posts.find((post) => {
        return post.id === Number(param.id)
    })
    if (!post) {
        return <h1>Post não encontrado</h1>
    }
    return (
        <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            <div className="post-markdown-container">
                <ReactMarkDown>
                    {post.texto}
                </ReactMarkDown>
            </div>
        </PostModelo>
    )
}

export default Post