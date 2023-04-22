import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>MyReb - Sobre</title>
        <meta name="description" content="crypto chat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className='page'>
        <div className='container'>
          <h1>Sobre</h1>
        </div>
      </main>
    </>
  )
}
