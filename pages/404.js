import Head from 'next/head'
import styles from '@/styles/404.module.css'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>MyReb - Não encontrado</title>
        <meta name="description" content="crypto chat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className='page'>
        <div className='container'>
          <h1 className={styles.title}>404</h1>
          <p className={styles.title}>Não encontrado</p>
        </div>
      </main>
    </>
  )
}
