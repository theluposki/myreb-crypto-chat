import Header from './Header.js'
import Footer from './Footer.js'
import Aside from './Aside.js'

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <main className='main'>
            <Aside />
            <section>{children}</section>
        </main>
      <Footer />
    </>
  )
}