import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  
  const [users, setUsers] = useState([])

  const addUser = async () => {
    const response = await fetch("/api/users", {
      method: 'POST',
      body: JSON.stringify({ id: 5, name: "Joana" })
    })

    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/users")
      const data = await response.json()
      setUsers(data)
    }

    getUser().catch(console.error);
   
  },[users])



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
            { users.length > 0 && (
              users.map(item => (
                <li key={item.id}>{item.name}</li>
              ))
            )
            }
          </ul>

          <button onClick={addUser}>Get User</button>
        </div>
      </main>
    </>
  )
}
