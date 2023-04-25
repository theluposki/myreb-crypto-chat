import Head from 'next/head'
import { getSession, signIn } from 'next-auth/react'

export default function Login() {

  return (
    <>
      <Head>
        <title>MyReb - Login</title>
        <meta name="description" content="crypto chat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className='page'>
        <div className='container'>
          <h1>Login</h1>
          <button onClick={() => signIn('github')}>Github</button>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx)

  console.log(session)

  if(session) {
    return {
      redirect: {
        destination: '/about',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

