import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tau Gamma Phi - Home</title>
        <meta name="description" content="Official website of Tau Gamma Phi Fraternity" />
      </Head>

      <Hero />

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Welcome to Tau Gamma Phi</h2>
          <p className={styles.sectionDescription}>
            Tau Gamma Phi (ΤΓΦ), also known as the Triskelions' Grand Fraternity, is one of the largest fraternities in the Philippines. Founded on October 4, 1968, we are committed to brotherhood, service, and excellence.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Brotherhood</h3>
              <p>We foster lifelong bonds of friendship and support among our members.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Service</h3>
              <p>We are committed to serving our communities and making a positive impact.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Excellence</h3>
              <p>We strive for excellence in all our endeavors, both personal and professional.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}