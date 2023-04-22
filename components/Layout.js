import Header from './Header.js'
import Footer from './Footer.js'
import Aside from './Aside.js'

export default function Layout({ children }) {
  return (
    <>  
        <div className='layout'>
            <Aside />
            <main className='main'>
                <Header />
                <section>{children}</section>
                <Footer />
            </main>
        </div>
    </>
  )
}