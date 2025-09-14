import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Header() {
  const [imageError, setImageError] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Fallback to text if image fails to load
  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            {imageError ? (
              // Fallback text logo if image fails to load
              <span className={styles.logoFallback}>ΤΓΦ</span>
            ) : (
              // Try to load the image
              <Image
                src="/images/tgpseaL.png"
                alt="Tau Gamma Phi Logo"
                width={100}
                height={60}
                className={styles.logoImage}
                priority
                onError={handleImageError}
              />
            )}
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        <nav>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
            <li>
              <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/history" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>History</Link>
            </li>
            <li>
              <Link href="/brothers" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Brothers</Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}