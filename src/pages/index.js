import Head from 'next/head'
import Image from 'next/image'
import Apresentcao from './components/main/apresentacao'
import QuemSomos from './components/main/quem_somos'
import Servico from './components/main/servico'


export default function Home() {
  return (
    <>
        <Apresentcao />
        <QuemSomos />
        <Servico />
    </>
  )
}
