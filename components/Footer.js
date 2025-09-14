import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Tau Gamma Phi</h3>
          <p>Brotherhood • Service • Excellence</p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/brothers">Brothers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Connect With Us</h4>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Tau Gamma Phi Fraternity. All rights reserved.</p>
      </div>
    </footer>
  )
}