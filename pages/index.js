import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>MyReb - Início</title>
        <meta name="description" content="crypto chat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className='page'>
        <h1>Main</h1>
      </main>
    </>
  )
}
