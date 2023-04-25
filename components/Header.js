import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useSession } from 'next-auth/react'

export default function Header() {
    const { data: session } = useSession()

    return (
      <>
        <header className={styles.header}>
            <Link href='/'>
              <div className={styles.logo}>
                <img src='/icons/logo.svg' alt='Logo' />
                <span>MyReb</span>
              </div>
            </Link>

            <div className={styles.userSession}>
              <span>{ session?.user?.name}</span>
              <img src={ session?.user?.image} alt="img"/>
            </div>
        </header>
      </>
    )
  }
