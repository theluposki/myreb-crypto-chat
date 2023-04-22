import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
      <>
        <header className={styles.header}>
            <Link href='/'>
              <div className={styles.logo}>
                <img src='/icons/logo.svg' alt='Logo' />
                <span>MyReb</span>
              </div>
            </Link>
        </header>
      </>
    )
  }