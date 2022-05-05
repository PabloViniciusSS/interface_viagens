
import Apresentcao from './components/main/apresentacao'
import QuemSomos from './components/main/quem_somos'
import Servico from './components/main/servico'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Apresentcao />
      <QuemSomos />
      <Servico />
      
    </div>
  )
}
