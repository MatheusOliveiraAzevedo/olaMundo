import PostModelo from 'componentes/PostModelo/Indes'
import React from 'react'
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

const SobreMim = () => {
  return (
<PostModelo
  fotoCapa={fotoCapa}
  titulo="Sobre Mim"
>
    <h3 className={styles.subtitulo}>
      Olá, eu sou o Matheus
    </h3>

    <img 
    src={fotoSobreMim} 
    alt="Foto do Professor" 
    className={styles.fotoSobreMim}
    />
  <p className={styles.paragrafo}>
    Oi, tudo bem? Eu sou estudante de programação fron-end, e vou me apresentar pra você.
  </p>
  <p className={styles.paragrafo}>
    Minha história com programação começou a alguns anos em que eu tive oportunidade de começar um curso de programação no SENAI em SC, porem não tive condições de continuar pagando, então tive que parar logo no inicio do segundo semestre.
  </p>
  <p className={styles.paragrafo}>
    Continuei por alguns anos sem voltar aos estudos, continuei trabalhando em uma empresa na area de PCP de uma fabrica na região onde moro, porem quis voltar a estudar programação. 
  </p>
  <p className={styles.paragrafo}>
    Quando em 2020 eu iniciei finalmente um curso tecnologo de Analise e Desenvolvimento de Sistemas que durou 2 anos.
  </p>
  <p className={styles.paragrafo}>
    Depois de finalizar, percebendo que somente com esse curso não seria possivel entrar na area de fato, pois é um curso muito abrangente, procurei outros meios de aprendizados, alem de cursos gratuitos pela internet, encontrei na Alura uma oportunidade de aprender e ter suporte pra duvidas.
  </p>
  <p className={styles.paragrafo}>
    Por algum tempo fiquei estudando quando tinha tempo, uma a duas horas de noite quando dava. Decidi conversar com a empresa em que trabalhava para sair. Agora estudo diariamente focado em aprender o maximo que eu puder, alem de praticar.
  </p>
  <p className={styles.paragrafo}>
    Espero em breve conseguir meu primeiro emprego na area.
  </p>

</PostModelo>
  )
}

export default SobreMim