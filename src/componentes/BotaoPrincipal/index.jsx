import styles from './BotaoPrincial.module.css'
import React from 'react'

const BotaoPrincipal = ({ children, tamanho }) => {
  return (
    <button className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
        `}>
        {children}
    </button>
  )
}

export default BotaoPrincipal