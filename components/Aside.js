import { useState } from 'react'
import styles from '../styles/Aside.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Aside() {

    const [expand, setExpand] = useState(false)

    const expandMenu = () => {
      setExpand(expand => !expand)
    }

    const { pathname } = useRouter()


    console.log(pathname)
    return (
      <>
        <aside className={styles.aside}>
            <div className={styles.expands} onClick={expandMenu}>
              { expand ? <img src='/icons/menu-alt.svg' alt='shrink menu'/> : <img src='/icons/menu.svg' alt='expand menu'/> }
            </div>

            {
              expand ?

                <nav className={styles.nav}>
                  <Link href='/' className={ pathname === '/' ? styles.navLinkExpandedActive : styles.navLinkExpanded}>
                    <img src='/icons/home.svg' alt='home' />
                    <span className={styles.navLinkText}>Início</span>
                  </Link>

                  <Link href='/about' className={pathname === '/about' ? styles.navLinkExpandedActive : styles.navLinkExpanded}>
                    <img src='/icons/info.svg' alt='home' />
                    <span className={styles.navLinkText}>Sobre</span>
                  </Link>
                </nav>

                :

                <nav className={styles.nav}>
                  <Link href='/' className={ pathname === '/' ? styles.navLinkActive : styles.navLink}>
                    <img src='/icons/home.svg' alt='home' />
                  </Link>

                  <Link href='/about' className={pathname === '/about' ? styles.navLinkActive : styles.navLink}>
                    <img src='/icons/info.svg' alt='home' />
                  </Link>
                </nav>

            }




            <footer>
                <button className={styles.btnLogout}>
                  <img src='/icons/log-out.svg' alt='log-out'/>  
                </button>        
            </footer>
        </aside>
      </>
    )
  }