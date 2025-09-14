import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/tgpseal.jpg"
              alt="Tau Gamma Phi Logo"
              width={150}
              height={60}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>
        
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>About</Link>
            </li>
            <li>
              <Link href="/history" className={styles.navLink}>History</Link>
            </li>
            <li>
              <Link href="/brothers" className={styles.navLink}>Brothers</Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}