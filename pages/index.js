import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  
  const [users, setUsers] = useState([])

  const getUser = async () => {
    const response = await fetch("/api/users")
    const data = await response.json()
    setUsers(data)
  }



  return (
    <>
      <Head>
        <title>MyReb - Início</title>
        <meta name="description" content="crypto chat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className='page'>
        <div className='container'>
          <h1>Início</h1>

          <ul>
            {
              users.map(item => (
                <li key={item.id}>{item.name}</li>
              ))
            }
          </ul>

          <button onClick={getUser}>Get User</button>
        </div>
      </main>
    </>
  )
}
