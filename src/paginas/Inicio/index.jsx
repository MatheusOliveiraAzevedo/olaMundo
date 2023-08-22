import React from 'react'
import styles from './Inicio.module.css'
import posts from 'json/posts.json'
import PostCard from 'componentes/PostCard'

const Inicio = () => {
  return (
    <div>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post}></PostCard>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Inicio