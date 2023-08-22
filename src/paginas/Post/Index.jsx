import './Post.css'
import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo/Indes'
import NaoEncontrada from 'paginas/NaoEncontrada'
import PaginaPadrao from 'paginas/PaginaPadrao'
import PostCard from 'componentes/PostCard'

const Post = () => {

    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if(!post) {
        return <NaoEncontrada></NaoEncontrada>
    }

    const postRecomendados = posts.filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);


    // function outrosPosts() {


    //     const postCards = []
    //     const aleatorio = []

    //     for (let i = 0; i < 4; i++) {
    //         let random = Math.floor(Math.random() * posts.length)
    //         for (let cont = 0; cont < 4; cont++) {
    //             if (aleatorio[cont] === random){
    //                 random = Math.floor(Math.random() * posts.length)
    //                 cont = 0
    //             }
    //         }
            

    //         aleatorio.push(random)
    //         console.log(aleatorio)
    //         const element = posts[aleatorio[i]];
    //         postCards.push(<PostCard post={element}></PostCard>)
    //     }
        

    //     return postCards
    // }

  return (
    <Routes>
        <Route path='*' element={<PaginaPadrao/>}>
            <Route index element={
                <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >
                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>
                        <h2 className='tituloOutrosPosts'>Outros posts que você pode gostar:</h2>
                    <ul className="posts">
                        {postRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post}></PostCard>
                            </li>
                        ))}
                    </ul>
                </PostModelo>
            }/>
        </Route>
    </Routes>
  )
}

export default Post