
import Apresentcao from './components/main/apresentacao'
import QuemSomos from './components/main/quem_somos'
import Servico from './components/main/servico'
import styles from '../styles/Home.module.css'
import Planos from './components/main/planos'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.apresentacao_container}>
      <Apresentcao />
      </div>
      <div className={styles.quemsomos_container}>
      <QuemSomos />
      </div>
      <div className={styles.servico_container}>
      <Servico />
      </div>
      <div className={styles.planos_container}>
      <Planos />
      </div>
     
   
  

      
    </div>
  )
}
